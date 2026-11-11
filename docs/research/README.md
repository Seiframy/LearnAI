# LearnAI research

Use this folder to record research findings, presentation claims, and decisions that may shape the prototype. Start with the [project status](../../PROJECT_STATUS.md), the [historical seminar checklist](../seminar-checklist.md), and the [research note template](note-template.md).

## Research materials

- [Editable methodology and system diagrams](../methodology/README.md)
- [Seminar presentation draft and editable methodology slide](../presentations/seminar-draft.md)
- [Literature notes](papers/README.md), including the [OpenGame note](papers/opengame.md)
- [Research import provenance](provenance.md)
- [Curated conversation summaries](conversations/README.md)

## From a source to a project decision

1. Start with a question that supports a project decision, slide, or experiment. Use the [conversation guide](conversations/README.md) for takeaways from a chat you could actually review.
2. Save a Markdown research note with a descriptive filename. Use `papers/` for literature notes and `drafts/` for public-safe planning drafts when they are ready for review. For a paper, cite the DOI or preprint page and note the version or page. For a repository, cite its URL, license, and the commit or release you reviewed.
3. Connect the note to an action. For a slide, record the claim and its source. For an experiment, record the baseline, metric, and result when available. For a repository review, record what could fit LearnAI and one test that would help decide.
4. Review the proposed changes before a commit or push. A GitHub issue can track an open task, and a pull request can group related changes for review.

For example, a paper about game playability checks could inform a LearnAI experiment. Record which checks are transferable, then use them to test a mission generated from an approved lesson PDF.

## OneDrive and GitHub

| Material | Local working copy | GitHub, after review |
| --- | --- | --- |
| Papers | `LearnAI-Research/papers/` | Citation and summary in `docs/research/papers/`. The licensed [OpenGame PDF](../../papers/README.md) is in `papers/`. |
| Research summaries and decisions | Private working notes as needed | Reviewed Markdown in `docs/research/` and [curated conversation summaries](conversations/README.md) |
| PowerPoints and PDF exports | `LearnAI-Research/presentations/` or `methodology-drafts/` | Editable methodology slide in `methodology-drafts/`. Seminar outline in `docs/presentations/`. |
| Editable methodology diagrams | `LearnAI-Research/diagrams/` | Reviewed `.drawio` sources in `diagrams/`. Design notes in `docs/methodology/`. |
| Planning drafts and feedback | `LearnAI-Research/planning/`, `methodology-drafts/`, and `professor-feedback/` | Public-safe decisions or draft Markdown in `docs/research/drafts/` |
| Prototypes | A dedicated source checkout | Source and run instructions on the relevant prototype branch |

Add a folder when its first reviewed item is ready. Review contents, embedded assets, notes, metadata, and redistribution rights before copying source material into the public repository.

## Graphify

The [Graphify guide](../../graphify-guide/README.md) covers local setup, code-only rebuilds, and source verification for the MLP Lab. The research knowledge base uses Markdown links and source citations.
