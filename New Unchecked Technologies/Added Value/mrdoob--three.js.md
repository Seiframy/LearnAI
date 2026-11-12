# Three.js
<!-- learnai-review-key github.com/mrdoob/three.js -->

## Source

Submitted and canonical URL: [mrdoob/three.js](https://github.com/mrdoob/three.js). Reviewed 12 November 2026. GitHub lists `dev` as the default branch. I checked the development head and used the published [r187 release](https://github.com/mrdoob/three.js/releases/tag/r187) at `7e89746a687bb88271253698fa108b1dd59825d0` for the detailed review and setup. The npm version is `0.187.0`. [Release package manifest](https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/package.json)

## What it could add to LearnAI

Three.js draws 3D scenes in a browser. For the one-room demo, LearnAI would give it the room, console, door, camera, and lights. It draws those objects on a canvas, the part of the page where the game appears. It can also help tell which object the player points at. This gives the team ready-made tools for drawing the room and selecting its console. The seminar plan already calls for Three.js, so this review checks that choice against the source. [Interactive cubes example](https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/examples/webgl_interactive_cubes.html) · [LearnAI seminar plan](../../docs/presentations/seminar-draft.md)

LearnAI still owns the rules. Its code reads the validated mission, shows the question, checks the answer, and decides when the door opens. PDF extraction and learning evaluation are separate parts of the project. The 3D Neural Workshop is an existing educational prototype. The one-room PDF-to-game flow is a proposed milestone. [Project status](../../PROJECT_STATUS.md)

## How to set it up

For a separately approved trial, start in an isolated scratch folder outside LearnAI. Use Node.js 22.12 or later on the Node.js 22 line for Vite, npm, and a browser that can use WebGL 2. WebGL 2 lets the browser draw 3D graphics with the machine's graphics support. The commands use a small JavaScript example to check rendering before writing the TypeScript game. No API key or account is required for this local example. [Three.js installation guide](https://threejs.org/manual/en/installation.html) · [Vite requirements](https://vite.dev/guide/#scaffolding-your-first-vite-project) · [WebGL renderer source](https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/src/renderers/WebGLRenderer.js)

```powershell
New-Item -ItemType Directory -Path threejs-trial
Set-Location threejs-trial
npm init -y
npm install --save-exact three@0.187.0
npm install --save-dev --save-exact vite
```

Save this as `index.html` in `threejs-trial`. It uses the same scene, camera, and renderer pattern as the official example. [Creating a scene](https://threejs.org/manual/en/creating-a-scene.html)

```html
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>LearnAI rendering check</title></head>
<body>
<script type="module">
  import * as THREE from 'three';
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 4 / 3, 0.1, 100);
  const renderer = new THREE.WebGLRenderer();
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({ color: 0x36a2ff, wireframe: true })
  );
  camera.position.z = 3;
  cube.rotation.set(0.4, 0.6, 0);
  scene.add(cube);
  renderer.setSize(640, 480);
  document.body.append(renderer.domElement);
  renderer.render(scene, camera);
</script>
</body>
</html>
```

Run `npx vite` and open the local URL it prints. A blue wireframe cube should appear without browser console errors. npm installs downloaded packages and can run their install hooks. `npx vite` runs the installed Vite code, and the page runs Three.js in the browser. Keep the generated `package-lock.json` with the trial to record the exact versions. [Vite local server instructions](https://vite.dev/guide/#manual-installation)

## License, upkeep, and limits

The code uses MIT. Keep the copyright and permission notice if you share copies or substantial portions. Check terms separately for any models, images, fonts, or sounds you bring into a game. This trial uses a shape made in code and needs no downloaded art. The r187 release is dated 30 October 2026. The published Three.js manifest has no runtime package dependencies or install hook. The upstream lockfile covers the repository's development tools. Vite adds its own dependencies for local development. The trial loads the library from the local server and sends no lesson or student data to an external service. Graphics support and performance still need a check on the team's target browser and device. [License](https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/LICENSE) · [Release](https://github.com/mrdoob/three.js/releases/tag/r187) · [Manifest](https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/package.json) · [Upstream lockfile](https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/package-lock.json)

## What was checked

- **Confirmed by reading source:** `WebGLRenderer` requests WebGL 2. The interactive example uses a raycaster, which checks which 3D object is under the pointer. The upstream manifest includes browser-based unit test commands. [Renderer](https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/src/renderers/WebGLRenderer.js) · [Example](https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/examples/webgl_interactive_cubes.html) · [Test commands](https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/package.json)
- **Documented setup:** The official manual shows npm installation and a local Vite server. Setup and browser behavior were not run in this review. [Installation guide](https://threejs.org/manual/en/installation.html)
- **Proposed LearnAI test:** Use one hand-written synthetic mission and a room made of simple shapes. On a target device, check that the room draws, the console responds, a wrong answer leaves the exit locked, and a correct answer opens it. Record the device, browser, and results. Keep mission schema, source fidelity, and any measured learning outcomes in their own evaluation records. [Seminar plan](../../docs/presentations/seminar-draft.md)

## Category and why

**Added Value** · `New Unchecked Technologies/Added Value/`. Three.js provides the rendering and object selection needed for the planned one-room demo. The source and example support a small trial using the team's intended browser stack. Playability and device compatibility still need a run.
