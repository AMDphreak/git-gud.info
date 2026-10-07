# Git (sensible reference)

A beginner-friendly Git docs site: **common commands first**, workflow diagram, full-width cheat sheet, left-aligned nav. Built with [Starlight](https://starlight.astro.build/).

- **Site:** https://git-gud.info (custom domain; GitHub Pages at https://amdphreak.github.io/git-gud.info/)
- **Local:** `pnpm install` then `pnpm dev`
- **Custom domain ideas:** see [DOMAIN_IDEAS.md](DOMAIN_IDEAS.md)

## Structure

- **Homepage** — Hero, collapsible "Getting started", links to cheat sheet and workflow
- **Workflow** — Mermaid diagram (clone → status/add/commit → push/pull → branch/merge → log/diff)
- **Cheat sheet** — Full-width page (`template: splash`), tables by use (daily, branches, history, one-off)
- **Commands** — One page per command, ordered by frequency (status, add, commit, push, pull, branch, checkout, merge, log, diff, clone)

## Deploy

GitHub Actions deploys to GitHub Pages on push to `main`. Repo must have Pages enabled (Settings → Pages → Source: GitHub Actions). `site` is `https://git-gud.info` with `base: '/'` in `astro.config.mjs`.

## License

GPL-3.0 (copyleft). See [LICENSE](LICENSE).

## GitHub About

After pushing, set the repo description and homepage:

```bash
gh repo edit AMDphreak/git-gud.info --description "Sensible Git reference — common commands first." --homepage "https://git-gud.info"
```
