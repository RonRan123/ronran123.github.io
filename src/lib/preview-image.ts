import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/**
 * Link-preview URL for a post or project, or null when it sets no `image`.
 * Null tells BaseLayout to omit the preview image, so iMessage and friends
 * show a compact bubble instead of the site-wide default photo.
 *
 * Cropped to 1200×630, the 1.91:1 size link previews are built around, so a
 * portrait photo doesn't get cropped unpredictably by each app.
 */
export async function previewImage(image: ImageMetadata | undefined): Promise<string | null> {
  if (!image) return null;
  const { src } = await getImage({
    src: image,
    width: 1200,
    height: 630,
    fit: 'cover',
    position: 'center',
    format: 'jpg',
  });
  return src;
}
