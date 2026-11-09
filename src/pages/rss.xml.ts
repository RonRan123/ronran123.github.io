import type { APIContext } from 'astro';
import { buildFeed } from '../lib/feed';

/** The public feed, for feed readers. Links carry ?ref=rss. */
export const GET = (context: APIContext) => buildFeed(context, 'rss');
