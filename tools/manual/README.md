# Manual translation artifacts

The pipeline runs with Bun. It imports a self-contained roff file or an HTML page,
preserves the original bytes, extracts a semantic document, prepares an AI request,
and renders accepted Japanese text into Astro/Starlight pages. No model API,
credential, legal review, or publication-permission flag is involved. Rights
information can be recorded as ordinary notes by the operator; it never decides
whether generation runs.

## Commands

```sh
bun run content:ingest --file /path/find.1 --format roff \
  --provider freebsd --product base --version 15.1-release \
  --variant default --section 1 --name find

bun run content:ingest --url 'https://example.org/manual.html' --format html \
  --provider example --product tools --version 2.0 \
  --variant default --section 1 --name find

bun run content:apple-macos --commands find,tar

bun run content:parse --manual manuals/PROVIDER/PRODUCT/VERSION/VARIANT/SECTION/NAME/SHA12
bun run content:translate --manual manuals/PROVIDER/PRODUCT/VERSION/VARIANT/SECTION/NAME/SHA12
bun run content:translate --manual manuals/PROVIDER/PRODUCT/VERSION/VARIANT/SECTION/NAME/SHA12 --accept /path/translated.json
bun run content:verify
bun run content:render
```

### Apple macOS snapshot route

`content:apple-macos` imports only the comma-separated commands explicitly supplied
with `--commands`. The current snapshot accepts `find`, `osascript`, `osacompile`,
`launchctl`, `tclsh`, `tar`, `swift`, and `sqlite3`; it has no implicit "all" mode.
The route is pinned to macOS 26.6.2 build 25G83, the Apple Developer release record
dated 2026-08-17, and Apple Open Source's separately published macOS 26.0
`release.json` at commit `4e290a9b9d3723c65d2a606223d41eb90ecdbf99`. It fails
if the host version, build, installed-manual hash, release manifest hash, GitHub
source hash, or retained license hash differs from the recorded snapshot.

For each selected command, the importer checks the installed manual for the pinned
system. When it is byte-identical to a file in a component named by Apple's pinned
release manifest, the immutable GitHub URL is the source (`find` from
`shell_cmds-326` and `tar` from `libarchive-158` in this snapshot). Otherwise, the
installed system or Command Line Tools manual is the source. A related Apple Open
Source candidate and its license are retained under `provenance/` and `licenses/`
when available. The older public `launchctl` source is not labeled as current,
Swift's installed Command Line Tools manual is not labeled as a macOS base-system
or upstream Swift manual, and the macOS 26.0 open-source publication is not
relabeled as macOS 26.6.2.

This snapshot is intentionally not an automatic "latest macOS" claim. To update
it, verify Apple's current stable release and build, inspect the matching official
Apple Open Source release manifest, resolve component tags to commits, compare
every selected installed manual byte-for-byte, record exact tool versions, update
all expected SHA-256 values, and run the pipeline checks before changing the pin.
Commands not listed in the snapshot require an explicit source decision rather
than silent omission or reuse of an old public manual.

Use `--origin URL` with a downloaded local file to retain its web provenance.
Use `--selector '#content'` on ingest when automatic HTML extraction selects the
wrong region. Automatic selection prefers `.manual-text`, preformatted man-page
sections, `main`/`article`/`[role=main]`, and finally `body`. Legacy preformatted
manuals with named anchors or multiple uppercase bold section headings are split
into prose, definitions, synopsis, and examples. Original HTML remains untouched.

## Identity and storage

```text
manuals/{provider}/{product}/{version}/{variant}/{section}/{name}/{sha12}/
  source.roff | source.html       original UTF-8 bytes
  manifest.json                  explicit identity, full SHA-256, origin, acquisition time
  provenance/                    pinned release manifest and non-current source candidates
  licenses/                      preserved upstream license files, when published
  ir.json                        parsed semantic blocks and protected inline content
  parser/mandoc.html             roff renderer output, when applicable
  parser/diagnostics.txt          mandoc diagnostics, when applicable
  translation/request.ja.json    source segments and translation instructions
  translation/glossary.json      operator-editable terminology
  translation/ja.json            accepted Japanese translation
  rendered/ja.md                 deterministic generated document
```

Identity components are explicit lowercase ASCII slugs. `provider` distinguishes
upstream organizations, `product` distinguishes a base system from a ports/package
collection, `version` is the source's reported release, and `variant` distinguishes
platforms or distribution variants. Section and name remain separate. The last
component is the first 12 characters of the source SHA-256, with collision checks
against the full hash. GNU and BSD `find`, different package versions, and changed
sources therefore have separate artifact directories. Reimporting identical bytes
under the same identity leaves existing translations intact.

`manifest.json` has `schemaVersion: 1`, `identity`, `source` with
`sha256`, `format`, `origin`, `retrievedAt`, and `extraction` with optional `selector`.
Apple snapshots also carry structured `provenance` and hashed `materials`; verification
reads those files back and checks their hashes.
No identity is inferred from a URL query alone; record what the document reports.

## AI handoff

Give the AI `translation/request.ja.json`, `translation/glossary.json`, and any
relevant local notes. The request contains every translatable segment. The AI
returns one JSON object with exactly this shape:

```json
{
  "schemaVersion": 1,
  "sourceSha256": "FULL_SOURCE_SHA256_FROM_REQUEST",
  "irSha256": "FULL_IR_SHA256_FROM_REQUEST",
  "locale": "ja",
  "segments": {
    "s0001": "名前",
    "s0002": "[[p0]] はファイルを検索します。"
  }
}
```

Every requested segment ID must be present. Each `[[pN]]` token must occur exactly
once in its original segment; tokens may move to fit Japanese word order. Tokens
represent code, options, parameters, links, or formatting boundaries. Style opening
and closing tokens must remain balanced. Literal synopsis and example code stays
in the IR and is never supplied as editable translation text. Translation newlines
render as safe line breaks, which can preserve lists embedded in legacy prose.

The automatic checks establish source identity, complete segment coverage, token
integrity, and safe rendering. They do not establish semantic translation accuracy.
Compare the resulting Japanese with the preserved original, especially negation,
numeric boundaries, evaluation order, defaults, caveats, and platform differences.
Formatting hyphenation in preformatted English must be interpreted in context.

## Rendering and verification

`content:verify` checks preserved source hashes and, when present, IR and translation
bindings. It reports `source`, `parsed`, or `translated` for each artifact directory.
Untranslated imports can coexist with translated manuals.

`content:render` validates all current translations before changing generated site
files. It writes accepted translations to `src/content/docs/manuals/`, updates
`src/data/manual-catalog.json`, and removes obsolete pages only when they bear this
pipeline's generated-file marker. Edit source artifacts, not generated pages.
The explicit Markdown `slug` preserves dots in release names and matches catalog
URLs. Heading attributes require the site's configured Satteri
`headingAttributes: true`; smart punctuation is disabled for command fidelity.

The catalog is an array of `{ id, href, provider, product, version, variant, section,
name, sourceSha256, sourceUrl, sourceFormat, description }`. The same entry appears
under the generated frontmatter's `manual` key. `id` is the six-component identity
path plus the 12-character source hash; `href` is `/manuals/{id}/`.

Imports accept HTTP(S) URLs with timeout, redirect, and 16 MiB size limits. roff
parsing uses `/usr/bin/mandoc` through stdin from an empty temporary directory;
external inclusions and file/shell/control-character requests are rejected.
Supply a flattened self-contained roff source when upstream uses includes.
HTML scripts, interactive elements, arbitrary upstream attributes and unsafe URL
schemes are discarded. The IR and renderer use a fixed element vocabulary, and
translation text is escaped. Normal site generation uses saved IR and requires no
network access, mandoc invocation, or AI connection.
