# Ship Shit Games Skills
<!-- learnai-review-key github.com/shipshitgames/skills -->

## Source

Reviewed 13 November 2026. The submitted URL resolves to the [canonical repository](https://github.com/shipshitgames/skills). Reviewed [`e4d7d2cf6907041df95f6b66964b94ea2ce6e61c`](https://github.com/shipshitgames/skills/commit/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c) on default branch `master`.

## What it could add to LearnAI

The best fit is checking whether the browser room can be played through. The `playwright-game-testing` skill shows how to give a browser test a running Three.js game, send player inputs, check the visible game state, and save a screenshot. LearnAI could turn its existing playthrough criteria into a repeatable test that flags when a change breaks feedback or the exit. Page evidence and mission-file validation would still have their own checks. [Playwright skill](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/skills/playwright-game-testing/SKILL.md) · [LearnAI seminar plan](../../presentations/seminar-draft.md)

The rest of the pack describes the studio's own game architecture and genre templates. Its Build Plan files list assets and features for a game type. They serve a different purpose from LearnAI's lesson questions, answers, and page citations. The browser test approach can be adapted to LearnAI's room without adopting the studio engine or multiplayer. [Engine skill](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/skills/shipshit-engine/SKILL.md) · [Example Build Plan](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/skills/isometric-3d/blueprint.json)

## How to set it up

1. From an isolated browser-game project with Node.js and npm, the upstream README's installer supports selecting one skill. Run `npx skills add shipshitgames/skills --skill playwright-game-testing` and select the project-local Codex target if prompted. This downloads and runs the installer. For the exact reviewed revision, copy the pinned `skills/playwright-game-testing/` folder into the test project's `.agents/skills/` and invoke `$playwright-game-testing` in Codex. [Upstream README](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/README.md) · [Codex skill locations](https://developers.openai.com/codex/skills)
2. From that project's root, run `npm i -D @playwright/test`, then `npx playwright install chromium`. These steps install third-party code and a browser. Adapt the example configuration to the app's local dev command and URL. The studio sample uses `npm run dev` and port `5173`. Replace the sample game's selectors and debug variables with the room's visible controls and outcomes. [Skill example](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/skills/playwright-game-testing/SKILL.md) · [Playwright installation](https://playwright.dev/docs/intro)
3. Run `npx playwright test` once the room test and configuration are in place. A passing result should include checks for feedback and exit state. The automated test uses the Playwright runner. The interactive workflow additionally calls for a separately configured Playwright MCP server, a connector that lets an assistant control a browser. No connector is needed for the proposed automated test. [Skill](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/skills/playwright-game-testing/SKILL.md)

## License, upkeep, and limits

The MIT license permits reuse with its copyright and permission notices. The public pack is separate from the paid studio templates and services described in the README. The default-branch commit on 23 July 2026 adds Build Plan blueprints. I could not verify release status. [License](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/LICENSE) · [README](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/README.md) · [Commit](https://github.com/shipshitgames/skills/commit/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c)

The skill metadata lists version `0.1.0`. It supplies no pinned Playwright or Node.js versions or root package manifest for the test workflow. A local browser and app are enough for the test runner. An AI-assisted session can send project context to its configured model provider. The sample depends on the studio game's development-only state and browser settings, so copy the testing pattern and adapt its inputs. [Skill](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/skills/playwright-game-testing/SKILL.md) · [Playwright setup requirements](https://playwright.dev/docs/intro#system-requirements)

## What was checked

I read the skill, the embedded test and helper, and the engine and workflow skills. The pinned Markdown embeds the examples as text. GitHub returned 404 for both standalone reference paths shown in that text. The authors describe using their skills on their own games. I did not install or run the examples. [Test skill](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/skills/playwright-game-testing/SKILL.md) · [Studio workflow](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/skills/vibe-game-workflow/SKILL.md)

A future trial can use one synthetic circuit question in an isolated room. Pass if Playwright confirms that a wrong answer shows feedback with the exit locked, a right answer unlocks it, and the player can exit. Repeat with unlocking disabled and confirm the test fails. This checks playability only. [LearnAI seminar plan](../../presentations/seminar-draft.md)

## Category and why

**Added Value**. The Playwright guide gives LearnAI a concrete way to repeat its planned browser playthrough after changes, using the same Three.js room and a synthetic lesson. [Playwright skill](https://github.com/shipshitgames/skills/blob/e4d7d2cf6907041df95f6b66964b94ea2ce6e61c/skills/playwright-game-testing/SKILL.md) · [LearnAI seminar plan](../../presentations/seminar-draft.md)
