# Graphify for LearnAI code

Use `$learnai-graphify` in a Codex chat opened in this checkout when tracing code across files. The local `graphify-learnai` MCP server serves the [MLP Lab](https://github.com/Seiframy/LearnAI/tree/dev/mlp-connected-activities) source at `5eaf66d`. The [3D Neural Workshop](https://github.com/Seiframy/learnai-mlp) has its own repository. Use a separate graph if you need to index that code.

On the existing Windows setup, `codex mcp get graphify-learnai` displays the registration. It launches `graphify-mcp` through Ubuntu in WSL. In a new Codex session, ask Graphify for the direct callers of `forward` with the `calls` filter. The verified MLP graph returned `Builder` and `Challenge` in `src/main.tsx` and the outgoing call to `validateNetwork` in `src/network.ts`. Check the source lines against the checkout.

## Rebuild the MLP graph

From Ubuntu, assign `source_repo` to the absolute path of the dedicated prototype checkout and `graph_dir` to its local graph parent. On this PC those folders are `LearnAI-Research/graphify-learnai/prototype` and `LearnAI-Research/graphify-learnai` under `project_out`. Verify the revision and working tree before rebuilding.

```bash
git -C "$source_repo" status --short --branch
git -C "$source_repo" rev-parse --short HEAD
GRAPHIFY_BACKEND=none graphify extract "$source_repo" --code-only --no-cluster --out "$graph_dir" --max-workers 2
GRAPHIFY_BACKEND=none graphify cluster-only "$graph_dir" --no-label
graphify explain forward --graph "$graph_dir/graphify-out/graph.json"
```

If setting up on another machine, install the [Graphify CLI](https://github.com/Graphify-Labs/graphify) and register the local stdio server with `codex mcp add graphify-learnai -- graphify-mcp "/absolute/path/graphify-out/graph.json"`. On Windows with Graphify installed in WSL, run the following in PowerShell after setting `$linuxMcp` to the full Linux path of `graphify-mcp` and `$linuxGraph` to the full Linux path of the graph JSON. Run the registration command only where the entry is missing or needs a new path.

```powershell
codex mcp add graphify-learnai -- wsl.exe -d Ubuntu --exec $linuxMcp $linuxGraph
```

Keep the prototype checkout and graph output local. Leave the paper, slides, feedback, and research notes outside the index. See the [Codex MCP documentation](https://developers.openai.com/codex/mcp) for registration details.
