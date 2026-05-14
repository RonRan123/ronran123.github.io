# AI Coding Guidelines for ronran123.github.io

## Project Overview
Jekyll personal website for Ronith Ranjan, hosted on GitHub Pages at www.ronithranjan.com.
Uses custom layouts (no gem theme), jekyll-feed and jekyll-seo-tag plugins.

## Architecture
- **Layouts**: `_layouts/default.html` (all pages), `_layouts/post.html` (blog posts)
- **Includes**: `_includes/subscribe-form.html` — MailerLite embed, included ONLY in blog.html
- **Pages**: `index.html` (About/home), `blog.html` (/blog/), `projects.html` (/projects/)
- **Posts**: Markdown files in `_posts/` with filename format `YYYY-MM-DD-slug.md`
- **Styling**: All CSS in `styles/style.css` — single file, no Sass
- **Assets**: Images in `images/`, PDFs in `media/`

## Key Conventions
- All pages must have front matter with `layout:`, `title:`, `description:`, and `permalink:`
- `title` and `description` in front matter are consumed by `{% seo %}` in default.html
- JavaScript is forbidden site-wide EXCEPT inside `_includes/subscribe-form.html`
- Resume and thesis PDFs are linked directly — no wrapper HTML pages
- CSS design tokens are in `:root` — use variables, not hardcoded values
- Accent color: `#1a56db` — only for links/hovers, not decorative use
- Body font: Georgia serif (`--font-body`); UI font: system-ui (`--font-ui`)

## Adding a Blog Post
1. Create `_posts/YYYY-MM-DD-your-slug.md`
2. Front matter must include: `layout: post`, `title:`, `date:`, `description:`
3. Write body in Markdown — no HTML needed
4. Commit and push to main — GitHub Pages builds automatically in ~60 seconds

## Adding a Project
- Add a new `<article class="project-entry">` block in `projects.html`
- Follow the existing entry format (h2 title, .project-meta, description p, optional link p)

## Local Development
```bash
bundle install      # first time, or after Gemfile changes
bundle exec jekyll serve --livereload
```
Visit http://localhost:4000

## Plugins in Use
- `jekyll-feed` — auto-generates /feed.xml from _posts/
- `jekyll-seo-tag` — auto-generates <title>, <meta description>, Open Graph from front matter
Both are on the GitHub Pages whitelist; no extra configuration needed.

## MailerLite Setup
Edit `_includes/subscribe-form.html` and replace the two REPLACE_WITH_YOUR_* placeholders
with your actual MailerLite account ID and form ID from app.mailerlite.com > Forms > Get the code.
