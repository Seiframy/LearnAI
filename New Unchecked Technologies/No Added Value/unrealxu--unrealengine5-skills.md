# UnrealEngine5-Skills
<!-- learnai-review-key github.com/unrealxu/unrealengine5-skills -->

## Source

Reviewed 13 November 2026. The submitted URL resolves to the [canonical repository](https://github.com/UnrealXu/UnrealEngine5-Skills). Reviewed [`c21bb876a128a7c06e2782769bda524a3301aa99`](https://github.com/UnrealXu/UnrealEngine5-Skills/commit/c21bb876a128a7c06e2782769bda524a3301aa99) on default branch `main`.

## What it could add to LearnAI

The closest fit is authoring and debugging room interactions. Give Codex an Unreal project and a request about a console or door. The pack routes the request to a guide that covers Unreal scene objects, collision checks, and feedback. It can help the agent propose Blueprint visual scripts or C++ changes. Some workflows name editor tools that would need a separate connector. [Entry skill](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/ue5-auto-assistant/SKILL.md) · [Interaction skill](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/ue5-world-interaction/SKILL.md)

LearnAI's room uses Three.js and TypeScript in the browser. The reviewed Unreal workflows depend on engine-specific objects and APIs. I found no adapter for LearnAI's browser runtime or mission file. The generic debugging checklist gives useful questions, but it supplies no browser test runner or lesson-specific checks. [Debugging skill](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/ue5-debug-validation/SKILL.md) · [LearnAI seminar plan](../../presentations/seminar-draft.md)

## How to set it up

1. For a future Unreal trial, use a disposable project with Unreal Engine 5.6, 5.7, or 5.8 and a machine that can run the editor. Copy the pinned `skills/ue5-*` folders into that project's `.agents/skills/` so sibling skills and references remain available. Open the project in Codex and invoke `$ue5-auto-assistant`. Try asking where to start with an Unreal actor that gives feedback when clicked. Check that it selects `ue5-world-interaction`. A prompt naming a module can use `$ue5-module-router` and the included lookup table. [Usage guide](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/README.md) · [Module router](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/ue5-module-router/SKILL.md) · [Codex skill locations](https://developers.openai.com/codex/skills)
2. Live editor actions depend on a separate tool connection. The entry skill names suggested tools. I found no matching connector setup or exact version in the inspected installation and routing docs, so live integration remains unverified. Reading the guidance requires Codex access. Editor builds and third-party connectors have their own requirements and terms. [Entry skill](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/ue5-auto-assistant/SKILL.md) · [Unreal Engine agreement](https://www.unrealengine.com/eula/unreal)
3. For optional pack validation, use Python 3 from the downloaded pack root. These commands execute downloaded scripts. The second command needs the local Unreal installation and its source headers. The docs give no exact Python minimum. [Validation docs](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/README.md#validation)

   ```powershell
   python .\skills\scripts\validate_skills.py
   python .\skills\scripts\validate_engine_anchors.py --engine-root "C:\Path\To\UE_5.8"
   ```

   Look for `Validation OK` and `Engine anchor validation OK`. Those messages cover file checks and named symbols in headers. They do not prove that an Unreal level works. [Skill validator](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/scripts/validate_skills.py) · [Engine validator](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/scripts/validate_engine_anchors.py)

## License, upkeep, and limits

MIT allows reuse if the copyright and permission notices are kept. Unreal Engine is covered by Epic's separate terms. The main-branch commit dated 26 August 2026 expands support through 5.8. GitHub showed no published releases. The two reviewed validators import only Python standard-library modules. They read local skill files and engine headers. I found no package install hook in the reviewed setup. Codex sessions and any editor connector follow their own data handling. [License](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/LICENSE) · [Commit](https://github.com/UnrealXu/UnrealEngine5-Skills/commit/c21bb876a128a7c06e2782769bda524a3301aa99) · [Releases](https://github.com/UnrealXu/UnrealEngine5-Skills/releases) · [Validation scripts](https://github.com/UnrealXu/UnrealEngine5-Skills/tree/c21bb876a128a7c06e2782769bda524a3301aa99/skills/scripts)

## What was checked

I read both routing skills, sampled the module lookup table, and read the interaction and debugging workflows and both validators. The author reports checking source anchors on Unreal 5.7.4 and 5.8.2. The engine script searches for API names in headers. I did not run setup, the validators, or editor actions. [Pack guide](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/README.md) · [Engine validator](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/scripts/validate_engine_anchors.py)

If LearnAI later trials Unreal, use one synthetic console interaction and test routing first. Pass if the agent picks the interaction guide and describes how to observe both success and failure in that version of Unreal. Then verify both outcomes in the editor separately. [Interaction skill](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/ue5-world-interaction/SKILL.md)

## Category and why

**No Added Value**. This pack teaches Unreal Engine development. The current LearnAI milestone runs in Three.js and has no Unreal editor or build step. [Pack guide](https://github.com/UnrealXu/UnrealEngine5-Skills/blob/c21bb876a128a7c06e2782769bda524a3301aa99/skills/README.md) · [LearnAI seminar plan](../../presentations/seminar-draft.md)
