# Portfolio site — Ravisankar Selvaraju

Plain HTML/CSS/JS, no build step, no framework. Content lives in `data.js`;
layout/rendering in `index.html` / `script.js` / `style.css`.

## Before you publish — placeholders to fill in

Search `data.js` for `[ADD:` to find every placeholder. Currently unresolved:

- **CV download link** (`profile.links.cv`) — currently `#`. Point it at a hosted PDF
  (e.g. commit a CV PDF into `assets/` and link to it, or link to a Drive/Dropbox file).
- **Publication links** — all 4 entries in the `publications` array, and the matching
  links inside individual `entries` (thesis tip-over paper, RoboCup book chapter,
  both Ford papers) — currently `#`.
- **Project media** — no screenshots, plots, or videos are included yet. Each entry's
  `fullDesc` array has an `[ADD: ...]` line noting what kind of image would help.
  To add one, drop the file in `assets/` and either reference it directly in the
  `fullDesc` text or extend `script.js`'s modal renderer to support an image entry
  (the reference site you shared does this with `{ img: '...', caption: '...' }`
  objects mixed into `fullDesc` — same pattern would work here if you want it).
- **Phone number** — deliberately left off the public page for privacy. Add it to
  `profile` in `data.js` and wire it into the sidebar links if you want it public.

Nothing else in `data.js` was invented — every project, date, and bullet is pulled
directly from `CV_master.tex` and the job-search workspace's `achievements.md`.

## Preview locally

No build step needed — any static file server works:

```
python3 -m http.server 8000
```

Then open http://localhost:8000

## Publishing to GitHub Pages

1. Create a **new, empty** GitHub repository named exactly:
   `RavisankarSelvaraju.github.io` (must match your GitHub username exactly).
2. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/RavisankarSelvaraju/RavisankarSelvaraju.github.io.git
   git push -u origin main
   ```
3. GitHub Pages serves a `<username>.github.io` repo automatically from `main` —
   no extra configuration needed. It'll be live at
   `https://RavisankarSelvaraju.github.io/` within a minute or two of the push.

This last step (creating the repo and pushing) wasn't done for you — it publishes
something publicly under your name, so it's your call when to do it.
