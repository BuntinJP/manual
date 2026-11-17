# Source observations

Requested: ConvertX (Bun + Elysia)
Source: https://github.com/C4illin/ConvertX/blob/v0.20.0/README.md
Bun and Elysia are the implementation technologies described by the project, not additional translation targets.

Queued for translation. Source/IR extraction checks and semantic review remain agent work.

## 2026-11-17: GitHub table-wrapper extraction repair

The preserved GitHub HTML wraps all three README tables in the custom element
`markdown-accessiblity-table` (this is the spelling in the source). The previous
parser treated that unrecognized element as inline content, flattening each table
into one paragraph and losing its row/column structure. The parser now recognizes
this specific element as a block container and traverses it using the existing
sanitized conversion path; it does not execute custom-element code or preserve
scripts. Original `source.html` bytes and the source SHA-256 are unchanged.

Formal parse/request preparation now yields 191 segments instead of 41.
Structural comparison: source and IR both contain 3 tables, 46 rows, 156 cells,
and 2 preformatted/literal code blocks. The regression test covers headers,
row/cell retention, neighboring prose, literal code, and exclusion of active
script content. This is extraction repair and structural QA, not completed
Japanese translation or final semantic review. Old-IR queue state must be kept
separately and a new job must be registered for the new IR.

### License material retained with the repaired extraction

The project's same-tag official license was fetched from
https://raw.githubusercontent.com/C4illin/ConvertX/v0.20.0/LICENSE and preserved
byte-for-byte (including CRLF) as `licenses/LICENSE-v0.20.0`, with its SHA-256
in the manifest. It is the GNU Affero General Public License version 3 text.
The saved README itself does not state a separate documentation license.
This record preserves the project-level evidence; it does not claim special
permission for third-party screenshots, converter logos, linked tutorials, or
other independently owned material. Preserve attribution, the original README,
and this license when publishing a derivative; publication remains the
operator's decision. Translation and extraction are not blocked by this note.
