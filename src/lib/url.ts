/**
 * `build.format: 'file'` makes Astro.url.pathname carry a `.html` suffix
 * (`/writing.html`). Every user-facing URL must be the clean, permanent form
 * (`/writing` — see CLAUDE.md rule 3), so canonical tags, og:url and the nav
 * active state all normalize through here.
 */
export function cleanPath(pathname: string): string {
  const path = pathname
    .replace(/\/index\.html$/, '/')
    .replace(/\.html$/, '')
    .replace(/(.)\/+$/, '$1');
  return path === '' ? '/' : path;
}
