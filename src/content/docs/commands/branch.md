---
title: git branch
description: List or create branches.
---

```bash
git branch           # list local branches
git branch <name>    # create a branch (doesn’t switch to it)
git branch -d <name> # delete a merged branch
```

To **switch** to a branch, use `git switch <name>` (or `git checkout <name>`). Creating and switching in one step: `git switch -c <name>`.
