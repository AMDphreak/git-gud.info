---
title: How do I fix a typo in my last commit?
description: Change the last save without making a new commit.
---

**You just made a commit. You see a typo in a file or in the commit message. You want to fix it and have it count as the same commit, not a new one.**

There are two cases.

---

**Case 1: Fix a typo in a file (and keep the same commit message)**

1. Fix the typo in the file. Save the file.
2. Stage the fix:

```bash
git add the-file-you-fixed
```

Or stage everything:

```bash
git add .
```

3. Change the last commit to include this fix:

```bash
git commit --amend --no-edit
```

`--no-edit` means: keep the same commit message. Your fix is now part of the last commit. You still have one commit, not two.

---

**Case 2: Fix the commit message (the text you wrote for the commit)**

You don’t need to change any files. Just run:

```bash
git commit --amend -m "New message here"
```

Replace “New message here” with the correct message. The last commit now has the new message.

---

**If you already pushed that commit to GitHub**

After you run `git commit --amend`, your history changed. So you have to push again with:

```bash
git push --force
```

Only do this if no one else is using the same branch. Force push can cause problems for others. If you work alone on this repo, it’s fine.
