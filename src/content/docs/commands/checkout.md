---
title: git checkout / switch
description: Switch branches or restore files.
---

**Switch branch (prefer `switch`):**

```bash
git switch <branch>       # switch to branch
git switch -c <branch>   # create and switch in one step
```

**Legacy (same idea):**

```bash
git checkout <branch>
git checkout -b <branch>  # create and switch
```

**Restore a file** (discard unstaged changes):

```bash
git restore <file>
git checkout -- <file>   # older form
```

`switch` is the modern command for branches; `checkout` is still used for restoring files and in older docs.
