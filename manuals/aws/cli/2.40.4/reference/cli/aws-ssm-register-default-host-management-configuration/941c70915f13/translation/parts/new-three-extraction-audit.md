# New GNU diff and AWS commands: independent extraction audit

Read-only audit of the three non-col leaves listed in next-four-intake.json. Only this report was written. No source, IR, queue, Git, or UI changes.

## Method

Read stored source bytes, manifest and IR. Independently parsed GNU parser/mandoc.html `.manual-text` and AWS source.html `div.body` using LinkeDOM. Reconstructed IR in recursive document order, expanding every protected token to inline text. Removed whitespace from source/reconstruction for exact full-text comparison. Checked heading order, all preformatted blocks with internal whitespace retained, segment references, source hash bindings, tails and text outside the selected body. This is mechanical extraction validation, not Japanese meaning review.

## Results

| Leaf | Non-whitespace characters, both sides | Segments / unique references | Headings | Literal blocks | Tables |
| --- | ---: | ---: | ---: | ---: | ---: |
| gnu/diffutils/3.12/upstream-man/1/diff/abd1e4feebc9 | 4,324 | 168 / 168 | 7 | 0 | 0 |
| aws/cli/2.40.4/reference/cli/aws-ssm-register-default-host-management-configuration/941c70915f13 | 5,882 | 102 / 102 | 6 | 1 | 0 |
| aws/cli/2.40.4/reference/cli/aws-ssm-deregister-default-host-management-configuration/77d6bc633b99 | 4,297 | 72 / 72 | 6 | 1 | 0 |

All three full-text comparisons are exact, including order, not merely matching lengths. All actual source hashes match both manifest and IR. All segments are referenced once. All heading texts/order match after whitespace normalization. Each AWS synopsis preformatted block matches the IR exactly after removal of one boundary newline; internal indentation, line breaks, option spellings and brackets are retained. No source tables exist in any selected body, and no table was lost.

GNU contains NAME, SYNOPSIS, DESCRIPTION, AUTHOR, REPORTING BUGS, COPYRIGHT, SEE ALSO. Coverage includes the complete option/format descriptions, copyright and warranty text, the `info diff` command, and final complete-manual sentence. Text outside `.manual-text` is the repeated man header/footer with DIFF(1), User Commands, diffutils 3.12, April 2025, not omitted instruction prose.

AWS register includes all six sections through Output, permission-model alternatives, role-arn constraints in both input and output, and the ending ARN regex. Both constraint sets retain min 20, max 2048 and `^arn:aws[a-z0-9-]*:iam::\d{12}:role/[\w+=,.@/-]+$` exactly. AWS deregister retains all six sections through Output/None. Both retain all global options and their value lists through --help.

Outside each AWS div.body are site navigation, breadcrumbs, previous/next-page links, duplicate table of contents, search, feedback/User Guide notices and site copyright/Sphinx footer. These are distinct from command documentation; no additional command-body section was identified outside div.body. Source bytes retain this chrome even though IR excludes it.

## Conclusion and limits

No extraction omission, duplicated body text, or ordering discrepancy detected. Whitespace-normalized prose equality does not independently prove every list nesting, link target, heading-level mapping, translation meaning, or browser rendering. Code/synopsis whitespace received the separate exact-text check. No legal interpretation, source-signature authentication, or new network fetch was performed.
