# Portfolio site — Ravisankar Selvaraju

Plain HTML/CSS/JS, no build step, no framework. Content lives in `data.js`;
layout/rendering in `index.html` / `script.js` / `style.css`.

## Content status

Resolved (2026-09-03):

- **CV download link** — `assets/CV.pdf`, a phone-redacted build of
  `job-search/00_master-docs/CV_master.tex` (the `\cvphone` macro is stripped, so
  the number is absent from the file, not just visually hidden). Rebuild the same
  way if the master CV changes.
- **Publication links** — real DOIs, cross-checked against ORCID
  `0009-0008-9341-8161`, on all 4 `publications` entries and the matching per-project
  links. ORCID also corrected two years (RoboCup chapter 2024, CAN-data journal 2022).
- **Accuracy pass** — DFKI role labelled "Research Assistant"; ERC 2025 framed as
  "contributed to qualification"; `SLAM (GTSAM, coursework)` skill chip qualified.

Still open:

- **Project media** — no screenshots, plots, or videos yet. Ravi to supply from the
  thesis repo / DFKI storage / competition-team material. To add one, drop the file
  in `assets/` and either reference it in the `fullDesc` text or extend `script.js`'s
  modal renderer to support an image entry (e.g. `{ img: '...', caption: '...' }`
  objects mixed into `fullDesc`).
- **Phone number** — deliberately off the public page. Add to `profile` in `data.js`
  and wire into the sidebar links only if you want it public.
- **Site title** — `profile.title` uses the master-CV styling ("Robotics Application
  Engineer | Autonomous Systems"). The job-search workspace uses "Robotics Software
  Engineer | <focus>" in applications; change here if you want them aligned.

Nothing in `data.js` was invented — every project, date, and bullet is pulled
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
