---
title: git push
description: Sends your commits to the internet.
---

```bash
git push
git push -u origin main
git push origin branch-name
```

**What it does:**

- Sends your commits to the remote (for example GitHub).
- First time you push a branch, use: `git push -u origin main`. The `-u` remembers where to push. After that, `git push` is enough.
- If the remote has new commits, run `git pull` first, then `git push`.
