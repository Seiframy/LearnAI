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
| Papers | `LearnAI-Research/papers/` | Citation and an original summary in `docs/research/papers/` |
| Research summaries and decisions | Private working notes as needed | Reviewed Markdown in `docs/research/` and [curated conversation summaries](conversations/README.md) |
| PowerPoints and PDF exports | `LearnAI-Research/presentations/` or `methodology-drafts/` | Reviewed presentation sources and outlines in `docs/presentations/` |
| Editable methodology diagrams | `LearnAI-Research/diagrams/` | Reviewed `.drawio` source in `docs/methodology/` |
| Planning drafts and feedback | `LearnAI-Research/planning/`, `methodology-drafts/`, and `professor-feedback/` | Public-safe decisions or draft Markdown in `docs/research/drafts/` |
| Prototypes | A dedicated source checkout | Source and run instructions on the relevant prototype branch |

Add a folder when its first reviewed item is ready. Review contents, embedded assets, notes, metadata, and redistribution rights before copying source material into the public repository.

## Graphify

Use the LearnAI prototype graph to trace how the MLP lab works. From an Ubuntu login shell, point `source_repo` at a checkout of the code branch and `graph_dir` at a dedicated local output directory. Keep that directory outside the source checkout. The local setup uses the `prototype` checkout and `graphify-out` in `LearnAI-Research/graphify-learnai`.

```bash
GRAPHIFY_BACKEND=none graphify extract "$source_repo" --code-only --no-cluster --out "$graph_dir" --max-workers 4
GRAPHIFY_BACKEND=none graphify cluster-only "$graph_dir" --no-label
graphify explain forward --graph "$graph_dir/graphify-out/graph.json"
```

The dedicated prototype checkout tracks `dev/mlp-connected-activities`. When rebuilding, confirm the checkout and revision first. Use a separate output directory for another branch or repository. Open `GRAPH_REPORT.md` for an overview or `graph.html` for the browser view. Follow source locations to verify important relationships.

The code-only workflow skips documents and images. The `graphify-learnai` MCP server serves that code graph. The existing Harness2 graph has its own output directory and Codex registration. The research knowledge base uses Markdown links and source citations.
