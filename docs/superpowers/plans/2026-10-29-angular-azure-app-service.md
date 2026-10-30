# Angular Azure App Service Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a neutral, single-page Angular website that can be published as a test site on Azure App Service.

**Architecture:** Angular builds a static single-page application. A small Node.js server uses built-in modules to serve the generated files, honors App Service's `PORT`, and returns Angular's entry page for client-side routes. No API or external services are included.

**Tech Stack:** Angular CLI standalone application, TypeScript, CSS, Node.js built-in `http` and `fs` modules.

**Spec:** [2026-10-29-angular-azure-app-service-design.md](../specs/2026-10-29-angular-azure-app-service-design.md)

## Global Constraints

- Use Angular as the front-end framework.
- Keep the site neutral, simple, responsive, and static.
- Target Azure App Service with a Node.js runtime.
- Treat all files under `sources/` as read-only reference material.

## Review Focus

- App Service supplies a dynamic port: the server must listen on `process.env.PORT` and fall back to a local development port.
- Angular's generated build directory may contain a `browser` subdirectory: the server must locate the built `index.html` reliably.
- A direct visit or refresh on a client-side path must return the Angular entry page.
- Missing asset files must return a not-found response instead of the HTML fallback.
- Static asset paths must not allow reading files outside the generated build directory.

---

### Task 1: Create the Angular site and App Service server

**Files:**
- Create: `package.json`, `angular.json`, `tsconfig.json`, `tsconfig.app.json`, `src/main.ts`, `src/index.html`, `src/styles.css`, and Angular CLI generated support files.
- Create: `src/app/app.ts`, `src/app/app.html`, `src/app/app.css` for the welcome screen.
- Create: `server.js` to serve the production build with Node.js built-in modules.
- Create: `README.md` with local run/build steps and Azure App Service publishing notes.

**Interfaces:**
- Server listens on `Number(process.env.PORT) || 8080`.
- `npm run build` creates the Angular production output.
- `npm start` runs `node server.js` and serves the production output.

- [x] **Step 1: Scaffold the Angular standalone app**

Create the `azure-demo` workspace with Angular CLI, CSS styles, no router, no SSR, and strict defaults. Keep the source layout at the repository root. Add the `build` and `start` npm scripts; retain Angular CLI and framework packages needed for deployment-time compilation.

- [x] **Step 2: Implement the neutral responsive welcome page**

Update `src/app/app.ts`, `src/app/app.html`, `src/app/app.css`, and `src/styles.css`. Show a clear “Angular en Azure” welcome, a concise trial/demo message, and a visual “sitio listo” status. Use a compact responsive layout and avoid external images, fonts, or service calls.

- [x] **Step 3: Implement the production static server**

Create `server.js` using Node built-ins only. Resolve the Angular output's `index.html` (including the `browser/` output layout), serve files with basic content types, honor `PORT`, return `index.html` for client-side navigation, return 404 for missing assets, and prevent path traversal outside the build directory.

- [x] **Step 4: Document local use and Azure publication**

In `README.md`, document `npm install`, `npm run build`, and `npm start`, plus the Azure Portal flow to create an App Service using a Node.js Linux runtime and deploy the source with build automation enabled. Explain that this repository supplies the site and does not create an Azure resource.

- [x] **Step 5: Build and smoke-check the deliverable**

Run `npm run build` and confirm the production `index.html` exists. Start the server and request `/` and a nested client-side path; confirm both return the page, and an absent asset returns 404. Do not add a separate automated test suite.
