import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, getProjects } from '../lib/content';
import { SITE } from '../consts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  // Undated projects are left out: a feed item needs a date to sort and to
  // tell readers it's new.
  const projects = (await getProjects()).filter((project) => project.data.date);

  const items = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      // ?ref=rss attributes feed-reader visits in analytics; the site strips it on load.
      link: `/writing/${post.id}?ref=rss`,
    })),
    ...projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      pubDate: project.data.date!,
      link: `/projects/${project.id}?ref=rss`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    // Match the site's canonical URLs (no trailing slash) — see CLAUDE.md rule 3.
    trailingSlash: false,
    items,
  });
}
