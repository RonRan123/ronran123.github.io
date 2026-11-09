import type { APIContext } from 'astro';
import { buildFeed } from '../lib/feed';

/**
 * The same feed for Buttondown's RSS-to-email, so clicks from newsletter
 * emails are attributed to the newsletter, not RSS. Not linked anywhere on
 * the site — point Buttondown at https://www.ronithranjan.com/newsletter.xml.
 */
export const GET = (context: APIContext) => buildFeed(context, 'newsletter');
