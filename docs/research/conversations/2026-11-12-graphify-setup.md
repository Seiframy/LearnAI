# LearnAI Graphify setup

## Source and coverage

The user supplied a bounded preview of “Explain Graphify Commands.” The LearnAI setup and tool checks come from the subsequent Codex setup session.

## Question and takeaways

How can Codex use Graphify with LearnAI while the default branch is documentation-only? Use the dedicated code checkout of the [MLP Lab branch](https://github.com/Seiframy/LearnAI/tree/dev/mlp-connected-activities). The working research folder and private materials stay outside the code index.

## Evidence

A fresh local extraction reproduced 79 nodes and 124 edges. Windows Codex discovered the server tools, WSL Codex listed `graphify-learnai` under `/mcp`, and a live lookup resolved `forward()` to `src/network.ts:30`.

## Follow-up

Rebuild after the indexed source changes. Use the [research workflow](../README.md#graphify) and verify important relationships in the source files.
