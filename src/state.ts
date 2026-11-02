import { initialNetwork, validateNetwork, type Network } from './network.js';
export type Field =
  | { kind: 'input'; index: 0 | 1 }
  | { kind: 'hiddenWeight'; neuron: 0 | 1; input: 0 | 1 }
  | { kind: 'hiddenBias'; index: 0 | 1 }
  | { kind: 'outputWeight'; index: 0 | 1 }
  | { kind: 'outputBias' };
export interface LabState { network: Network; revision: number }
export type Action = { type: 'edit'; field: Field; value: number } | { type: 'reset' };
export const initialState = (): LabState => ({ network: initialNetwork(), revision: 0 });
export function labReducer(state: LabState, action: Action): LabState {
  if (action.type === 'reset') return { network: initialNetwork(), revision: state.revision + 1 };
  const n = structuredClone(state.network);
  const { field: f, value } = action;
  switch (f.kind) {
    case 'input': n.inputs[f.index] = value; break;
    case 'hiddenWeight': n.hiddenWeights[f.neuron][f.input] = value; break;
    case 'hiddenBias': n.hiddenBiases[f.index] = value; break;
    case 'outputWeight': n.outputWeights[f.index] = value; break;
    case 'outputBias': n.outputBias = value; break;
  }
  validateNetwork(n);
  if (JSON.stringify(n) === JSON.stringify(state.network)) return state;
  return { network: n, revision: state.revision + 1 };
}
