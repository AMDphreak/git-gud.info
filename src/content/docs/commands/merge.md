---
title: git merge
description: Puts another branch’s commits into the branch you’re on.
---

```bash
git switch main
git merge other-branch
```

**What it does:**

- You must be on the branch that should receive the changes. So switch to `main` (or whatever branch you want to update).
- Then run `git merge other-branch`. All commits from that branch go into your current branch.

If there are no conflicts, Git makes the merge. If there are conflicts, Git tells you which files. Open those files, fix the conflict lines, then `git add` and `git commit`.
