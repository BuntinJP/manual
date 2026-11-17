# Expansion acceptance review (2026-11-17)

GNU Diffutils3.12 formal diff(1),168 segments, separate from prior GFDL Texinfo chapter.

Every requested segment was translated and self-reviewed, then all segments were compared against the source/IR by a different reviewer. Numeric bounds, defaults, negative/conditional statements, protected command/option names and output were checked. No mandatory unresolved translation finding. The independent extraction audit found no dropped body text/order; machine matching is not a substitute for the semantic checks. Actual reports and reviewed candidate hashes are retained in parts/gnu-diff-man-self-review.md, parts/gnu-diff-man-independent-review.md, parts/new-three-extraction-audit.md. Candidate working paths named in those reports refer to the pre-acceptance recovery-work location.

No source command was executed, no AWS operation was invoked, and this acceptance is not merge/production deployment or a licensing approval. Source provenance and relevant limitations are retained in source-observations.md/materials. Full-site verification and browser checks follow acceptance.

sourceSha256: abd1e4feebc9db8e78054f103649afb285b4e8cd79bc46ac4a2ed8c04868b17d
irSha256: ed8f3ec59145a0f11e801f1460146490adaae2ecaea76d7f190135fe41629f38
draftSha256: 7479c14e3b03e0eb514b554fdf63701d78e47d900766a1d2c2e45b04e96bfb0e

Final standalone validation: Bun1.3.14 / Node24.22.0 / macOS mandoc, full verify44/44 plus428-page build passed. Chrome E2E197/197 passed, including new SSM command narrow-screen cases. Independent PR11 UI is tested separately and via a non-published integration overlay; merging remains owner-only.
