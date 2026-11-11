# Agent instructions

Read [README.md](README.md) and [PROJECT_STATUS.md](PROJECT_STATUS.md) before working. Use the [research index](docs/research/README.md) for citations, the [import record](docs/research/provenance.md) for asset provenance, and the [conversation guide](docs/research/conversations/README.md) for chat-derived material. Check the active Git branch and working tree before edits. Keep changes bounded and describe how you checked them.

- Treat AI-powered PDF-to-educational-game generation as the official LearnAI scope. Use the [project status](PROJECT_STATUS.md) to distinguish the confirmed vision, the proposed methodology, and verified implementation.
- Use the [course-context assistant brief](docs/history/course-context-assistant.md) as historical context. Its research question, baseline, and optional integrations belong to that earlier proposal.
- Describe the MLP Lab as an existing prototype for educational interaction. Keep claims about PDF intake, AI generation, and end-to-end playability tied to verified PDF-to-game work.
- Prioritize organizing the research and preserving the editable methodology. Start full game-generator implementation only when the project owner requests it.
- For game evaluation, record source fidelity, schema validity, playability, and measured learning outcomes separately. Record the method and result when a test runs.
- Verify claims and citations against primary sources. AI-simulated reviews cannot establish human endorsement. Require evidence for claims about learning differences, novelty, accuracy guarantees, or grade improvement.
- Preserve private student uploads. Exclude credentials, tokens, identifiable student data, private feedback, and raw chat transcripts from the public repo. Check permission before reusing institutional materials or third-party assets. Review deck notes and editable diagram contents as well as visible slides before sharing.
- Preserve local originals. Before committing or pushing an import, show the proposed changes and flag sensitive material, reuse rights, and large binaries for review.
- Keep `graphify-learnai` scoped to the prototype source checkout. Use its existing code-only workflow and separate local output. Check the graph's source branch before using it to answer a question about newer code.
