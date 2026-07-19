# Agent rules for this repository

## Git identity (mandatory)

This project must only commit and push as:

- **Name:** `AtiqurCode`
- **Email:** `atqur9@gmail.com`

Use **repo-local** git config only. Do not use the machine global git user.

```sh
git config --local user.name "AtiqurCode"
git config --local user.email "atqur9@gmail.com"
```

### Never push these identities

- Claude / Anthropic
- Cursor / CursorAgent / cursoragent
- Any other global git user
- Any AI `Co-authored-by` trailer

### Strip Cursor co-author trailers

Repo hooks live in `.githooks/`. Enable once per clone:

```sh
git config --local core.hooksPath .githooks
```

Also disable Cursor attribution in the IDE: **Settings → Agents → Attribution** (off).

### Before every commit/push

1. Check `git config --local user.name` and `git config --local user.email`
2. Check `git log -1 --format='%an <%ae>'` and `git log -1 --format='%B'` (no AI trailers)
3. Abort if the author is not `AtiqurCode <atqur9@gmail.com>`

## Commit message style

- Human-readable, project-focused
- No AI tool branding in messages or trailers
- Prefer serial, meaningful commits over one giant dump

## Branch

Default branch for this repo is `master` (not `main`).
