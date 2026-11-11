# OpenGame

Jiang, Y., Hu, J., Xiao, Q., Zheng, Y., Ma, R., Feng, K., Han, J., Peng, T., Fan, K., Zhang, M., and Yue, X. (2026). *OpenGame: Open Agentic Coding for Games*. arXiv:2604.18394v2. The [PDF in this repository](../../../papers/open%20agentic%20coding.pdf) is an unchanged copy of the versioned arXiv download, which lists the CC BY 4.0 license. [Preprint](https://arxiv.org/abs/2604.18394v2) · [License](https://creativecommons.org/licenses/by/4.0/) · [Authors' repository](https://github.com/leigest519/OpenGame)

## What informed the LearnAI draft

OpenGame uses reusable templates and a verification and repair loop to create web games from prompts. Figure 2 and §3 describe model training, the agent workflow, and reuse of templates and debugging knowledge. §4 evaluates build health, visual usability, and alignment with the requested game. [Paper text](https://arxiv.org/html/2604.18394v2)

The LearnAI deck proposes building a shared browser level by hand and using an existing model to generate structured lesson missions for it. The template idea motivates keeping movement, interaction, and exit behavior in the runtime. The browser checks motivate playing through generated missions. LearnAI adds its own requirement to verify each answer and explanation against the PDF.

## Proposed check

Use one hand-written mission to establish the expected behavior of the shared level. Generate two missions from different approved PDFs. For each one, log schema validation, whether wrong answers provide feedback, whether all stations can be completed, whether the exit opens, and whether each source page supports the answer and explanation.

OpenGame's reported results cover game generation from prompts. LearnAI's proposed checks cover a PDF-to-game pipeline. Measuring learning requires evidence from learners.
