# Source observations

Requested: tmux
Source: https://man.openbsd.org/tmux.1
The manual labels the edition OpenBSD-current; no numbered OS release was inferred.

Queued for translation. Source/IR extraction checks and semantic review remain agent work.

## 2026-11-17 extraction and rights observations

The preserved `.manual-text` DOM and IR blocks, traversed in document order with
protected inline text restored, are identical after whitespace removal (161,845
characters). All 28 headings, 20 tables and 57 literal code blocks are retained.
The comparison checks extraction coverage, not translation semantics.

The rendered source names Nicholas Marriott in AUTHORS but does not contain an
explicit redistribution/translation licence grant. No licence from another tmux
release has been asserted to apply to these exact preserved bytes. This is a
publication concern for the operator to resolve; it does not gate local
translation or generation. The original HTML remains unchanged.
