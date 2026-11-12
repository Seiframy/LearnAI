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
- [PDF-to-game methodology](docs/methodology/README.md) includes the editable design diagrams and [seminar draft](docs/presentations/seminar-draft.md).
- [Conversation summaries](docs/research/conversations/README.md) records selected takeaways from material the contributor could actually review.
- [Agent instructions and Codex workflows](AGENTS.md) cover code navigation and end-of-chat checkpoints.

- [First-seminar related works](papers/README.md) collects the three sources and their [comparison](papers/related-works.md).

## Working materials

Use GitHub for reviewed Markdown notes, decisions, citations, public-safe editable diagrams, and prototype source. The [import record](docs/research/provenance.md) identifies the original research materials and the reviewed files published here. The repo mirrors the PC folders [`diagrams/`](diagrams/), [`methodology-drafts/`](methodology-drafts/), [`papers/`](papers/README.md), and [`graphify-guide/`](graphify-guide/README.md) for reviewed material. Keep full working decks, the rest of the paper collection, private feedback, and generated Graphify outputs in the local research folder.

## Prototype

The [MLP Lab branch](https://github.com/Seiframy/LearnAI/tree/dev/mlp-connected-activities) contains an existing educational prototype with a network inspector and a forward-pass prediction activity. The [3D Neural Workshop](https://github.com/Seiframy/learnai-mlp) extends that educational prototype in its own repository. See [Project status](PROJECT_STATUS.md) for PDF-to-game implementation status.
