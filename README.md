# LearnAI

LearnAI is an AI-powered PDF-to-educational-game generator. The goal is to help students learn the content of an educational PDF by playing a game generated from it.

## Intended workflow

1. A student uploads educational material as a PDF.
2. AI extracts the content and identifies the concepts and learning objectives.
3. The system turns the learning content into game logic, mechanics, and narrative where appropriate.
4. The system generates a playable, interactive educational game.
5. The student learns by interacting with the game.

The current priority is organizing the research and preserving the methodology. The [historical course-context assistant proposal](docs/history/course-context-assistant.md) preserves the earlier research question, scope, and evaluation plan.

## Start here

- [Project status](PROJECT_STATUS.md) records the confirmed scope, implementation status, and research priorities.
- [Research index](docs/research/README.md) links the literature notes, diagrams, drafts, and research workflow.
- [PDF-to-game design diagrams](diagrams/) and the [editable methodology slide](presentations/methodology-drafts/LearnAI%20Methodology.pptx) describe the proposed system.
- [Seminar draft](presentations/seminar-draft.md) and [related-works slides](presentations/relatedworks-draft/LearnAI%20Related%20Works.pptx) cover the first seminar.
- [Conversation summaries](docs/research/conversations/README.md) records selected takeaways from material the contributor could actually review.
- [Agent instructions and Codex workflows](AGENTS.md) cover code navigation and end-of-chat checkpoints.
- [First-seminar related works](papers/README.md) collects the three sources and their [comparison](papers/related-works.md).

## Working materials

The [import record](docs/research/provenance.md) records the sources of the research materials. The repository contains [design diagrams](diagrams/), [presentation drafts](presentations/), [seminar papers](papers/README.md), and the [Graphify setup guide](graphify-guide/README.md). The project owner approved public display of the three existing [faculty feedback images](professor_feedback/). Keep other private feedback and generated Graphify outputs local.

## Prototype

The [MLP Lab branch](https://github.com/Seiframy/LearnAI/tree/dev/mlp-connected-activities) contains an existing educational prototype with a network inspector and a forward-pass prediction activity. The [3D Neural Workshop](https://github.com/Seiframy/learnai-mlp) extends that educational prototype in its own repository. See [Project status](PROJECT_STATUS.md) for PDF-to-game implementation status.
