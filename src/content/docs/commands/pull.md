---
title: git pull
description: Get new commits from the remote and update your branch.
---

```bash
git pull
git pull origin main   # pull from a specific remote branch
```

`git pull` is effectively **fetch + merge**: it downloads remote changes and merges them into your current branch. Run it before you push to avoid “remote has changes” errors.
