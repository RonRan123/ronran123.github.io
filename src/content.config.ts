import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Astro 8 removes the `z` re-export from 'astro:content'. Bundled with Astro — not a new dep.
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Optional link out (a PDF, a live site). The project's own page is the
        primary destination; this renders as a link within it. */
    externalLink: z.string().optional(),
    /** Label for that link, e.g. "Download the thesis". */
    externalLabel: z.string().optional(),
    date: z.date().optional(),
    /** Surfaced on the home page. Keep to 2-3 across all projects. */
    featured: z.boolean().default(false),
  }),
});

export const collections = { writing, projects };
