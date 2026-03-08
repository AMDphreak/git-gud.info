---
title: git diff
description: Shows line-by-line what changed.
---

```bash
git diff
git diff --staged
git diff main
```

**What it does:**

- `git diff` — Changes in your files that you didn’t add yet (unstaged). Green = added. Red = removed.
- `git diff --staged` — Changes you added. What will go in the next commit.
- `git diff main` — Compare your branch to main (or use another branch name).

No arguments = see what you changed but didn’t stage.
