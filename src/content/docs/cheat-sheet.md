---
title: Cheat sheet
description: All commands in one place. Look up the one you need.
template: splash
tableOfContents: false
---

<div class="cheat-sheet">

**Use this page when you know what you want to do and need the exact command.** Short and clear. No lessons.

---

## Commands you use every day

| Command | What it does |
|---------|----------------|
| `git status` | Shows which files changed. Shows which branch you’re on. Run this a lot. |
| `git add .` | Marks all changes in this folder for the next save. (You can use a file name instead of the dot.) |
| `git commit -m "message"` | Saves a snapshot. The message is required. Write something short. |
| `git push` | Sends your saves to the internet (for example GitHub). |
| `git pull` | Gets saves from the internet and puts them in your folder. |

---

## Branches (when you want a separate line of work)

| Command | What it does |
|---------|----------------|
| `git branch` | Lists your branches. |
| `git branch name` | Creates a branch with that name. You’re still on the old branch. |
| `git switch name` | Switches to that branch. (Use this one.) |
| `git switch -c name` | Creates the branch and switches to it. One step. |
| `git merge name` | Puts that branch’s changes into the branch you’re on. |

---

## See what changed or what happened

| Command | What it does |
|---------|----------------|
| `git log` | Shows the list of commits. Press q to quit. |
| `git log --oneline` | Same list but one line per commit. |
| `git diff` | Shows line-by-line what you changed (only files you didn’t add yet). |
| `git diff --staged` | Shows line-by-line what you added and will commit. |

---

## One-time or setup

| Command | What it does |
|---------|----------------|
| `git clone url` | Copies a repo from the internet to your computer. |
| `git init` | Makes this folder a Git repo. Do it once per project. |
| `git remote -v` | Shows the internet address (for example origin). |

---

## Useful extras

| Command | What it does |
|---------|----------------|
| `git restore file` | Throws away your changes in that file. File goes back to last commit. |
| `git restore --staged file` | Un-stages the file. The file still has your changes. |
| `git stash` | Puts your changes aside for a bit. Your folder looks like the last commit. |
| `git stash pop` | Brings the stashed changes back. |

</div>

<style>
.cheat-sheet { max-width: 56rem; margin: 0 auto; }
.cheat-sheet table { width: 100%; }
.cheat-sheet th { text-align: left; }
.cheat-sheet code { font-size: 0.9em; }
</style>
