# LearnAI research workflow

Use this folder to record research findings, presentation claims, and decisions that may shape the prototype. Start with the [project question and evaluation plan](../../README.md), the [seminar checklist](../seminar-checklist.md), and the [research note template](note-template.md).

## From a chat to a project decision

1. End a useful research chat with a short summary in your own words. Capture the question, primary sources, what you verified, and what you still need to test.
2. Save the summary as a Markdown note next to this file. Use a descriptive filename such as `document-aware-baseline.md` and add a link here when the note is ready. For a paper, cite its DOI or publisher link. For a repository, cite its URL, license, and the commit or release you reviewed.
3. Connect the note to an action. For a slide, record the claim and its source. For an experiment, record the baseline, metric, and result when available. For a repository review, record which part could fit LearnAI, what it would take to integrate, and one test that would help you decide.
4. Commit related notes together. Use a GitHub issue for an open task you want to track. For a substantial change, use a branch and a pull request to review the difference before merging.

For example, a repository review about course-document retrieval could lead to one evaluation task. Compare its citation accuracy against the document-aware baseline on the same course questions.

## OneDrive and GitHub

The OneDrive `LearnAI-Research` folder is the working home for slide decks, draft diagrams, papers, and professor feedback. Create public-safe summaries and source links here when they help explain the project. Before a push, review the staged files and their contents. This repository is public, so use approved material and public links in commits, issues, and pull requests.

## Graphify

Use the LearnAI prototype graph to trace how the MLP lab works. From an Ubuntu login shell, point `source_repo` at a checkout of the code branch and `graph_dir` at a dedicated local output directory. Keep that directory outside the source checkout. The local setup uses the `prototype` checkout and `graphify-out` in `LearnAI-Research/graphify-learnai`.

```bash
git -C "$source_repo" pull --ff-only
GRAPHIFY_BACKEND=none graphify extract "$source_repo" --code-only --no-cluster --out "$graph_dir" --max-workers 4
GRAPHIFY_BACKEND=none graphify cluster-only "$graph_dir" --no-label
graphify explain forward --graph "$graph_dir/graphify-out/graph.json"
```

The pull applies to the dedicated prototype checkout, which tracks `dev/mlp-connected-activities`. For another branch or repository, use a separate output directory. Open `GRAPH_REPORT.md` for an overview or `graph.html` for the browser view. Follow source locations to verify important relationships.

The code-only workflow skips documents and images. Semantic indexing uses a model to extract relationships from supported documents. If you try it later, start with a small set of approved Markdown notes and confirm which model will receive the text. The existing Harness2 graph has its own output directory and Codex registration.
