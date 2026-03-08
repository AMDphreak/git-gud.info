---
title: git clone
description: Copies a repo from the internet to your computer.
---

```bash
git clone https://github.com/user/repo.git
git clone https://github.com/user/repo.git my-folder-name
```

**What it does:**

- Downloads the whole repo. You get a folder with the same name as the repo (or the name you give at the end).
- You do this once per project. After that you use `git pull` to get new changes.

Then go into the folder (`cd repo-name`) and use `status`, `add`, `commit`, `push`, `pull` as usual.
