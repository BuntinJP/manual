# systemextensionsctl(8) source and extraction observations

- Retrieved on 2026-11-04 from `/usr/share/man/man8/systemextensionsctl.8`, the path returned by `man -w systemextensionsctl`.
- `sw_vers` reported macOS 27.2, build 26B123. The identity uses version `27.2` and variant `26b123`; this records the installed host, not an independently verified latest Apple release.
- The source declares section 8, Darwin, document date October 30, 2023, and Apple copyright 2019–2023. That document date is retained and is not used as the installed OS version.
- The original bytes were copied without transformation; SHA-256: `52e39211f048c2aecbb32bacb88c5ea5135b444e6c25116186c134364b04ad21`.
- No older Apple Open Source document was substituted. The existing pinned eight-command Apple snapshot route was not changed.

## Extraction review

Reviewed the complete saved roff against all 36 IR segments and their block structure on 2026-11-04.
The six sections NAME, SYNOPSIS, DESCRIPTION, EXIT STATUS, SEE ALSO, and HISTORY are present.
All three synopsis forms (`developer [on | off]`, `list`, `reset`) retain their command pairing in tables.
The warning that this utility is intended for developers, the conditional version-check bypass,
all four extension states and their corresponding descriptions, and the destructive reset description are present.
Exit status 0 / >0, `sysextd(8)`, both Apple documentation link labels and URLs,
and macOS Catalina 10.15 in HISTORY are preserved. No missing content or extraction warnings were found.
Document metadata and the copyright comment remain in the unchanged source.

This is an intake/extraction review only. No Japanese translation or translation meaning review has been performed.
