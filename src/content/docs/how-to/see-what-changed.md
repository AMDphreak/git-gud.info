---
title: How do I see what I changed?
description: See the difference between your files and the last save.
---

**You changed some files. You want to see exactly what changed.**

There are two ways. Both use the terminal in your project folder.

---

**1. See what changed in your files (not saved yet)**

You edited files but you didn’t run `git add` yet. To see the diff:

```bash
git diff
```

Git shows the lines you added (in green) and the lines you removed (in red).  
If you already ran `git add`, this command won’t show those files. Use the next one.

---

**2. See what you staged (what will go in the next commit)**

You ran `git add`. You want to see what will be in the next commit:

```bash
git diff --staged
```

That shows the same kind of line-by-line diff, but only for the changes you staged.

---

**3. See the list of commits (history)**

You want to see past saves (commits), not the line-by-line diff:

```bash
git log
```

Each commit shows the message and who made it. Press **q** to quit.

Shorter list (one line per commit):

```bash
git log --oneline
```

---

**Quick reminder**

- `git status` — which files changed (names only).
- `git diff` — exact changes in files you didn’t stage yet.
- `git diff --staged` — exact changes you staged.
- `git log` — list of past commits.
