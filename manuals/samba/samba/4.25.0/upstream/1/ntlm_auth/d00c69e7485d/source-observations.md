Requested group: Linux Samba / smb suite.
Source fetched from https://www.samba.org/samba/docs/current/man-html/ntlm_auth.1.html.
Queued for translation; extraction and semantic review remain agent work.
The official current manual page does not state a release version; no numbered release was inferred.


## Version correction, 2026-11-17

The original VERSION section explicitly states: This man page is part of version 4.25.0 of the Samba suite.
The earlier current identity and its note claiming no numbered version were incorrect. This separate leaf uses the stated 4.25.0 identity; the old current leaf and blocked queue history are retained. Original source and materials are unchanged.


## Extraction correction, 2026-11-17

The malformed upstream div nesting places EXAMPLE SETUP, TROUBLESHOOTING, VERSION and AUTHOR outside .refentry in the parsed DOM. This page has no site navigation in body, so the selector is body to retain all manual sections. The original source remains unchanged. The old 62-segment job is blocked, not accepted.
