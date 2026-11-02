/** Fixed topology. Each hidden weight row belongs to one receiving neuron. */
export type Pair = [number, number];
export interface Network {
  inputs: Pair;
  hiddenWeights: [Pair, Pair];
  hiddenBiases: Pair;
  outputWeights: Pair;
  outputBias: number;
}
export interface ForwardPass { hiddenSums: Pair; hidden: Pair; output: number }
export type Target = 'h1-sum' | 'h1' | 'h2-sum' | 'h2' | 'output';

export function initialNetwork(): Network {
  return {
    inputs: [1, 2], hiddenWeights: [[0.5, -1], [1, 0.5]],
    hiddenBiases: [0.5, -0.5], outputWeights: [2, -1], outputBias: 0.25,
  };
}

export function validateNetwork(n: Network): void {
  const pair = (v: unknown): v is Pair => Array.isArray(v) && v.length === 2
    && v.every(x => typeof x === 'number' && Number.isFinite(x) && Math.abs(x) <= 10);
  if (!n || !pair(n.inputs) || !Array.isArray(n.hiddenWeights) || n.hiddenWeights.length !== 2
    || !n.hiddenWeights.every(pair) || !pair(n.hiddenBiases) || !pair(n.outputWeights)
    || typeof n.outputBias !== 'number' || !Number.isFinite(n.outputBias) || Math.abs(n.outputBias) > 10) {
    throw new Error('A 2–2–1 network requires finite inputs, weights and biases between −10 and 10.');
  }
}

export function forward(n: Network): ForwardPass {
  validateNetwork(n);
  const sum = (j: 0 | 1) => n.inputs[0] * n.hiddenWeights[j][0]
    + n.inputs[1] * n.hiddenWeights[j][1] + n.hiddenBiases[j];
  const hiddenSums: Pair = [sum(0), sum(1)];
  const hidden: Pair = [Math.max(0, hiddenSums[0]), Math.max(0, hiddenSums[1])];
  const output = hidden[0] * n.outputWeights[0] + hidden[1] * n.outputWeights[1] + n.outputBias;
  return { hiddenSums, hidden, output };
}

export function targetValue(p: ForwardPass, target: Target): number {
  switch (target) {
    case 'h1-sum': return p.hiddenSums[0];
    case 'h1': return p.hidden[0];
    case 'h2-sum': return p.hiddenSums[1];
    case 'h2': return p.hidden[1];
    case 'output': return p.output;
  }
}

/** Full precision for grading; display rounding never feeds back into calculations. */
export function isCorrect(text: string, expected: number): boolean {
  if (!text.trim() || !Number.isFinite(expected)) return false;
  const value = Number(text);
  return Number.isFinite(value) && Math.abs(value - expected) <= 0.001 + 1e-12;
}
export const display = (n: number): string => Number(n.toFixed(4)).toString();

export function workedSolution(n: Network, p: ForwardPass, target: Target): string {
  const f = (x: number) => `(${display(x)})`;
  if (target === 'output') return `y = ${f(p.hidden[0])} × ${f(n.outputWeights[0])} + ${f(p.hidden[1])} × ${f(n.outputWeights[1])} + ${f(n.outputBias)} = ${display(p.output)}. The output is linear: no ReLU is applied here.`;
  const j = target.startsWith('h1') ? 0 : 1;
  const sum = `z${j + 1} = ${f(n.inputs[0])} × ${f(n.hiddenWeights[j][0])} + ${f(n.inputs[1])} × ${f(n.hiddenWeights[j][1])} + ${f(n.hiddenBiases[j])} = ${display(p.hiddenSums[j])}`;
  return target.endsWith('sum') ? sum : `${sum}; h${j + 1} = max(0, z${j + 1}) = ${display(p.hidden[j])}.`;
}
