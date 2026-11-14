# LearnAI Seminar 1 — Motivation, objectives, added value and impact

## Motivation

Physical laboratory work develops practical skills. Equipment availability and scheduling can limit opportunities to repeat a procedure. A complementary virtual lab could give students more opportunities to rehearse a procedure, make decisions, observe their effects and receive feedback. A generated simulation can look plausible while omitting an instructor's step or producing an incorrect circuit outcome. The research needs separate evidence for alignment with the source, scientifically correct behavior and student learning. [Approved Problem Definition](problem-definition/approved.md) · [Li and Liang, 2024](https://doi.org/10.1371/journal.pone.0316269) · [Chen et al., 2026](https://proceedings.mlr.press/v306/chen26cf.html)

## Project objective

Prototype and evaluate a source-grounded workflow that turns instructor-provided introductory digital electronics laboratory PDFs into structured, executable experiments in a reusable playable virtual lab. Verify source fidelity and scientific behavior independently, exercise user review and correction, and investigate students' conceptual understanding and ability to apply their knowledge.

The first test is an illustrative NAND exercise. The broader product vision is educational PDF-to-game generation across subjects. The available evidence documents hand-authored educational prototypes and a proposed generation pipeline. End-to-end PDF-to-lab operation and learning effects still require verification. [Project status](../../PROJECT_STATUS.md) · [Methodology](../../presentations/methodology-drafts/LearnAI%20Methodology.pptx)

### Proposed objectives and acceptance evidence

| Milestone | Objective | Acceptance evidence or measure |
| --- | --- | --- |
| Prototype | Connect an instructor PDF to an executable experiment specification. | Schema pass and a traceable reference for each required sourced component, connection, step, expected observation and learning goal. Report independently checked matches over required items, plus omissions and unsupported additions. |
| Prototype | Run the experiment in the reusable lab. | A recorded start-to-finish playthrough that exercises required actions, completion and feedback after an incorrect action. Begin with the proposed hand-authored room. Test reuse with a second approved PDF at the proposed demo milestone. |
| Prototype | Exercise Stop and Continue on inputs containing a known ambiguity or inconsistency. | Demonstrate that the warning explains the issue, Stop pauses generation for review, and Continue proceeds where feasible. Keep the input PDF intact. Log scientifically justified corrections, rebuild and repeat both checks. List assumptions and unresolved issues. Apply the scientifically validated label only after all applicable checks pass. |
| Technical evaluation | Measure functional and scientific fidelity independently of the PDF and generator judgments. | Compare observed outcomes with independently specified circuit wiring, truth tables and procedure/state expectations. Record passed checks over applicable checks. For the illustrative NAND case, check all four input combinations. Track playability and schema validity separately. |
| Technical evaluation | Estimate the effect and cost of validation. | Use System A (validation OFF) and System B (validation ON), two modes of the same generator. Match PDFs, model, initial prompts, settings, runtime and initial budget. Score both modes with the same independent rubric. Report source and functional fidelity, detected and missed known issues, false warnings, completed playthroughs, generation time and cost. Log added validation and correction time and cost. |
| Learner evaluation | Assess understanding and application separately. | Score students' explanations of concepts and observations, then score transfer to an unfamiliar circuit or procedural task. Use a baseline and follow-up, and a defined comparison condition if drawing causal conclusions. Report sample, rubric, scores and uncertainty when data are collected. |

Issue #6 identifies Semester 1 and Semester 2 as planning phases. Its November 14–19 window concerns the first seminar slot. The inspected project record gives an implementation sequence, with no dated implementation or learner-study milestones. The objectives use milestone-based timing. Fix the evaluation corpus, scoring rubrics, and any aggregate thresholds before running the study. [Issue #6](https://github.com/Seiframy/LearnAI/issues/6) · [Seminar draft](../../presentations/seminar-draft.md) · [Approved Stop/Continue requirement](problem-definition/stop-continue.md)

## Proposed added value

- A source-grounded workflow that connects an instructor PDF to a structured experiment and a reusable playable lab. Page-level references make derived content inspectable.
- Two layers of verification. Source review checks what came from the document. Independent tests check wiring, logic and procedure in the running lab.
- A Stop/Continue review path and a record of warnings, disclosed corrections, unresolved issues and retests.
- Reusable equipment, controls and interaction rules that can be assessed across approved examples.
- A controlled validation OFF/ON baseline that estimates fidelity gains or losses and the cost of validation with the same generator.

The research question concerns how reliably these elements work together and how to evaluate them. Existing virtual labs, circuit simulators, game-generation work and scientific demonstration benchmarks provide precedents. [Problem Definition references](problem-definition/references.md) · [Seminar related works](../../papers/related-works.md)

## Impact hypotheses

| Beneficiary | Proposed benefit | Evidence needed |
| --- | --- | --- |
| Students | Repeatable practice may support understanding and application alongside physical lab work. | Separate rubric scores for concept explanations and transfer tasks. |
| Teachers | Visible sources, warnings and corrections may reduce review and repair effort. | Measure review time, correction counts and missed issues for comparable generated labs. |
| Researchers | Matched runs may quantify the fidelity, playability and resource trade-offs of adding validation. | Publish the study conditions, independent scoring criteria and paired results with observed failure cases. |

These hypotheses remain untested for LearnAI.

## Sources and claim boundaries

- Asana recommends a specific, measurable and attainable objective with an evaluation point. Indeed recommends a narrow scope, observable measures and a timeframe. These are project-management sources for writing the objectives. [Asana](https://asana.com/resources/how-project-objectives) · [Indeed UK](https://uk.indeed.com/career-advice/career-development/how-to-write-project-objectives)
- Li and Liang synthesize virtual laboratory evidence in engineering education. Their analysis supports investigating complementary virtual practice. [PLOS ONE](https://doi.org/10.1371/journal.pone.0316269)
- Chen et al. evaluate generated interactive scientific demonstrations with programmatic functional checks and visual assessment. Their benchmark informs the use of independent execution checks. [InteractScience](https://proceedings.mlr.press/v306/chen26cf.html)
- Jiang et al. describe reusable scaffolds and browser-based gameplay checks. Their game-generation preprint informs the reusable runtime and execution tests. The related-works review also draws on RPGAgent for staged generation and Dagne for specifying feasible mechanics. These sources address game generation and authoring. LearnAI's scientific correctness and educational impact require their own evaluation. [OpenGame v2](https://arxiv.org/abs/2604.18394v2) · [Related-works source review](../../papers/related-works.md)

The seminar wording was checked against the approved ideal, current reality, provisional gap, consequences, desired outcome and supplemental Stop/Continue requirement. It describes proposed work and evaluation criteria.
