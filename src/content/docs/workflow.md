---
title: Git workflow
description: How the most common commands fit together — from clone to push.
---

This diagram puts the **most common commands** near the start of the flow. You’ll use these every day; the rest are for specific situations.

```mermaid
flowchart LR
  subgraph start[" Start "]
    A[clone]
  end
  subgraph daily[" Daily loop "]
    B[status]
    C[add]
    D[commit]
    E[push]
    F[pull]
  end
  subgraph branches[" Branches "]
    G[branch]
    H[checkout / switch]
    I[merge]
  end
  subgraph inspect[" Inspect "]
    J[log]
    K[diff]
  end

  A --> B
  B --> C --> D --> E
  E <--> F
  B --> G --> H --> I --> D
  B --> J
  B --> K
```

## What each block does

| Block | Commands | When |
|-------|----------|------|
| **Start** | `clone` | Get a repo on your machine once. |
| **Daily loop** | `status` → `add` → `commit` → `push` / `pull` | See changes, stage them, save a snapshot, sync with remote. |
| **Branches** | `branch`, `checkout`/`switch`, `merge` | Work on a line of work, switch to it, bring it back. |
| **Inspect** | `log`, `diff` | See history and what changed. |

Go to the [Cheat sheet](/cheat-sheet/) for a full-width reference, or use the sidebar to jump to each command.
