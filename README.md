# SHREE BIJAY AUTOMOBILES — Website

A lightweight static business website for **SHREE BIJAY AUTOMOBILES**, a partnership enterprise based in
Pakur, Jharkhand, engaged in motorcycle trading, sales, maintenance and repair activities.

Built with HTML5, CSS3 and a small amount of vanilla JavaScript. No frameworks, no build step, no backend,
no database, no API keys.

---

## Project structure

```
/
├── index.html          Homepage — hero, quick facts, about, services, partners, locations
├── about.html          Enterprise overview, business profile, partners
├── services.html       Activity areas and NIC classification
├── business.html       Registration details, GST, Udyam, NIC, municipal trade licence
├── locations.html      Principal + additional places of business, map links
├── contact.html        Phone, email, address, direction link
├── privacy.html        Privacy Policy
├── terms.html          Terms & Conditions
├── 404.html            Not-found page
├── robots.txt
├── css/
│   └── style.css       Single stylesheet (design tokens, layout, responsive rules)
├── js/
│   └── script.js       Mobile nav, active nav state, back-to-top
├── assets/
│   ├── logo.svg        Original logo (light backgrounds / desktop header)
│   ├── logo-light.svg  Original logo (dark backgrounds / footer)
│   └── favicon.svg     Emblem-only favicon
└── README.md
```

## Previewing locally

Open `index.html` directly in a browser — everything works from the file system.

For a more realistic preview (recommended, matches GitHub Pages behaviour):

```bash
# from the project root
python3 -m http.server 8000
# then visit http://localhost:8000/
```

Any static server works, for example `npx serve .` or `php -S localhost:8000`.

## Deploying to GitHub Pages

1. Push this project to a GitHub repository (the files must be at the repository root).
2. In the repository: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the branch (for example `main`) and the folder `/ (root)`, then save.
5. The site becomes available at `https://<username>.github.io/<repository>/`.

All paths in the site are **relative** (`css/style.css`, `assets/logo.svg`, `about.html`), so the site works
correctly both at a repository sub-path and at a domain root. No absolute paths such as `/css/style.css`
are used.

## Design notes

- **Palette:** deep navy/charcoal (`#08131f`, `#0d2135`), white and steel greys, with a single restrained
  amber accent (`#d98a2b`). The site is not predominantly black.
- **Typography:** system font stack — no web font downloads.
- **Layout:** mobile-first, with breakpoints at 360px, 600px, 860px, 900px and 1024px. Verified for the
  published widths of 320, 375, 390, 412, 768, 1024, 1280 and 1440px.
- **Business data tables:** definition lists that stack into single-column blocks on small screens and
  become label/value rows from 600px upward. No horizontally scrolling tables.
- **Accessibility:** semantic landmarks, one `h1` per page, skip link, visible focus outlines, ARIA states
  on the navigation toggle, `aria-current` on the active nav item, decorative SVG marked `aria-hidden`,
  reduced-motion support and a print stylesheet.
- **JavaScript:** optional enhancement only. Navigation, links and content are fully usable with
  JavaScript disabled. The stylesheet shows the navigation by default and only becomes collapsible when
  the inline `document.documentElement.className += " js"` switch is set, so there is no
  "menu disappears without JavaScript" failure mode.

## Verified behaviour

Checked in Chromium at 320, 375, 390, 412, 768, 1024, 1280 and 1440 CSS pixels across all nine pages:

- No horizontal overflow and no clipped or overlapping content at any width (0px excess scroll width).
- No console errors, no failed requests, no broken internal links or assets.
- Every page has one `h1`, no heading-level skips, a unique `<title>` and a meta description.
- Text contrast meets WCAG AA for normal text (the amber accent used for small text is `#8f5a10`,
  5.3:1 or better on all surfaces it is used on; the brighter amber is used only for fills, borders and icons).
- Mobile navigation opens, closes on selection, closes on Escape, closes on outside click, and resets
  when crossing the desktop breakpoint.
- Deployment was exercised from a simulated repository sub-path (`/REPO-NAME/`) with all pages, styles,
  scripts and assets resolving correctly over relative paths.

## Logo

The logo in `assets/` is an original design created for this website. It combines a rounded badge with an
abstract spoked wheel/axle mark plus a rule that suggests a road line, together with a two-line wordmark
("SHREE BIJAY" / "AUTOMOBILES"). It contains no government emblem and no third-party manufacturer mark.
The favicon reuses only the emblem portion of the mark.

## Content policy

All business information on this website is reproduced from the enterprise's own registration documents:

- Legal name, trade name and constitution
- Udyam registration number and classification (Small, 2025–26)
- GSTIN, GST registration type and GST dates
- Registration and commencement dates
- Principal and additional places of business
- Partner names and designations
- NIC classification codes and descriptions
- Municipal trade licence details, shown exactly as documented (the licence shows a validity date of
  20 May 2022 and is deliberately **not** described as current, renewed or active)

No founding story, employee count, revenue, customer count, awards, certifications, brand partnerships,
dealership status, pricing, opening hours or social media accounts have been invented.

The website includes no analytics, no tracking, no cookies set by the site itself and no contact form,
and the Privacy Policy states this accordingly.

## Disclaimer

This website is an informational presentation of business details. It is not a government portal and does
not represent any government department or authority. Registration details shown are business registration
information.
