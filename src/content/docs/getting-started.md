---
title: Getting started
description: Install Git and make your first commit in a few minutes.
---

## 1. Install Git

- **Windows:** [git-scm.com/download/win](https://git-scm.com/download/win) or `winget install Git.Git`
- **macOS:** `xcode-select --install` or [git-scm.com](https://git-scm.com)
- **Linux:** `sudo apt install git` (Debian/Ubuntu) or your distro’s package manager

Check: `git --version`

## 2. Set your name and email (once per machine)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 3. Get a repo

**Clone an existing repo:**

```bash
git clone https://github.com/someone/some-repo.git
cd some-repo
```

**Or start a new repo in the current folder:**

```bash
git init
```

## 4. Make a commit

```bash
git status          # see what’s changed
git add .           # stage everything (or use specific files)
git commit -m "First commit"
```

## 5. Sync with a remote (if you use GitHub/GitLab)

```bash
git remote add origin https://github.com/you/your-repo.git
git push -u origin main
```

Next: see the [Workflow](/workflow/) diagram and [Cheat sheet](/cheat-sheet/).
