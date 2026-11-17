# Final AWS refresh verification (2026-11-17)

Content checkpoint: 45e582f604d96360b0302665a8f1f11af0bb6b3e (tree5c2b1b7f0d38e228de0f6f40b1da98336eeeb80d). The subsequent documentation-only commit adds this evidence without changing application code, source data, translations or generated pages.

- Content standalone: Bun1.3.14/Node24.22.0/macOS mandoc, full verify44/44 passed,583 pages built; real installed Chrome E2E355/355 passed (50.7s). Every current157 SSM page exercised at320px for metadata, Japanese text, unresolved tokens, horizontal overflow and TOC anchors; current/old edition inventory and archive reachability tested.
- Combined unpublished overlay: content checkpoint plus12 UI paths from PR11 headced5f8ae2b61335660467d0ec89e523136797ef7; full verify49/49 passed,583 pages built; real Chrome E2E358/358 passed (52.1s). GNU/LinuxBSD formal source links and OS filtering/reset/no-JavaScript checks passed. No Git merge or published combined ref.
- Each E2E run required a fresh preview server with reuseExistingServer:false via an ignored local test config. Installed Chrome was used, not the absent local bundled Chromium. An initial local-only config used Bun-specific import.meta.dir under Node and stopped before loading any test; fixed to standard fileURLToPath, then both full runs passed. This was configuration setup, not a product assertion failure.
- Old2.39.3 full1395-file inventory remained byte-identical before/through/after official acceptance. All155 new queue jobs done; total466done/0pending/14historicalblocked.
- GitHub API tree publication is compared against the exact local Git tree before a lease-protected PR branch update. CI/Cloudflare results for the published SHA are separately checked in the PR body. This document does not claim publication/CI success before those checks occur. No merge, production deployment, AWS operation, deletion or repository visibility change.

Local validation log SHA256 fingerprints (logs preserved in recovery workspace):

- `content-verify.log`: `f1e1802c907848b80c8b2d8a8e790de3c9270a77d2dc3593d32eebfdbdf2f23a`
- `content-chrome-e2e.log`: `ee1157e42408873b77115ce71a0390caa36fe1e3e0a5a851a46d8da07d374139`
- `content-chrome-e2e2.log`: `03dc7bc6d7a2724279cdb0f2a9b5f20055343d7a31121456f1eeee8d54f898c4`
- `combined-verify.log`: `6609901200727892ac2581fbbf56866f6e7932c5ebe028c67721b038bb7c7275`
- `combined-chrome-e2e.log`: `3c4d6a1b18f2a4cc3023a24c7665017bcc78411e89909967636550a8c3114723`
