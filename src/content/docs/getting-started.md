---
title: Getting started
description: Install Git and make your first save. One step at a time.
---

This is a **tutorial**. You follow the steps in order. At the end you will have Git on your computer and you will have made your first save (commit).

---

## Step 1: Install Git

Git is a program. You need to put it on your computer first.

- **Windows:** Go to [git-scm.com/download/win](https://git-scm.com/download/win). Download and run the installer. Or open a terminal and run: `winget install Git.Git`
- **Mac:** Open a terminal. Run: `xcode-select --install`. Or go to [git-scm.com](https://git-scm.com) and download for Mac.
- **Linux:** Open a terminal. Run: `sudo apt install git` (on Ubuntu or similar).

**Check that it worked.** Open a terminal. Type:

```bash
git --version
```

You should see a number like `2.43.0`. If you see that, Git is installed.

---

## Step 2: Tell Git your name and email (do this once)

Git needs to know who is making the saves. Type these two lines. Use your real name and email.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

You only do this once per computer.

---

## Step 3: Get a project folder

You need a folder that Git can track. You have two choices.

**Choice A: Copy a project from the internet (for example from GitHub).**

```bash
git clone https://github.com/someone/some-repo.git
cd some-repo
```

Replace the URL with the real URL of the project. Now you are inside that folder.

**Choice B: Use a folder you already have on your computer.**

Go into that folder in the terminal. Then run:

```bash
git init
```

That makes Git start tracking this folder. The folder is now a **repo** (short for repository).

---

## Step 4: Make your first save (commit)

A **commit** is one saved snapshot. You add a short message so you know what this save is for.

1. Change or add a file in the folder (for example add a line to a text file).
2. In the terminal, run:

```bash
git status
```

You will see a list of files that changed. That’s normal.

3. Tell Git to include all changes in the next save:

```bash
git add .
```

The dot means “everything in this folder”.

4. Save a snapshot with a message:

```bash
git commit -m "First commit"
```

You can change the message to anything. For example: `"Add my first file"`.

**You did it.** You made your first commit. That means Git has saved a snapshot of your folder.

---

## Step 5: Send your saves to the internet (optional)

If you use GitHub or a similar site, you can put your repo there so others can see it or so you can open it on another computer.

1. Create a new empty repo on GitHub (no files, no README).
2. In your terminal, run (use your real URL and branch name):

```bash
git remote add origin https://github.com/you/your-repo.git
git push -u origin main
```

After that, when you make more commits, you can run `git push` to send them to GitHub.

---

**What next?**

- See [How the commands fit together](/workflow/) (a picture).
- Look up any command on the [Cheat sheet](/cheat-sheet/).
- Try a [How-to guide](/how-to/put-project-on-github/) for a specific task.
