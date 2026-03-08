---
title: git diff
description: Show what changed (unstaged or staged).
---

```bash
git diff             # unstaged changes (working tree vs index)
git diff --staged    # staged changes (index vs last commit)
git diff main        # compare current branch to main
```

No arguments = see what you haven’t staged yet. `--staged` = what you’re about to commit.
