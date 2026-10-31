# Translation queue

`bun run content:queue add` creates one `<job-id>.json` per preserved source and IR
revision here. Each job holds its draft, current claim and handoff history. Keep
these files together with the corresponding `manuals/` artifacts in Git.

Use `bun run content:queue next --worker CHAT_ID --max-segments 20` to claim a
bounded batch with source references and an agent request. Use `save` before the
usage limit to checkpoint even an incomplete batch. `list` is read-only.

Only one checkout owns the queue at a time. The local lock protects concurrent
commands in that checkout; it does not coordinate independent Git worktrees or
machines. Do not edit job JSON by hand or delete it to recover a claim. Stop the
previous worker and use `recover`, preserving drafts and invalidating old tokens.

See [the operator and agent workflow](../docs/translation-queue.md), including
review, completion, source changes and explicit lock recovery. The queue does not
start models, discover subscription reset times, schedule work or deploy the site.
