# Claude / agent instructions

Follow `AGENTS.md` for this repository.

Critical git rule: only commit and push as `AtiqurCode <atqur9@gmail.com>` using local repo config.

Never use Claude, Cursor, CursorAgent, or any global git identity as author/committer/co-author.

Repo `.githooks/` strips `Co-authored-by: Cursor <cursoragent@cursor.com>` automatically when `core.hooksPath` is `.githooks`.
