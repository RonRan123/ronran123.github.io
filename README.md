# ronithranjan.com

Personal site — [www.ronithranjan.com](https://www.ronithranjan.com).
Astro, plain CSS, Markdown content, deployed to GitHub Pages via GitHub Actions.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
npm run check    # astro check (types)
```

## Adding a post

Create `src/content/writing/my-post.md`:

```yaml
---
title: "Title"
date: 2026-01-15
description: "One line, used in the index, RSS and social previews."
draft: false
---
```

Write Markdown below the front matter. Push to `main` — Actions builds and deploys.
The URL is the filename: `my-post.md` → `/writing/my-post`.

## Adding a project

Create `src/content/projects/my-project.md` with `title`, `description`, `link`,
optional `date`, and `featured: true` to surface it on the home page (keep to 2–3).

## Analytics

Google Analytics 4, configured in `ANALYTICS` in `src/consts.ts` and loaded by
`src/components/Analytics.astro`. It only runs on www.ronithranjan.com, never on dev or preview.

**Tag links you share** with `?ref=<code>`. The site reports it to GA as Source / Medium, then
removes it from the address bar so a copied link doesn't carry it.

| Code                | Use for                               |
| ------------------- | ------------------------------------- |
| `?ref=newsletter`   | Buttondown emails                     |
| `?ref=email`        | the link in your email signature      |
| `?ref=personal`     | links you send one-off (email, texts) |
| `?ref=linkedin`     | LinkedIn posts, DMs, profile          |
| `?ref=resume`       | the link on your resume PDF           |
| `?ref=rss`          | added automatically to the RSS feed   |

Add a code by adding a line to `refCodes`. Full `utm_*` links also work.

**Exclude your own visits:** open `ronithranjan.com/?notrack` once in each browser and device
(`?track` undoes it), or use the button on `/privacy`. It covers every `*.ronithranjan.com` site
using this snippet, and resets if you clear site data.

**Internal clicks:** links carrying `data-track="<label>"` send an `internal_link_click` event with
that label. Add the attribute to any new list of links.

## Layout

```
public/          static assets served as-is — CNAME, resume.pdf, images, /blog redirect
src/
  components/    Nav, Footer, Subscribe, Analytics
  content/       writing/ and projects/ Markdown
  layouts/       BaseLayout (head, meta, OG)
  lib/           content helpers (sorting, date formatting)
  pages/         routes
  styles/        tokens.css — the entire palette/scale lives here
  consts.ts      site identity, links, newsletter endpoint
```

## Notes

- `public/CNAME` must keep the `www.` subdomain and match `site` in `astro.config.mjs`.
- `public/resume.pdf` is canonical; `public/media/Ronith-Ranjan-Resume.pdf` is a duplicate
  kept so older links in sent emails continue to resolve. Update both together.
- The pre-Astro Jekyll site is tagged `pre-astro-jekyll`.
