---
title: How do I create a new branch?
description: Make a separate line of work so the main folder stays safe.
---

**A branch is a copy of your project where you can try things.**  
The main branch (often called `main`) stays the same until you decide to bring your changes back.

---

**Do this:**

1. Open a terminal in your project folder.
2. Create a new branch. Pick a name that says what you’re doing. For example `fix-login` or `new-button`:

```bash
git branch fix-login
```

That creates the branch. It does **not** switch you to it yet.

3. Switch to the new branch:

```bash
git switch fix-login
```

Now you are on `fix-login`. Any commits you make here stay on this branch. Your `main` branch does not change.

---

**Shortcut: create and switch in one step**

```bash
git switch -c fix-login
```

The `-c` means “create this branch and switch to it”. Same result as the two commands above.

---

**Check which branch you’re on**

```bash
git branch
```

The branch you’re on has a star next to it. Or run `git status` — it says “On branch fix-login” at the top.

---

**When you’re done and want to bring your work back into main**

Switch to `main`, then merge:

```bash
git switch main
git merge fix-login
```

Now the changes from `fix-login` are in `main`. See [merge](/commands/merge/) for more.
