# Related works for the first seminar

Brief review of the supplied PDFs, 12 November 2026. All three works meet the 2023-or-later date requirement. Their publication types differ.

| Work | Input and approach | Evidence reported | Relevance to LearnAI |
| --- | --- | --- | --- |
| OpenGame, Jiang et al., 2026, arXiv preprint v2 | Natural-language game brief to web game using reusable templates, debugging knowledge and GameCoder-27B | 150-prompt benchmark covering build health, visual usability and intent alignment | Reuse a stable game runtime and test generated missions through execution. |
| RPGAgent, Zhang et al., 2026, CHI conference paper | Story outline and design notes to 2D RPG using narrative, scene, mechanics and code agents with procedural generation | Within-subject study with 18 participants comparing against a GPT-assisted baseline, reporting user experience and creative satisfaction | Keep story, scene and interaction data consistent through structured generation stages. |
| RL-Based Game Generation with PRewrite, Dagne, 2025, Stanford CS224R course report | Prompt enhancement with DSPy/MIPROv2 followed by game generation, using ratings and play duration as feedback | Reports improved game ratings. The abstract states 232% while the conclusion states 252%, so omit the percentage from seminar claims. | Explicitly specify feasible mechanics, controls and presentation while preserving the lesson objective. |

## Recommended presentation

Use one comparison slide with the three rows above and a second visual slide showing how the ideas inform the proposed LearnAI pipeline. Allow about 2–3 minutes for this section. Use editable boxes, arrows and text matching the methodology deck. Put the full references in notes or a reference area.

Connect the ideas to the proposed flow of PDF, page-linked concepts, validated mission specification and reusable browser game. Label this as a proposed design. Assess source fidelity, schema validity, playability and measured learning outcomes separately. These sources provide evidence about game creation and authoring experiences. They do not establish LearnAI learning gains or an implemented PDF-to-game pipeline.

## Source checks and limitations

- OpenGame abstract and introduction (PDF pp. 1–2) identify the template/debug workflow and 150-prompt evaluation. It is a preprint. See the existing research note for the detailed methodology references. [Versioned source](https://arxiv.org/abs/2604.18394v2) · [Existing note](../docs/research/papers/opengame.md)
- RPGAgent abstract and introduction (PDF pp. 1–2) describe the four agent roles and 18-participant study. The evidence concerns RPG prototyping and designer experience. [Primary source](https://doi.org/10.1145/3772318.3790326)
- Dagne is identified as a Stanford CS224R 2025 final report on PDF p. 2 and the official course project index. PDF p. 14 discusses feasibility, changes to user intent and genre dependence. The reported percentage inconsistency occurs between the abstract and conclusion. [Official report](https://cs224r.stanford.edu/projects/pdfs/cs224r_final_report_2025.pdf) · [Course index](https://cs224r.stanford.edu/spring_2025/projects/cs224r_final_projects.html)

## References

1. Jiang, Y., et al. (2026). *OpenGame: Open Agentic Coding for Games*. arXiv:2604.18394v2. https://arxiv.org/abs/2604.18394v2
2. Zhang, S., Xiao, Y., Ma, R., and Leung, C. (2026). *RPGAgent: Driving Coherent Story-to-Play Generation with an LLM-Based Multi-Agent System*. CHI ’26, 22 pages. https://doi.org/10.1145/3772318.3790326
3. Dagne, A. (2025). *RL-Based Game Generation with PRewrite: Iterative Prompt Optimization for AI-Assisted Game Development*. Stanford CS224R final report. https://cs224r.stanford.edu/projects/pdfs/cs224r_final_report_2025.pdf
