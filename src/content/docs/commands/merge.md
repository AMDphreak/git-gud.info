---
title: git merge
description: Bring another branch into your current branch.
---

```bash
git switch main      # go to the branch you want to update
git merge feature    # bring feature into main
```

- Merge **into** the branch you’re currently on.
- If there are no conflicts, Git makes a merge commit (or fast-forward).
- Conflicts: Git will tell you which files; edit them, then `git add` and `git commit`.
