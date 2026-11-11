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
- [Research workflow](docs/research/README.md) explains how to record sources, presentation claims, and experiment notes.
- [Conversation summaries](docs/research/conversations/README.md) records selected takeaways from material the contributor could actually review.
- [Agent instructions](AGENTS.md) gives Codex the starting files and review rules.

## Working materials

Use GitHub for reviewed Markdown notes, decisions, citations, public-safe editable diagrams, and prototype source. Keep working PowerPoints, paper PDFs, unreviewed drafts, and private feedback in the local `LearnAI-Research` folder. Record a public-safe outline or source link in the research index when it helps a reader understand a decision.

## Prototype

The [MLP Lab branch](https://github.com/Seiframy/LearnAI/tree/dev/mlp-connected-activities) contains an existing educational prototype with a network inspector and a forward-pass prediction activity. See [Project status](PROJECT_STATUS.md) for the separate PDF-to-game implementation status.
