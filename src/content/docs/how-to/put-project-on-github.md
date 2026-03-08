---
title: How do I put my project on GitHub?
description: Take a folder on your computer and connect it to GitHub.
---

**You have a project folder. You want it on GitHub so you can share it or open it from another computer.**

Do these steps in order.

---

## Step 1: Make sure your folder is a Git repo

Open a terminal. Go into your project folder. Run:

```bash
git status
```

If you see “not a git repository”, your folder is not a repo yet. Run:

```bash
git init
```

Then add and commit at least one time:

```bash
git add .
git commit -m "First commit"
```

---

## Step 2: Create an empty repo on GitHub

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** at the top right. Click **New repository**.
3. Type a name for the repo (for example `my-project`).
4. Do **not** check “Add a README” or “Add .gitignore”. Leave the repo empty.
5. Click **Create repository**.

GitHub will show you a page with a URL. It looks like:  
`https://github.com/your-username/my-project.git`  
Copy that URL. You need it in the next step.

---

## Step 3: Connect your folder to GitHub

In the terminal, still in your project folder, run (paste your real URL):

```bash
git remote add origin https://github.com/your-username/my-project.git
```

“Origin” is just a name for this place on GitHub. Everyone uses that name. You only do this once per repo.

---

## Step 4: Send your commits to GitHub

Run:

```bash
git push -u origin main
```

If your branch is called `master` instead of `main`, use:

```bash
git push -u origin master
```

The `-u` means “remember this”. Next time you can just run `git push` and Git will know where to send.

---

**Done.** Refresh the page on GitHub. You should see your files there.

**From now on:** when you make more commits, run `git push` to send them to GitHub.
