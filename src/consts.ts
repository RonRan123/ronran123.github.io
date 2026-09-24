/**
 * Site-wide constants. Single source of truth for identity, links and
 * the newsletter endpoint — so none of these are duplicated in templates.
 */
export const SITE = {
  title: 'Ronith Ranjan',
  description: 'Writing about technology, economics, and ideas at the intersection of both.',
  email: 'ronith.ranjan123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ronith-ranjan/',
  github: 'https://github.com/RonRan123',

  /**
   * Buttondown newsletter endpoint.
   *
   * SETUP (one time, Ronith): create a free account at buttondown.com,
   * then replace `USERNAME` below with your Buttondown username.
   * The form is a plain HTML POST — no script tag, no dependency.
   * Swapping providers later means changing this one URL.
   */
  newsletterAction: 'https://buttondown.com/api/emails/embed-subscribe/USERNAME',
  newsletterConfigured: false,
} as const;
