---
title: How do I undo my last commit?
description: Take back the last save but keep your file changes.
---

**You want to remove the last commit but keep the changes in your files.**

Maybe the message was wrong. Maybe you added a file by mistake. This fixes that.

---

**Do this:**

1. Open a terminal in your project folder.
2. Run:

```bash
git reset --soft HEAD~1
```

**What that does:**

- `HEAD~1` means “one commit before the latest”.
- `--soft` means: move back to that commit but **keep all your file changes**. They stay in your folder and stay staged (ready to commit again).

So your last commit is gone. Your files look exactly like they did after that commit. You can change the message or the files and run `git commit` again.

---

**If you want to undo the commit AND unstage the changes** (so files are back to “not staged”):

```bash
git reset HEAD~1
```

(No `--soft`. This is the default. Your file changes are still there, but they are no longer staged.)

---

**If you want to undo the commit AND throw away all the changes** (careful — you lose those changes):

```bash
git reset --hard HEAD~1
```

Only use this if you are sure you don’t need the last commit or its changes.
