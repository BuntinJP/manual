# smb.conf source → IR extraction audit

Independent read-only audit, 2026-11-17. Only this report was written; source, IR, translation, queue, generated files and Git state were not modified. No pipeline or generation scripts were run.

## Inputs and method

Inputs: `manuals/samba/samba/4.25.0/upstream/5/smb.conf/04dcc678b4e4/source.html` and `ir.json`.

SHA-256 of the actual source bytes: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`, exactly matching IR `sourceSha256`.

Parsed the stored source HTML with LinkeDOM independently of the manual extraction function. Traversed the stored IR in block/document order, expanding each protected token to its inline text (style-only markers contribute no text). Compared the concatenated source `.refentry` text with reconstructed IR text after removing whitespace (`[\s\u00a0]+`). This is a content/order completeness check, not a whitespace-preservation or translation-meaning check.

## Verified results

- Source normalized text: **354,435 characters**. Reconstructed IR normalized text: **354,435 characters**. Exact equality, not merely equal lengths.
- No body text outside `.refentry`.
- All **4,315 segments** referenced exactly once. No unreferenced segments.
- **633 headings** in source and IR; all heading texts match in exact document order after whitespace normalization.
- **61 preformatted/code examples** in source and IR; every example matches in order with exact text, including internal whitespace and blank lines, after the parser’s documented removal of one leading/trailing newline (`/^\n|\n$/g`).
- **648 definition terms** match in exact order after whitespace normalization; source has 648 `dt` and 648 `dd`, IR has 648 definition entries across 602 definition-list blocks, matching 602 source `dl` elements.
- Source lists: 72 unordered + 1 ordered, 319 items. IR: 73 lists, 1 ordered, 319 items.
- Source tables: **0**. IR table blocks: **0**. No omitted source table was found.
- Source blockquotes/images: 0/0; no script/style/form/navigation or other parser-discardable elements within `.refentry`.
- IR block totals: headings 633, paragraphs 3,034, lists 73, literals 61, definition lists 602.
- Top-level source sections run from Name/SYNOPSIS through WARNINGS, VERSION, SEE ALSO and AUTHOR. Full-text equality includes those trailing sections, not just the parameter catalogue.

## Conclusion and limits

No extraction omission, duplicated body text, or text-order discrepancy was found. The previously reported 354,435-character result was independently reproduced from the current files without relying on the missing prior audit.

This does **not** establish the correctness of Japanese translation, preservation of the meaning of each condition/negation, link destinations, generated Markdown/browser rendering, or exact prose whitespace. Heading-level mapping and all list nesting were not independently proven by the text equality test; matching counts supplement but do not replace structural assertions. Literal examples received the separate exact-text comparison described above.
