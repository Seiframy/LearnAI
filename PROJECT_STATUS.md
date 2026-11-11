# LearnAI project status

Reviewed 12 November 2026.

| Work | Evidence | Status |
| --- | --- | --- |
| Course-context assistant | [Original project brief](docs/history/course-context-assistant.md) and [GitHub main](https://github.com/Seiframy/LearnAI/tree/main) | Historical proposal. It asked whether persistent course context and curated Egyptian academic resources improve the relevance of study assistance. Its evaluation compared general, document-aware, and course-context assistance. |
| Educational game generation | Local LearnAI deck and editable architecture, PDF-to-game pipeline, and activity workflow diagrams | Newer design proposal. It takes a lesson PDF, extracts page-tagged text, generates and validates a mission specification, and loads it into a reusable Three.js browser level. The proposed variable content includes story, challenges, and feedback. |
| MLP Lab | [Public prototype branch](https://github.com/Seiframy/LearnAI/tree/dev/mlp-connected-activities) at `5eaf66d` | React and TypeScript demo with a fixed neural network, an inspector, and a forward-pass challenge. Its branch README documents a deterministic calculation module. |

## Scope differences to resolve

The older proposal delivers source-grounded explanations and resource recommendations in a persistent course workspace. The newer proposal delivers a playable mission from a lesson PDF inside a reusable level. This changes the user experience, input, and evaluation. For the game, the deck proposes checking generated content against the lesson and completing a playthrough. The earlier assistant baseline remains relevant to the older research question. Any comparison intended to measure learning outcomes needs its own study design.

The relationship between the two proposals is open. Confirm whether game generation replaces the earlier product direction, becomes a module within it, or stays a separate experiment. Confirm which audience and evaluation question carry forward before updating the public project description.

## Implementation and evidence

- GitHub's default branch at `754cccd` contains planning documentation. The MLP Lab is the implementation verified in the inspected GitHub branches.
- The newer deck and diagrams establish design intent. An end-to-end PDF-to-game implementation and its evaluation results remain unverified in the inspected repository and research folder.
- A proposed demo milestone is to use the same level with missions generated from two approved lesson PDFs. Record lesson grounding, validation results, and whether each mission can be played through. Track any learning study separately.
- The local `graphify-learnai` MCP server points to the MLP Lab code graph. The previous check reproduced 79 nodes and 124 edges for that checkout. See the [Graphify workflow](docs/research/README.md#graphify).
