# SDD ledger — plan: docs/superpowers/plans/2026-10-30-angular-demo-extra-content.md

- Ruling: Work in the existing project directory because this ChatGPT project mirror has no Git metadata — it is the only authorized writable workspace — cost if wrong: this feature is not isolated in a branch.
- Pre-flight: one task; no shared interfaces with other tasks.
- Ruling: Do not add automated tests; the approved design explicitly requests manual browser verification without a suite — this preserves the requested small scope — cost if wrong: the interaction has no automated regression check.
- Ruling: Raise the Angular component stylesheet budget from 6/8 kB to 10/12 kB — the new card and toggle styling totals 8.95 kB and the previous limit blocked the production build — cost if wrong: the stylesheet can grow by roughly another 1 kB before warnings begin.
- Final review: corrected two findings — replaced unconditional online/secure copy with neutral preview wording, and kept the details panel in the DOM with the `hidden` attribute so `aria-controls` remains valid.
- Task 1: complete — production build succeeds without warnings; browser accessibility tree confirms three cards, button state and label update on toggle, panel content appears when expanded and is removed from the accessibility tree when collapsed. Responsive layout has a one-column rule below 680px.
