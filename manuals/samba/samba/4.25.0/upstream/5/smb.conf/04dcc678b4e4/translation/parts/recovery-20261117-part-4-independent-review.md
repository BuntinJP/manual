# Part 4 independent translation review

## Snapshot and scope
- Reviewed file: `recovery-work/smb-part-4-ja.json`
- SHA-256: `a1e2c091d3f3a97b2fe6e66f15744b7bf1300c43453fff2941d52a2c193c2858`
- Scope: all 298 segments s4018–s4315, compared to matching request and source IR.
- Segment classification: {'empty': 50, 'other': 130, 'default/example': 60, 'heading': 58}.
- Source HTML SHA-256: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- IR SHA-256: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`

## Semantic review (independent of mechanical checks)
Read the English and Japanese text for every nonempty prose segment, including the continuation which was initially truncated in tool output (s4114–s4185 was reread separately). Read parameter/general headings, default/example labels and their expanded protected values separately. Empty definition entries were verified empty, not counted as prose semantic judgments.

Checked oplock restrictions; mkdir Auto's at-least-one-not-no condition and OpenBSD exception; wide-link restrictions; winbind caching versus offline authentication; enumeration/group-depth distinctions and defaults; soft client limit versus per-domain connection limit; name-alias precedence; SFU versions; offline credentials; idle/hung timeout; trusted-domain scanning conditions; sealing; separator caveats; enterprise principal referrals; Varlink version/platform warnings; WINS hooks and argument ordinals; replication conditions; tombstone timing; write-list override; raw-write byte size; WSP column/type definitions; wtmp caveats; final warnings/version/author.

All numeric/default/negation/condition statements preserve the source meaning. No substantive mistranslation, dropped condition, or missing translation was found. Literal property labels are retained as names. Protected code/comments are intentionally not translated.

## Findings
1. **Minor wording, non-blocking — s4169.** Source: `With [[p0]] winbindd doesn't even get a complete picture of the topology.` Protected value is `winbind scan trusted domains = no`. Current Japanese says `[[p0]] を使用しても、winbindd はトポロジーの全体像を把握できません。` The concessive 「使用しても」 slightly suggests the disabled setting might help, whereas the English states the condition. Suggested clearer wording: `[[p0]] の場合、winbindd はトポロジーの全体像すら把握できません。` Existing text does not reverse the setting or outcome. No modification made.

## Upstream observations, not translation defects
- s4179 preserves upstream `GetMemberhips` spelling.
- s4216 protected example has `192.9.200.1` versus comment `192.19.200.1`; kept intact, not a Japanese error.
- s4303 says `utmp` within the wtmp section. Confirmed directly in source HTML; translator correctly did not silently change it.

## Mechanical checks (not semantic-review substitutes)
Exact ID coverage 298/298; each request source text matches its IR entry; placeholder multisets identical in each translated segment; em/strong nesting balanced; empty entries retained. Source and IR hashes match metadata. Checked JSON hash above is the review snapshot.

Only this review file was written. Translation, queue, generated pages, and git were not modified. No independent build/runtime test was run for this review.

## Follow-up: s4169 correction reviewed
- New translation JSON SHA-256: `e4f9aa2d8b577ed96310bf8ac3b6261fc2f0b051318134d1c82d5388773303f5`
- Rechecked only s4169 against its English source and protected value (`winbind scan trusted domains = no`). Revised Japanese: `[[p0]] の場合、winbindd はトポロジーの全体像すら把握できません。`
- Result: the conditional relationship and emphatic negative are now accurately expressed; the minor wording finding above is resolved. Token remains intact. This follow-up is limited to that requested correction and does not assert a fresh semantic review of unrelated changes. No translation file edited.
