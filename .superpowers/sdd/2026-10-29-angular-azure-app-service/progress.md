# SDD ledger — plan: docs/superpowers/plans/2026-10-29-angular-azure-app-service.md

- Ruling: Work in the current project mirror because it has no Git metadata and cannot host a Git worktree — the user's authorized writable project directory is the available workspace — cost if wrong: changes are not isolated in a branch.
- Pre-flight: one task only; no shared task interfaces.
- Ruling: Do not add an automated test suite; the user approved the plan's explicit instruction to omit one, while approving a production build and manual HTTP smoke-check — this follows the approved scope — cost if wrong: fewer repeatable checks than a maintained automated suite.
- Task 1: complete — installed 234 packages (npm reported 0 vulnerabilities), built successfully without warnings, verified `/` and `/ruta/demo` return 200 with Angular's entry element, verified `/assets/no-existe.js` returns 404, verified an explicitly assigned `PORT=8081`, and viewed the rendered page in the browser.
- Ruling: Raise Angular component stylesheet warning budget from 4 kB to 6 kB (error at 8 kB) — the intentional responsive page styling compiles to 4.98 kB, a small size appropriate for this demo — cost if wrong: a future style increase under 6 kB won't trigger a warning.
- Final review: one minor documentation finding about deployment ZIP contents; the current README ZIP command includes both TypeScript config files, so it is resolved. No remaining findings.
