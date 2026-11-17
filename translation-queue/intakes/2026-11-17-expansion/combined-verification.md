# Independent PR combination verification (2026-11-17)

- Content base was the local expansion tree `c4ba04149c5d50e29c12a1fcc13f32cc16158f4b` descended from PR12 `18961a8`; UI source tree `e10b17589eabb67da1548010ce52c6934f48f1c8` descended from PR11 `45a10b77`.
- In a separate, unpublished detached worktree, the 12 UI paths changed from their common base were overlaid onto the complete content tree, including the intended about-page deletion. No Git merge, published ref or production deployment was performed.
- Bun1.3.14 / Node24.22.0 / macOS mandoc: full verify **49 passed / 0 failed**, 428-page build; real Google Chrome E2E **200 passed**.
- The added catalog-to-table browser case exercised the actual new formal GNU diff and explicit util-linux/bsd-utils/linux-upstream col source. GNU Texinfo is excluded, and other util-linux/other OS provenance is not inferred into Linux(BSD). Existing 320px filtering/reset/no-JavaScript checks remained successful.
- A fresh preview server was enforced (no reuse). An initial bundled Chromium attempt was blocked before every browser launch because its expected local executable was not installed; those were environment launch failures, not assertion results. The successful full run used installed Google Chrome. CI for each final PR uses its own Playwright browser installation and must be confirmed separately.
- The final public content commit adds this report and explanatory documentation after that successful run; application code, source data and generated pages are unchanged by this documentation-only addition.
- Both source branches remain separate. This overlay is verification evidence, not authorization or a claim that the PRs have been merged.
