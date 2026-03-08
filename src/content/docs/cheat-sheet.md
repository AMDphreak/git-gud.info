---
title: Cheat sheet
description: Git commands at a glance — full-width reference.
template: splash
tableOfContents: false
---

<div class="cheat-sheet">

## Most used (daily)

| Command | What it does |
|---------|----------------|
| `git status` | What’s changed, what’s staged, what branch you’re on. |
| `git add <path>` | Stage changes (use `git add .` for everything in the dir). |
| `git commit -m "message"` | Save a snapshot with a one-line message. |
| `git push` | Send your commits to the remote. |
| `git pull` | Get commits from the remote and update your branch. |

## Branches

| Command | What it does |
|---------|----------------|
| `git branch` | List local branches. |
| `git branch <name>` | Create a branch (doesn’t switch). |
| `git switch <branch>` | Switch to a branch (preferred). |
| `git checkout <branch>` | Same as switch; also used for files. |
| `git merge <branch>` | Merge another branch into the current one. |

## History & diff

| Command | What it does |
|---------|----------------|
| `git log` | Show commit history. |
| `git log --oneline` | Short one-line-per-commit. |
| `git diff` | Unstaged changes. |
| `git diff --staged` | Staged changes. |

## One-off / setup

| Command | What it does |
|---------|----------------|
| `git clone <url>` | Copy a repo from a URL to your machine. |
| `git init` | Turn the current folder into a repo. |
| `git remote -v` | List remotes (e.g. `origin`). |

## Handy extras

| Command | What it does |
|---------|----------------|
| `git restore <file>` | Discard unstaged changes in a file. |
| `git restore --staged <file>` | Unstage a file. |
| `git stash` | Temporarily put changes aside. |
| `git stash pop` | Bring stashed changes back. |

</div>

<style>
.cheat-sheet { max-width: 56rem; margin: 0 auto; }
.cheat-sheet table { width: 100%; }
.cheat-sheet th { text-align: left; }
.cheat-sheet code { font-size: 0.9em; }
</style>
