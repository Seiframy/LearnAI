# Claude Code Game Studios
<!-- learnai-review-key github.com/donchitos/claude-code-game-studios -->

## Source

Submitted and canonical repository: [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios). Reviewed 12 November 2026 on default branch `main` at [`abc0de7`, version 1.3.0](https://github.com/Donchitos/Claude-Code-Game-Studios/commit/abc0de79d6ceb0b5d7aa693945849b3937afbe6a). This is a repository review focused on the [`/prototype` skill](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/.claude/skills/prototype/SKILL.md) and its browser checks.

## What it could add to LearnAI

The best fit is **checking whether the browser game can be played**. The studio takes a written game idea, asks questions, and uses Claude Code to turn the answers into a brief and a browser prototype. Its browser runner can take a game folder and a list of actions, then save a screenshot and a record of the run. LearnAI could borrow that idea to make the one-room demo's playthrough repeatable. [Prototype instructions](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/.claude/skills/prototype/SKILL.md) · [Browser runner](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/.claude/scripts/one-shot-run.sh) · [LearnAI seminar plan](../../docs/presentations/seminar-draft.md)

The studio workflow starts from a game brief and builds a game around it. LearnAI's plan starts with a PDF and loads a mission into a reusable level. LearnAI still needs its own page evidence, mission format checks, and learning evaluation. The open question is whether the runner can handle LearnAI's served Three.js level with less work than a small browser test written for that level. The upstream short check expects a local `index.html` and can report a served game as unassessed. [Short check script](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/.claude/scripts/one-shot-check.sh)

## How to set it up

For a separately approved trial, use an isolated scratch folder outside the LearnAI checkout with synthetic input. Install Git, Claude Code with an authorized account, Python 3, Bash (included with Git for Windows), and Chrome, Edge, or Chromium. The README lists Node.js 22+ for the optional npm installation of Claude Code. It recommends Node.js for the web and 3D workflows and jq for hook validation. The minimum Claude Code and browser versions were not verified. [Setup instructions](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/README.md#getting-started)

Run these commands from the scratch folder. Start Claude Code from the clone root, where `CLAUDE.md`, `project.yaml`, and `.claude/settings.json` live.

```powershell
git clone https://github.com/Donchitos/Claude-Code-Game-Studios.git ccgs-trial
cd ccgs-trial
git checkout --detach abc0de79d6ceb0b5d7aa693945849b3937afbe6a
claude
```

Starting `claude` here can run downloaded project hooks, which are scripts tied to session events. The next command runs the downloaded skill and can run its helper scripts. Use the stock project settings and sign in through Claude Code. The template setup does not specify a project API key. [Project settings](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/.claude/settings.json) · [Project configuration](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/project.yaml)

```text
/prototype a one-room circuit game with one console question and an exit that unlocks after the correct answer
```

Answer its questions and approve the brief. The author's expected outputs are `design/game-brief.md`, a browser game under `prototypes/<name>/`, and a handover with the checks and any gaps. Open the generated game and confirm the exit works yourself. [Prototype setup and outputs](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/README.md)

## License, upkeep, and limits

The repo uses MIT. You can reuse and change covered files if you keep the copyright and permission notice with copies or substantial parts. The changelog dates version 1.3.0 to 9 November 2026. For 3D, the helper pins Three.js 0.186.1 and esbuild 0.28.2 and can fetch dependencies. Check their notices and the terms for any added assets before sharing a game. I did not verify all engine lockfiles or asset terms. The studio runs through Claude Code, so prompts and any files it uses may be sent to the configured model provider. The exact account costs and data handling depend on that setup and were not verified here. [License](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/LICENSE) · [Changelog](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/CHANGELOG.md) · [3D dependency helper](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/.claude/scripts/vendor-three.sh)

## What was checked

- **Read in source:** The prototype uses shell helpers and project settings. The browser check runs a short input sequence and writes evidence. It has a path for checks it could not perform. [Skill](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/.claude/skills/prototype/SKILL.md) · [Check script](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/.claude/scripts/one-shot-check.sh)
- **Reported by the author:** The changelog describes a comparison on three game ideas. It gives no evidence about whether a LearnAI mission's answers match its PDF or whether students learn more. [Changelog](https://github.com/Donchitos/Claude-Code-Game-Studios/blob/abc0de79d6ceb0b5d7aa693945849b3937afbe6a/CHANGELOG.md)
- **Proposed LearnAI test:** Once the one-room demo exists, compare a trial of the upstream runner on an isolated synthetic copy with a small browser test. Both should show that a wrong answer keeps the door locked and a correct answer opens it. Repeat the sequence twice and record setup effort, screenshots, and the door state. Keep the page-evidence and mission-format checks separate. Setup and behavior were not run for this review. [LearnAI seminar plan](../../docs/presentations/seminar-draft.md)

## Category and why

**Neutral** · `New Unchecked Technologies/Neutral/`. The input replay and screenshots could help test playability. Compatibility with the served LearnAI demo and the effort saved over a small browser test are still unverified. A repeatable run that checks the door state with less setup would support moving this to Added Value.
