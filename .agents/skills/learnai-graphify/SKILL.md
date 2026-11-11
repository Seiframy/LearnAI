---
name: learnai-graphify
description: Use the LearnAI Graphify code graph to trace callers, cross-file execution, or dependency impact in the MLP Lab. Use direct search for known files and Markdown links for research materials.
---

Check the requested prototype and revision first. The `graphify-learnai` MCP server indexes the dedicated MLP Lab checkout on `dev/mlp-connected-activities`. Read [the LearnAI guide](../../../graphify-guide/README.md) for the source location and rebuild commands when the graph is stale or missing. For another prototype or branch, use direct source search or a separate code-only graph.

Start with the narrowest useful tool. Use `get_node` for a named symbol, `get_neighbors` with a relation filter for callers, and `shortest_path` for two known endpoints. For discovery, use one `query_graph` at depth 1 and about 400 tokens, then narrow by symbol or relationship if needed. Follow only relevant results. Confirm call direction and claims in current source and cite the relevant lines. Treat missing edges and inferred edges as incomplete evidence.

Skip Graphify for known-file edits, literal lookups, literature, notes, slides, screenshots, feedback, and chat material. Use local code-only extraction with the model backend disabled for rebuilds. Keep graphs and caches outside Git.
