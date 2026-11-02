import { StrictMode, useId, useReducer, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { display, forward, isCorrect, targetValue, workedSolution, type Network, type Target } from './network';
import { initialState, labReducer, type Field } from './state';
import './styles.css';

function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  const id = useId();
  const [draft, setDraft] = useState(String(value));
  const valid = draft.trim() !== '' && Number.isFinite(Number(draft)) && Math.abs(Number(draft)) <= 10;
  return <label className="number-field" htmlFor={id}><span>{label}</span>
    <input id={id} type="number" min="-10" max="10" step="any" value={draft} aria-invalid={!valid} aria-describedby={!valid ? `${id}-error` : undefined}
      onChange={e => { const text = e.target.value; setDraft(text); if (text.trim() && Number.isFinite(Number(text)) && Math.abs(Number(text)) <= 10) onChange(Number(text)); }}/>
    {!valid && <small id={`${id}-error`} className="error">Enter a number from −10 to 10. Last valid value is still in use.</small>}
  </label>;
}

type Selection = { field: Field; label: string; value: number };
function Builder({ network: n, revision, edit }: { network: Network; revision: number; edit: (f: Field, v: number) => void }) {
  const [selected, setSelected] = useState(0);
  const [reveal, setReveal] = useState(false);
  const p = forward(n);
  const items: Selection[] = [
    ...([0, 1] as const).flatMap(neuron => ([0, 1] as const).map(input => ({ field: { kind: 'hiddenWeight', neuron, input } as Field, label: `x${input + 1} → h${neuron + 1}`, value: n.hiddenWeights[neuron][input] }))),
    ...([0, 1] as const).map(index => ({ field: { kind: 'outputWeight', index } as Field, label: `h${index + 1} → y`, value: n.outputWeights[index] })),
    ...([0, 1] as const).map(index => ({ field: { kind: 'hiddenBias', index } as Field, label: `h${index + 1} bias`, value: n.hiddenBiases[index] })),
    { field: { kind: 'outputBias' }, label: 'y bias', value: n.outputBias },
  ];
  const node = [{ x: 70, y: 80 }, { x: 70, y: 220 }, { x: 270, y: 80 }, { x: 270, y: 220 }, { x: 470, y: 150 }];
  const edges = [[0, 2], [1, 2], [0, 3], [1, 3], [2, 4], [3, 4]];
  const choose = (i: number) => setSelected(i);
  return <section className="panel" aria-labelledby="builder-title"><div className="section-head"><span className="step">01</span><div><h2 id="builder-title">Build & inspect</h2><p>Fixed 2–2–1 topology. Select a connection or neuron to edit it.</p></div></div>
    <span className="badge">Shared network · revision {revision}</span>
    <div className="input-row">{([0, 1] as const).map(i => <NumberField key={`input-${i}`} label={`Input x${i + 1}`} value={n.inputs[i]} onChange={v => edit({ kind: 'input', index: i }, v)}/>)}</div>
    <svg className="network" viewBox="0 0 540 300" role="group" aria-label="Interactive neural network: two inputs, two ReLU hidden neurons, one linear output">
      <text x="70" y="25" textAnchor="middle" className="layer-label">INPUT</text><text x="270" y="25" textAnchor="middle" className="layer-label">HIDDEN · ReLU</text><text x="470" y="25" textAnchor="middle" className="layer-label">OUTPUT · linear</text>
      {edges.map(([a, b], i) => <g key={i} className={`connection ${selected === i ? 'selected' : ''}`} role="button" tabIndex={0} aria-label={`Inspect ${items[i].label}`} aria-pressed={selected === i} onClick={() => choose(i)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(i); } }}>
        <line className="hit" x1={node[a].x} y1={node[a].y} x2={node[b].x} y2={node[b].y}/><line className="wire" x1={node[a].x} y1={node[a].y} x2={node[b].x} y2={node[b].y}/>
      </g>)}
      {node.map((pos, i) => <g key={i} className={`neuron ${i >= 2 ? 'editable' : ''} ${selected === i + 4 && i >= 2 ? 'active' : ''}`} {...(i >= 2 ? { role: 'button', tabIndex: 0, 'aria-label': `Inspect ${items[i + 4].label}`, onClick: () => choose(i + 4), onKeyDown: (e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(i + 4); } } } : {})}>
        <circle cx={pos.x} cy={pos.y} r="27"/><text x={pos.x} y={pos.y + 5} textAnchor="middle">{['x1', 'x2', 'h1', 'h2', 'y'][i]}</text>
        <text className="node-value" x={pos.x} y={pos.y + 48} textAnchor="middle">{i < 2 ? display(n.inputs[i]) : reveal ? display(i < 4 ? p.hidden[i - 2] : p.output) : '?'}</text>
      </g>)}
    </svg>
    <div className="inspect"><label htmlFor="parameter">Connection or bias<select id="parameter" value={selected} onChange={e => choose(Number(e.target.value))}>{items.map((item, i) => <option value={i} key={item.label}>{item.label}</option>)}</select></label>
      <NumberField key={selected} label={`${items[selected].label} value`} value={items[selected].value} onChange={v => edit(items[selected].field, v)}/>
    </div>
    <div className="parameter-strip" aria-label="Current network parameters">{items.map((item, i) => <button key={item.label} className={selected === i ? 'chip active' : 'chip'} onClick={() => choose(i)} aria-pressed={selected === i}>{item.label}: <strong>{display(item.value)}</strong></button>)}</div>
    <label className="toggle"><input type="checkbox" checked={reveal} onChange={e => setReveal(e.target.checked)}/> Reveal neuron values (study mode)</label>
    <p className="hint">Hidden neurons use ReLU: max(0, weighted sum + bias). The output is linear and may be negative. This demo does not train weights.</p>
  </section>;
}

const targets: { id: Target; label: string }[] = [
  { id: 'h1-sum', label: 'h1 weighted sum, before ReLU' }, { id: 'h1', label: 'h1 activation, after ReLU' },
  { id: 'h2-sum', label: 'h2 weighted sum, before ReLU' }, { id: 'h2', label: 'h2 activation, after ReLU' },
  { id: 'output', label: 'Output y (linear)' },
];
function Challenge({ network, revision, target, setTarget }: { network: Network; revision: number; target: Target; setTarget: (target: Target) => void }) {
  const [answer, setAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const p = forward(network), expected = targetValue(p, target);
  const correct = isCorrect(answer, expected);
  const canCheck = answer.trim() !== '' && Number.isFinite(Number(answer));
  return <section className="panel challenge" aria-labelledby="challenge-title"><div className="section-head"><span className="step">02</span><div><h2 id="challenge-title">Predict & explain</h2><p>The same inputs, weights and biases. No copied network.</p></div></div>
    <span className="badge">Shared network · revision {revision}</span>
    <label htmlFor="target">What will you calculate?<select id="target" value={target} onChange={e => { setTarget(e.target.value as Target); setChecked(false); setAnswer(''); }}>{targets.map(t => <option value={t.id} key={t.id}>{t.label}</option>)}</select></label>
    <div className="formula"><span>FORWARD PASS</span><p>z = x₁w₁ + x₂w₂ + b</p><p>h = max(0, z)</p><p>y = h₁v₁ + h₂v₂ + bᵧ</p></div>
    <form onSubmit={e => { e.preventDefault(); if (canCheck) setChecked(true); }}>
      <label htmlFor="prediction">Your predicted value<input id="prediction" type="number" step="any" value={answer} onChange={e => { setAnswer(e.target.value); setChecked(false); }} placeholder="e.g. −1" required/></label>
      <p className="hint">Accepted error: ±0.001. Use the full values, not rounded labels.</p><button type="submit" className="primary" disabled={!canCheck}>Check prediction</button>
    </form>
    <div aria-live="polite">{checked && <div className={`feedback ${correct ? 'correct' : 'retry'}`}><h3>{correct ? 'Correct — nice reasoning.' : 'Not quite — trace the calculation.'}</h3><p>{workedSolution(network, p, target)}</p></div>}</div>
    <p className="hint">Changing any valid network value starts a fresh prediction and clears previous feedback. Choose another target to practise the next step.</p>
  </section>;
}

function App() {
  const [state, dispatch] = useReducer(labReducer, undefined, initialState);
  const [resetId, setResetId] = useState(0);
  const [target, setTarget] = useState<Target>('h1-sum');
  return <main><header><div className="wordmark"><span>L</span> LearnAI <small>NEURAL LAB</small></div><button onClick={() => { dispatch({ type: 'reset' }); setResetId(v => v + 1); setTarget('h1-sum'); }}>Reset example</button></header>
    <div className="intro"><span className="eyebrow">ONE NETWORK · TWO WAYS TO LEARN</span><h1>Build it. Predict it.<br/><em>Understand the connection.</em></h1><p>Explore a small multilayer perceptron, then calculate its forward pass. Every edit updates both activities.</p></div>
    <div className="activities"><Builder key={resetId} network={state.network} revision={state.revision} edit={(field, value) => dispatch({ type: 'edit', field, value })}/><Challenge key={state.revision} network={state.network} revision={state.revision} target={target} setTarget={setTarget}/></div>
    <footer>Milestone 1 · Fixed topology · Hidden ReLU + linear output · Session-only state · No AI or backend</footer>
  </main>;
}
createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>);
