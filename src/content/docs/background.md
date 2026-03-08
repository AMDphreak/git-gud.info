---
title: Background — how Git got this way
description: Origin story, who built it, and why usability and wording are so messy.
---

This page explains **how and why** Git ended up with so many usability and semantic problems. No one set out to make it confusing. History and context explain a lot.

---

## Linus built it in about two weeks, then handed it off

**Linus Torvalds** created Git in **April 2005**. He had a sharp need: the Linux kernel had been using a tool called BitKeeper for version control, and when BitKeeper’s free use for the kernel was withdrawn, Linus needed a replacement fast. He aimed to have something usable **within two weeks**. By most accounts he had a working version in about **10 days**. The first Git commit was on April 7, 2005; the kernel was using Git by mid-April.

Linus did not plan for Git to become the default version control system for the whole world. He built it for the kernel’s needs: distributed, fast, and able to handle huge numbers of commits and merges. He then handed maintenance to **Junio C Hamano** in **July 2005** — only a couple of months later. Junio has been the main maintainer ever since and is the reason Git evolved from a quick hack into a stable, widely used tool.

So: Git started as a **short-term, high-pressure project** for one very specific use case. It was not designed by a team with a mandate for “clear for beginners” or “consistent naming.” That explains a lot of the design.

---

## Neither creator nor long-time maintainer is a native English speaker

**Linus Torvalds** grew up in Finland in the Swedish-speaking minority. **Swedish is his first language**; he learned Finnish later and has said English is one of his working languages, not his mother tongue.

**Junio C Hamano** is **Japanese**. (His name in Japanese is 濱野 純, Hamano Jun.) He has been maintaining Git and much of its documentation and command set for two decades.

That doesn’t mean either of them writes bad English. It does mean that **Git’s naming, help text, and documentation were not created in a context where native-English UX and “clear for the whole world” were the main goals**. When English is not your first language, it’s easy to miss **subtle nuances**: a word can sound correct but mislead native speakers, or one verb can be used for two unrelated actions so that the choice of terminology feels “off” or confusing. The vocabulary and the way commands are described often reflect implementation details or kernel-culture habits. So **semantic and usability problems** — inconsistent verbs, jargon, and docs that describe *how* the program works instead of *what you’re trying to do* — come from this history: a fast-built tool, maintained for years by someone for whom English is a second language, with no dedicated “usability and clear English” owner.

---

## Glaring examples: terminology that’s wrong or misleading in English

Here are concrete examples where Git’s choice of words clashes with how native English speakers understand them. These aren’t small nitpicks; they cause real confusion.

**checkout** — In normal English, “check out” means to look at something or to take something out (e.g. check out a book). In Git, `git checkout` does **two completely different things**: (a) switch to another branch, and (b) restore a file to its last committed state. One verb for two unrelated operations. Git later introduced `git switch` and `git restore` because the original wording was wrong; many people now prefer those.

**revert** — In English, “revert” usually means “go back to a previous state” or “undo.” In Git, `git revert` does **not** move the branch back in time. It creates a **new** commit that undoes the effect of another commit. So you’re not reverting the repo; you’re applying the inverse of a change. A clearer name would be something like “undo-commit” or “apply-reverse.” As it stands, “revert” suggests the wrong mental model.

**reset** — In English, “reset” suggests “set back to default” or “clear.” In Git, `git reset` can do **three different things** depending on flags (soft, mixed, hard): move the branch pointer, and optionally change the staging area and/or the working tree. One word, three behaviors. “Reset” doesn’t convey that. Worse, `git reset --hard` sounds like “reset everything” but is **destructive** — it throws away uncommitted work. The nuance between “reset the pointer but keep my changes” and “reset and wipe my changes” is not in the word “reset.”

**add** — In Subversion and in everyday English, “add” means “add a new file” (start tracking it). In Git, “add” means **stage** — put changes (new or modified files) into the staging area. So “add” is used both for “track this new file” and “stage this change.” The same word does double duty, and people coming from SVN expect “add” to mean only “new file.” A clearer, single concept would be “stage” everywhere; “add” is overloaded and ambiguous.

**index** — Git calls the staging area the “index.” In English, “index” suggests a list or catalog at the back of a book. It doesn’t suggest “the place where you prepare the next commit.” The term is **implementation jargon** that leaked into the interface. “Staging area” is what users need; “index” is what the code uses. Users get the jargon.

**detached HEAD** — “Detached” means disconnected; “HEAD” is Git’s name for “the current commit.” So “detached HEAD” means “you’re not on a branch, you’re just viewing a commit.” To a native speaker, the phrase sounds alarming and opaque. A clearer description would be “viewing a specific commit without being on a branch” or “temporary view of an old commit.” The terminology prioritizes Git’s internals over user understanding.

**fast-forward** — In everyday English, “fast-forward” usually means to skip ahead (e.g. on a video). In Git, a “fast-forward merge” means the branch pointer **moves forward** to the tip of the other branch, with no merge commit. The metaphor is about the pointer advancing, but users often think “skip ahead” and get the wrong idea. The nuance is wrong for many readers.

**treeish** — Git uses “tree-ish” (or “treeish”) to mean “something that resolves to a tree or commit” (a commit hash, a branch name, etc.). That’s not standard English. It’s internal jargon. A clearer phrase would be “commit or branch” or “pointer to a commit.”

These are not the only examples. The pattern is the same: words that sound plausible but mislead, or one word doing too much, or implementation names used as user-facing terms. A native English speaker with a mandate for clarity would likely choose different verbs and names. That’s why this site uses plain, consistent language — “save a snapshot,” “stage,” “switch branch,” “restore a file” — and explains what each command actually does instead of repeating Git’s own terminology when it’s wrong or confusing.

---

## Why the usability and semantic problems are so deep

1. **Built under time pressure.** Git was built in roughly two weeks to solve an immediate kernel problem. There was no time for a clean, consistent command set or a beginner-friendly mental model. The design reflects what was needed to get the kernel off BitKeeper, not to teach new users.

2. **Implementation leaked into the interface.** Git’s internal ideas (index, objects, refs, treeishes) show up in user-facing names and docs. There was never a strong “user interface” layer that hid those details and gave users a simple, consistent vocabulary. So **semantic confusion** — “What’s the difference between checkout and reset? Why does add sometimes mean ‘track’ and sometimes ‘stage’?” — comes from exposing implementation concepts as the main way to talk about Git.

3. **No single owner for “clear English” or “consistent verbs.”** The project has had brilliant maintainers and many contributors, but no one has had the job of making the whole system semantically consistent and beginner-friendly. Naming and documentation grew over time. So we get **inconsistent syntax** (e.g. `git pull` as a top-level command vs `git checkout -b` for “branch + switch”), **options that change a command’s meaning completely** (e.g. `git reset` with different flags), and **documentation that describes mechanisms instead of goals**.

4. **Optimized for maintainers, not everyday users.** A lot of Git’s power is for people who integrate many branches and rewrite history. The default experience — the commands and terms you see first — is still that same world. So **usability** suffers: simple tasks need many steps; dangerous operations look like normal ones; the “safe subset” was never clearly defined or documented.

---

## What this site is for

We’re not blaming Linus or Junio. They built and maintained something that the world relies on. This page is here so you know **why** Git is the way it is: a two-week origin, a handoff to a long-time maintainer for whom English is a second language, and two decades of evolution without a dedicated “usability and clear language” mandate. The **semantic and usability problems** are real; understanding their background helps. Our job on this site is to give you a **clear, consistent reference** in plain English so you can get your work done despite that history.

See also: [Why Git feels hard](/why-git-feels-hard/) (user-facing problems in simple words) and [“10 things I hate about Git”](https://stevebennett.me/2012/02/24/10-things-i-hate-about-git/) by Steve Bennett.
