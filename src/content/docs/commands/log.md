---
title: git log
description: Shows the list of commits.
---

```bash
git log
git log --oneline
git log -5
```

**What it does:**

- `git log` — Full list. Each commit shows message, author, date. Press **q** to quit.
- `git log --oneline` — One line per commit. Shorter.
- `git log -5` — Only the last 5 commits.

You can add a branch or a file: `git log main`, `git log -- path/to/file`.
