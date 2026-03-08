---
title: git checkout / switch
description: Switch branch or restore a file.
---

**Switch branch (use switch):**

```bash
git switch branch-name
git switch -c new-branch-name
```

- `git switch branch-name` — Go to that branch.
- `git switch -c new-branch-name` — Create that branch and go to it.

**Old way (same idea):** `git checkout branch-name` and `git checkout -b new-branch-name`.

**Restore a file (throw away your changes in that file):**

```bash
git restore filename
git checkout -- filename
```

The file goes back to how it was at the last commit.
