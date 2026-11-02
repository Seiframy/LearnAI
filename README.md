# LearnAI · MLP Lab

A browser-based educational prototype with two connected activities: inspect a fixed 2-input / 2-hidden / 1-output neural network, then predict its forward-pass values.

This milestone uses React + TypeScript, one authoritative network state and a pure calculation module. No AI, backend, database, Python execution, training or persistence. Reloading restores the example. This demonstration is not evidence of improved learning. Earlier seminar/course-assistant documents are historical planning material.

## Run locally

Use Node.js 22 LTS (tested with 22.14.0) and npm:

```sh
git clone --branch dev/mlp-connected-activities https://github.com/Seiframy/LearnAI.git
cd LearnAI
npm ci
npm run dev
```

Open the URL printed by Vite, normally http://127.0.0.1:5173/. If you already have this checkout, run the npm commands from its root. No API keys are needed. All assets are local after dependency installation.

```sh
npm test
npm run build
npm run preview
```

Tests compile and run with Node's built-in test runner. Build performs strict TypeScript checking and creates `dist/`. Preview serves the production build locally. Generated `dist/`, `.test-dist/` and `node_modules/` are ignored.

## Verify it yourself

1. Select a connection in the diagram, a parameter chip, or the dropdown; edit its weight. Hidden/output neurons select biases.
2. For the default example, **h1 weighted sum = −1**, **h1 activation = 0**, **h2 activation = 1.5**, **output y = −1.25**.
3. Select **Output y**, then change **x1 → h1** from **0.5** to **3**. The new answer is **1.75**. Both revision badges update together; old answers/feedback clear, but the selected question stays.
4. Change **y bias** to **−0.75**. Output becomes **0.75**.
5. Try an empty parameter or **11**: an error appears; the last valid value stays in use. Allowed values are −10 to 10.
6. **Reveal neuron values** enables study mode. **Reset example** resets parameters, inputs, reveal state, selection and prediction.

Connections support Enter/Space; dropdown/chips provide another way to inspect them. This is a fixed-topology builder: neuron creation/removal is outside this milestone.

## Calculations

For hidden neuron j:

`z[j] = x[0] * W[j][0] + x[1] * W[j][1] + b[j]`

`h[j] = max(0, z[j])` (ReLU)

`y = h[0] * v[0] + h[1] * v[1] + outputBias` (linear output)

Hidden-weight rows belong to receiving hidden neurons. No output sigmoid or ReLU is applied, so negative output is valid. Grading uses full floating-point values with absolute tolerance 0.001. Only display labels are rounded to four decimals.

## Communication

`App` owns the reducer state and passes the same `network` to both activities. All accepted edits pass through `labReducer`, which validates and immutably updates the configuration. The increasing revision remounts challenge attempts to clear stale answers. Results are derived; neither activity keeps its own network copy. Target selection is separate UI state.

## Files

| File | Responsibility |
|---|---|
| `src/network.ts` | Types, validation, pure forward pass, grading and explanations |
| `src/state.ts` | Immutable edits, reset and revision tracking |
| `src/main.tsx` | React activities, SVG diagram, inspector and prediction feedback |
| `src/styles.css` | Responsive layout and keyboard focus |
| `tests/network.test.ts` | Independent hand-calculated fixtures, invalid inputs and shared-state regression checks |
| `index.html` | Browser entry document |
| `package.json`, `package-lock.json` | Dependencies, scripts and repeatable installation |
| `tsconfig.json`, `tsconfig.test.json` | Strict app checking and test compilation |

Runtime dependencies: React and React DOM. Development dependencies: Vite, TypeScript and type definitions. No extra testing framework or remotely loaded fonts/assets.

## Verification performed

- 10 automated tests: hand-calculated default/asymmetric fixtures, negative/zero ReLU, linear output, purity, invalid values/dimensions, tolerance and state integration/reset.
- Strict TypeScript check and production build.
- Chrome browser checks: predictions, shared edits, stale-feedback clearing, retained question, invalid-value guard, reset and 360px layout without horizontal overflow.
- Desktop/mobile visual inspection. Representative checks, not exhaustive browser/accessibility certification.

Later milestones may add topology editing, training, lecture upload or AI generation. They are not present in this prototype.
