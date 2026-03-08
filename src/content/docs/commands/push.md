---
title: git push
description: Send your commits to the remote (e.g. GitHub).
---

```bash
git push                    # push current branch to its upstream
git push -u origin main     # first time: set upstream and push
git push origin <branch>   # push a specific branch
```

- **Upstream:** The remote branch your branch tracks. Set it once with `-u origin main`, then `git push` is enough.
- If the remote has new commits, pull first: `git pull` then `git push`.
