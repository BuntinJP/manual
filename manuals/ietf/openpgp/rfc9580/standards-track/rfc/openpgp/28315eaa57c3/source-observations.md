# Source observations

Requested: OpenPGP
Source: https://www.rfc-editor.org/rfc/rfc9580.html

Queued for translation. Source/IR extraction checks and semantic review remain agent work.


## Mathematical inline structure correction, 2026-11-17

The old IR flattened 20 superscripts and 1 subscript, losing mathematical meanings such as 2 to the power 31 and log base2. The parser now retains sup/sub as balanced protected inline styles, including nested code identifiers. Source bytes are unchanged; a new IR hash and queue job are used. Regression tests cover numerical and symbolic exponents, subscripts, heading fallback notation, and invalid nesting. The first300 old-IR candidate segments are superseded/unaccepted and retained under translation/parts for audit, not publication.
