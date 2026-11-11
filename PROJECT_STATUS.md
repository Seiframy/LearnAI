# LearnAI project status

Reviewed 12 November 2026.

## Scope decision resolved

The project owner confirmed on 12 November 2026 that LearnAI is an AI-powered PDF-to-educational-game generator. A student uploads an educational PDF. AI extracts and interprets its learning content, and the system translates that content into game logic, mechanics, and narrative where appropriate. The resulting interactive game is intended to help the student learn through play.

The course-context assistant is archived as historical context. Its research question and baseline belong to that earlier proposal.

## Work and evidence

| Work | Evidence | Status |
| --- | --- | --- |
| Course-context assistant | [Original project brief](docs/history/course-context-assistant.md) | Historical proposal. It asked whether persistent course context and curated Egyptian academic resources improve the relevance of study assistance. Its evaluation compared general, document-aware, and course-context assistance. |
| Educational game generation | [Editable methodology and system diagrams](docs/methodology/README.md) and [seminar draft](docs/presentations/seminar-draft.md) | Official project direction. The documented methodology proposes page-tagged text extraction, a validated mission specification, and a reusable Three.js browser level. Story, challenges, and feedback can vary by lesson. |
| MLP Lab | [Public prototype branch](https://github.com/Seiframy/LearnAI/tree/dev/mlp-connected-activities) at `5eaf66d` | Existing React and TypeScript prototype with a fixed neural network, an inspector, and a forward-pass challenge. Its branch README documents a deterministic calculation module. The prototype has no PDF intake or AI generation. |

## Current priority

The [research index](docs/research/README.md) links the imported methodology sources, seminar outline, literature notes, and provenance. The first proposed implementation milestone is a hand-written mission in one room with one console and one exit. Full game-generator implementation is deferred.

For future evaluation, record lesson grounding, schema validity, and playability as separate checks. Measuring learning outcomes requires a study design and evidence from learners.

## Implementation and evidence

- GitHub's default branch at `754cccd` contains planning documentation. The MLP Lab is the implementation verified in the inspected GitHub branches.
- The game design deck and diagrams establish design intent. An end-to-end PDF-to-game implementation and its evaluation results remain unverified in the inspected repository and research folder.
- A proposed demo milestone is to use the same level with missions generated from two approved lesson PDFs. Record lesson grounding, validation results, and whether each mission can be played through. Track any learning study separately.
- The local `graphify-learnai` MCP server points to the MLP Lab code graph. The previous check reproduced 79 nodes and 124 edges for that checkout. See the [Graphify workflow](docs/research/README.md#graphify).
