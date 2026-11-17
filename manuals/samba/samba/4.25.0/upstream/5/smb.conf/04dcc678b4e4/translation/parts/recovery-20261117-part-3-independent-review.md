# smb.conf part 3 independent review

## Artifact and scope

- Reviewed artifact: `recovery-work/smb-part-3-ja.json`
- SHA-256 at review start and end: `e6cf6fbbe00da288548f489ee69cd2a51c610dda9418cc981374132286ae8eb7`
- Scope: all 300 assigned segments, s3718–s4017. Includes prose, parameter headings, empty terms, default/example labels and protected values.
- Source: corresponding request and `manuals/samba/samba/4.25.0/upstream/5/smb.conf/04dcc678b4e4/ir.json`; every request segment text was checked against the canonical IR. Read source.html section context directly for svcctl list, tls ca directories, tls cafile, sync machine password to keytab, and veto files, including adjacent untranslatable code blocks.

## Semantic review (distinct from mechanical validation)

Read every English/Japanese prose pair and reviewed the remaining labels/headings/default entries. Expanded the protected values to check which parameter/value each statement actually refers to. No blocking mistranslation, missing negation, changed number/default, inverted condition, or omitted protected token was found in this snapshot.

Particularly checked:
- s3723: DOS attribute precedence, backward compatibility, creation time, and default change at Samba 4.9.0.
- s3727–s3746: sparse allocation, extent caveats, locking Auto/no, rename traversal and POSIX exception, implicit strict rename enablement.
- s3750–s3763: strict sync yes/no meaning, 4.7.0 default reversal, asynchronous flush, sync always dependency on strict sync=yes.
- s3767–s3789: machine-password/keytab updates; absent value versus disabled; FreeIPA exception; net changesecretpw -f versus other net subcommands.
- s3793–s3800: syslog exceptions and strictly lower-than threshold.
- s3823–s3873: PEM/CA paths, unencrypted private key requirement, TLS verification levels and their additional conditions, CRL requirement, no_check warning.
- s3888–s3899: root execution, AD DC exception, printer privilege remapping and prohibition with installed drivers, mmap exceptions.
- s3903–s3939: name-case search, cache zero, mapping direction/order, early exit only after a matching ! line, NTLM/Kerberos version history, before/after authentication distinctions.
- s3944–s3977: guest access default, share count zero, owner check, directory permissions, deny-before-allow precedence, template -valid=False.
- s3980–s4015: sendfile client exceptions, utmp support and n^2 cost, invalid-users precedence, veto filename syntax, cumulative parametric options, deletion failure unless delete veto files=yes.

## Mechanical validation

All 300 IDs present with no extras; metadata matches request; token multisets match per segment; request text matches canonical IR. Default and example labels translated without changing protected setting names/values. These checks support artifact integrity but are not represented as semantic review by themselves.

## Notes / nonblocking observations

- s4008–s4010 deliberately form one sentence across a configuration line, as in source; reading them in order preserves the NAME explanation.
- Source prose/code disagreements or legacy claims were not “corrected” using present-day assumptions. For example, the keytab section contains source-controlled literal command syntax and configuration blocks outside these text segments; those remain unchanged.
- No findings requiring translation changes. No edits made to translation JSON, queue, generated pages, upstream data, or Git. Full renderer/pipeline checks remain the parent task's responsibility.
