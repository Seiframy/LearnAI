---
name: learnai-session-sync
description: Prepare a LearnAI end-of-chat or milestone checkpoint from available evidence. Update project status and draft a reviewable change list before any authorized GitHub publication.
---

Read the repository's `AGENTS.md`, `PROJECT_STATUS.md`, and relevant notes. Check the active branch, `git status --short --branch`, and both the staged and unstaged diff. Preserve unrelated edits. Use the current chat, supplied summaries or files, and conversations an available connector can actually retrieve. Other ChatGPT chats are inaccessible by default. If evidence is missing, label the gap or ask for a summary when it materially affects the update.

Record completed work with evidence links and verification results. List proposals, decisions and rationale, changed paths, blockers, and next actions separately from completed work. Update `PROJECT_STATUS.md` for durable changes. Update `README.md` for changes to scope or entry points, and relevant research, decision, or curated conversation notes for durable findings. Link to existing notes instead of repeating them.

Review the resulting status and diff, including untracked files intended for the checkpoint. Exclude private feedback, student data, raw chats, credentials, generated graphs, and assets without cleared reuse rights. Show the exact paths and planned actions for review. Commit or push only with explicit user authorization that covers the reviewed changes and the action. Use a feature branch for proposed changes. Open a PR when requested and authorized, with evidence, unresolved items, and verification in its description.
