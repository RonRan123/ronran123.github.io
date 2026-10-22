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

/**
 * Google Analytics 4. The measurement ID is public by design (it ships in
 * every page's HTML), so it's fine to commit.
 *
 * Tracking only runs on the live hostname — never on `npm run dev`,
 * `npm run preview`, or a fork. Opt a browser out with `?notrack`
 * (undo with `?track`), or the button on /privacy.
 */
export const ANALYTICS = {
  measurementId: 'G-QHPW59KN01',
  host: 'www.ronithranjan.com',

  /**
   * Source codes for links you share: append `?ref=<code>` to any URL,
   * e.g. ronithranjan.com/writing/pst-thesis?ref=linkedin
   *
   * The code becomes GA4's Source / Medium, then is stripped from the
   * address bar so a copied link doesn't carry it. Add a line here for a
   * new channel; an unlisted code still records as source=<code>,
   * medium=other. Full utm_* links work too and take precedence.
   */
  refCodes: {
    newsletter: { source: 'newsletter', medium: 'email' },
    email: { source: 'email-signature', medium: 'email' },
    personal: { source: 'personal', medium: 'share' },
    linkedin: { source: 'linkedin', medium: 'social' },
    resume: { source: 'resume', medium: 'document' },
    rss: { source: 'rss', medium: 'feed' },
  },
} as const;
