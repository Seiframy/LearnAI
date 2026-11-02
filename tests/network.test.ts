import test from 'node:test';
import assert from 'node:assert/strict';
import { forward, initialNetwork, isCorrect, targetValue, validateNetwork } from '../src/network.js';
import { initialState, labReducer, type Field } from '../src/state.js';

test('default example matches hand calculation, including negative linear output', () => {
  // h1: 1*.5 + 2*(-1) + .5 = -1 -> 0
  // h2: 1*1 + 2*.5 - .5 = 1.5 -> 1.5; y: 0*2 + 1.5*(-1) + .25 = -1.25
  assert.deepEqual(forward(initialNetwork()), { hiddenSums: [-1, 1.5], hidden: [0, 1.5], output: -1.25 });
});
test('asymmetric fixture catches transposed weights and bias errors', () => {
  const n = { inputs: [-2, 3] as [number, number], hiddenWeights: [[2, 3], [-1, -2]] as [[number, number], [number, number]], hiddenBiases: [1, 2] as [number, number], outputWeights: [-0.5, 4] as [number, number], outputBias: 2 };
  assert.deepEqual(forward(n), { hiddenSums: [6, -2], hidden: [6, 0], output: -1 });
});
test('zero weights preserve biases; ReLU includes the zero boundary', () => {
  const n = initialNetwork(); n.hiddenWeights = [[0, 0], [0, 0]]; n.hiddenBiases = [0, 2]; n.outputWeights = [1, 3]; n.outputBias = -1;
  assert.deepEqual(forward(n), { hiddenSums: [0, 2], hidden: [0, 2], output: 5 });
});
test('forward is pure and does not modify the supplied network', () => {
  const n = initialNetwork(), before = structuredClone(n); forward(n); assert.deepEqual(n, before);
});
test('bad dimensions, missing fields, non-finite and out-of-range values are rejected', () => {
  for (const bad of [NaN, Infinity, -Infinity, 11, -11]) {
    const n = initialNetwork(); n.hiddenWeights[0][0] = bad; assert.throws(() => forward(n));
  }
  const n = initialNetwork(); n.inputs = [1] as unknown as [number, number]; assert.throws(() => validateNetwork(n));
  assert.throws(() => validateNetwork({} as ReturnType<typeof initialNetwork>));
});
test('all prediction targets use the corresponding forward-pass value', () => {
  const p = forward(initialNetwork());
  assert.deepEqual(['h1-sum', 'h1', 'h2-sum', 'h2', 'output'].map(t => targetValue(p, t as Parameters<typeof targetValue>[1])), [-1, 0, 1.5, 1.5, -1.25]);
});
test('grading accepts stated absolute tolerance and rejects empty/invalid answers', () => {
  assert.ok(isCorrect('-1.25', -1.25)); assert.ok(isCorrect('-1.249', -1.25));
  for (const text of ['', ' ', 'NaN', 'Infinity', 'hello', '-1.2489']) assert.equal(isCorrect(text, -1.25), false);
  assert.equal(isCorrect('0', NaN), false);
});
test('every editable field updates immutably and increments shared revision', () => {
  const fields: Field[] = [{ kind: 'input', index: 0 }, { kind: 'input', index: 1 },
    { kind: 'hiddenWeight', neuron: 0, input: 0 }, { kind: 'hiddenWeight', neuron: 0, input: 1 },
    { kind: 'hiddenWeight', neuron: 1, input: 0 }, { kind: 'hiddenWeight', neuron: 1, input: 1 },
    { kind: 'hiddenBias', index: 0 }, { kind: 'hiddenBias', index: 1 },
    { kind: 'outputWeight', index: 0 }, { kind: 'outputWeight', index: 1 }, { kind: 'outputBias' }];
  for (const field of fields) {
    const old = initialState(), snapshot = structuredClone(old);
    const updated = labReducer(old, { type: 'edit', field, value: 3 });
    assert.deepEqual(old, snapshot); assert.equal(updated.revision, 1); assert.notDeepEqual(updated.network, old.network);
  }
});
test('edits change both challenge calculation and the shared network; reset creates a new revision', () => {
  let s = initialState();
  s = labReducer(s, { type: 'edit', field: { kind: 'hiddenWeight', neuron: 0, input: 0 }, value: 3 });
  assert.equal(s.network.hiddenWeights[0][0], 3); assert.equal(forward(s.network).hidden[0], 1.5);
  assert.equal(targetValue(forward(s.network), 'output'), 1.75);
  s = labReducer(s, { type: 'reset' }); assert.deepEqual(s.network, initialNetwork()); assert.equal(s.revision, 2);
});
test('rejected edits preserve the previous network; unchanged edits preserve revision', () => {
  const s = initialState(); assert.throws(() => labReducer(s, { type: 'edit', field: { kind: 'outputBias' }, value: NaN }));
  assert.deepEqual(s, initialState());
  assert.equal(labReducer(s, { type: 'edit', field: { kind: 'outputBias' }, value: .25 }), s);
});
