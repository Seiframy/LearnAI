# Seminar presentation draft

This outline comes from the project team's `LearnAI.pptx` drafts and speaker notes. It records the proposed demo, implementation choices, and acceptance criteria.

| Topic | Content to present |
| --- | --- |
| Project scope | Turn a text-based lesson PDF into a short mission in a reusable browser level. The level shares controls and progression rules across lessons. The lesson determines the story, challenges, answers, feedback, and source evidence. |
| Example mission | Restore power to a lab by solving three circuit challenges. A challenge asks which arrangement lights a bulb. The example is illustrative. A generated mission must cite a real page and passage from the supplied lesson. |
| Methodology | Build a hand-written mission first. Then supply page-tagged lesson text to a model and validate its structured output. Use the [editable methodology and system diagrams](../methodology/README.md) to show the sequence and error paths. |
| Architecture | A Node.js server uses PDF.js to extract text and page numbers, calls the model, and checks the response against JSON Schema. The browser uses Three.js and TypeScript to load the validated mission and run the level. |
| Gameplay | A wrong answer gives feedback and leaves the station open. Each correct answer activates one station. Solving all three stations unlocks the exit. |
| Build order | Start with one room, one console, and one door. Connect a single PDF. Then expand to three stations and try two different approved lesson PDFs in the same level. |
| Demo acceptance | Record schema validation and a full playthrough for each PDF, including wrong-answer feedback and exit unlocking. Check all six answers and explanations against their cited source pages. |
| Deliverables | Browser demo, source and setup instructions, mission specification, approved sample PDFs, and a short evaluation record. |

The later working deck adds screenshots of the earlier course-context interface and the neural-network activity. The [course-context brief](../history/course-context-assistant.md) records the earlier proposal, and the [MLP Lab branch](https://github.com/Seiframy/LearnAI/tree/dev/mlp-connected-activities) contains the educational interaction prototype.

The design draws on the template and browser verification ideas in [OpenGame, Figure 2 and §3](https://arxiv.org/html/2604.18394v2#S3). [Lewis et al.](https://arxiv.org/abs/2005.11401) provide background on grounding generation in retrieved text. The demo plan uses page-tagged extraction and evidence checks. Its learning outcomes would require a separate study.

[Editable methodology slide](learnai-methodology.pptx) · [Literature notes](../research/papers/README.md)
