# Seminar 1 resources, timeline and references

[Editable PowerPoint](LearnAI%20Seminar%201%20-%20Resources%20Timeline%20and%20References.pptx)

| Issue #6 item | Slide | Basis |
| --- | --- | --- |
| Software and hardware to use | 1–2 | Project status and the MLP Lab manifest establish what exists. Issue #11 sets the parser benchmark. |
| Datasets to use | 3 | Issue #11 specifies the initial inputs and independent inventory. The evaluation plan specifies seeded faults and separate learning measures. |
| Project timeline | 4 | Issue #6 gives the first-seminar window. The current planning brief supplies the tentative December window. The features deck defines the semester deliverables. |
| Next steps | 5 | Issue #11 defines the benchmark outputs. The approved requirements govern Stop/Continue and the paired study. |
| References | 6 | Primary sources and official project records are linked below and in slide notes. |

## Proposed choices and open decisions

- Start with parsing locally on CPU using both Microsoft MarkItDown and Docling on the same authorized PDFs. Record versions, options, page/layout fidelity, content coverage, errors, review effort, latency and peak memory. Keep raw output, including gaps. Docling's structured layout output makes it a candidate for richer input. MarkItDown gives a Markdown baseline. Adoption depends on Issue #11 evidence.
- Preserve original PDF pages and attach evidence to schema fields. Use OCR for scanned text and selectively use vision for circuit regions. Record uncertain wiring and its page for instructor review. Confirm deployment and license terms for optional models, dependencies and assets. Obtain permission before sending page crops to a hosted service.
- Check source coverage and provenance against the reviewed PDF annotations. Use separately authored deterministic cases for truth tables, wiring and procedure. Record any Stop/Continue decision, corrections and retests. Run A/B on matched inputs and the same generator with study validation off or on. Score both using independent references.
- The target PDFs, full corpus size, parser and backend choices, and hardware budget are open. The initial corpus starts with at least one text-heavy and one diagram/table-heavy document. Use appropriately licensed or otherwise authorized PDFs. Retain private PDFs outside the public repository. Plan learner consent, access, retention and de-identification separately. The initial approach uses existing tools and pretrained models.
- November 14–19, 2026 is the first-seminar window in Issue #6. December 12–17, 2026 is the proposed second-seminar window from the planning brief and awaits confirmation. Semester 2 uses relative phases. A learner pilot depends on a checked activity, the required approvals and recruitment.

## Research and technical literature

- Auer, C., et al. (2024). *Docling Technical Report*. arXiv preprint. [arXiv:2408.09869](https://arxiv.org/abs/2408.09869)
- Jiang, Y., et al. (2026). *OpenGame: Open Agentic Coding for Games*. arXiv preprint, v2. [arXiv:2604.18394v2](https://arxiv.org/abs/2604.18394v2)
- Zhang, S., Xiao, Y., Ma, R., & Leung, C. (2026). *RPGAgent: Driving Coherent Story-to-Play Generation with an LLM-Based Multi-Agent System*. CHI ’26. [ACM DOI](https://doi.org/10.1145/3772318.3790326)
- Dagne, A. (2025). *RL-Based Game Generation with PRewrite: Iterative Prompt Optimization for AI-Assisted Game Development*. Stanford CS224R final course report. [Stanford report](https://cs224r.stanford.edu/spring_2025/projects/pdfs/cs224r_final_report_2025.pdf)

## Official documentation and LearnAI records

- [Microsoft MarkItDown](https://github.com/microsoft/markitdown), [Docling](https://github.com/docling-project/docling), [Mozilla PDF.js](https://github.com/mozilla/pdf.js), [Three.js](https://github.com/mrdoob/three.js), [Vite](https://vite.dev/)
- [Project status](../../PROJECT_STATUS.md), [MLP Lab manifest](https://github.com/Seiframy/LearnAI/blob/5eaf66d/package.json), [3D Neural Workshop](https://github.com/Seiframy/learnai-mlp/tree/0d81764b4e0299741dbc76f55534b718775bcc1a)
- [Issue #6](https://github.com/Seiframy/LearnAI/issues/6), [Issue #11](https://github.com/Seiframy/LearnAI/issues/11), [Approved Problem Definition](../../docs/research/problem-definition/approved.md), [Approved Stop/Continue](../../docs/research/problem-definition/stop-continue.md), [Features, design and evaluation traceability](../seminar-1-features-design-evaluation/traceability.md)

## PowerPoint verification

All six slides were opened and exported in Microsoft PowerPoint at 1600 × 900 and visually compared with the approved section style. Text-fit and notes checks passed on every slide. The title text and Gantt bar were edited in a test session, and an attached flow connector followed its destination shape when moved. The verified file contains native PowerPoint objects throughout.
