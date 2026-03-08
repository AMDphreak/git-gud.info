---
title: git branch
description: List or create branches.
---

```bash
git branch
git branch name
git branch -d name
```

**What it does:**

- `git branch` — List branches. The one you’re on has a star.
- `git branch name` — Create a branch. You don’t switch to it. Use `git switch name` to switch.
- `git branch -d name` — Delete a branch (only if it was merged).

To create and switch in one step: `git switch -c name`.
