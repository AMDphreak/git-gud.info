---
title: What is Git?
description: A short answer in plain words.
---

**Git is a tool that saves snapshots of your project.**

You use it when you have a folder of files (code, text, anything).  
You want to save the state of that folder at different times.  
Git does that. Each save is called a **commit**.

---

**Why use it?**

- You can go back to an older version if something breaks.
- You can try an idea in a **branch** and keep the main folder safe.
- You can share the same project with others and combine everyone’s changes.

---

**What you do most of the time:**

1. Change some files.
2. Tell Git which changes to include (that’s **add**).
3. Save a snapshot with a short message (**commit**).
4. Send your saves to a place on the internet or get others’ saves (**push** and **pull**).

That’s the main loop. The rest of this site explains each step in simple words.

---

**Why does Git feel confusing?**  
Git has a lot of concepts and inconsistent commands. The official docs are written for experts. So it’s normal to find it hard. We wrote [Why Git feels hard](/why-git-feels-hard/) to explain that honestly — and we owe a big thank you to **[Steve Bennett’s “10 things I hate about Git”](https://stevebennett.me/2012/02/24/10-things-i-hate-about-git/)** for putting these problems into words. This site exists to give you a clear, simple reference despite that.

---

**Alternatives to Git.**  
Git is not the only good option. **[Fossil](https://fossil-scm.org/)** and **[Mercurial](https://www.mercurial-scm.org/)** are sane alternatives with added benefits: Fossil bundles version control with a built-in wiki and tickets in one tool; Mercurial offers clearer, more consistent commands and an easier learning curve. We compare them to Git in the docs so you can choose what fits:

- [Git vs Fossil](/alternatives/fossil/) — when an all-in-one, single-file tool helps
- [Git vs Mercurial](/alternatives/mercurial/) — when you want simpler, predictable commands

If you’re new to version control or find Git’s design frustrating, those pages are a good place to look. This site still focuses on Git because it’s what most people encounter first.

---

Next: [Getting started](/getting-started/) — install Git and make your first save.
