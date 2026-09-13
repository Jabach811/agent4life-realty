# Listing updates — Agent4Life

Your workflow only needs to maintain `implementation/data/listings.json` and its local photos. No Agent Image or iHomefinder connection is used by this build.

Run from this workspace:

    python tools/build_site.py

Then publish the `implementation` folder using your normal hosting workflow. The build updates the homepage feature cards, property collection, individual property pages, sitemap, and old-link redirects together. There is no package installation or JavaScript build step.

## File shape

The top-level object contains `updatedAt`, `sourceNote`, and `listings` (an array). `sourceNote` is the visitor-facing freshness note. Update it when your workflow refreshes the collection; the current note accurately describes the September 13 snapshot.

Each listing uses:

- `id`: stable string identifier, normally its listing number.
- `slug`: unique lowercase letters/numbers/hyphens, used in `/listings/your-slug/`. Keep stable when possible.
- `address`, `city`, `state`, `zip`: display strings. Current rendering is California-specific.
- `status`: `active`, `pending`, `sold`, or `showcase`.
- `price`: nonnegative whole-dollar number. For a sold listing this is the sold price.
- `beds`, `sqft`: nonnegative numbers.
- `baths`: display text, for example `3 full + 1 half`.
- `listingOffice`: preserve the actual listing brokerage attribution.
- `images`: array of local paths relative to `implementation`, for example `assets/img/property-226098466.jpg`. First image is the cover; every image appears on the property page. An empty array produces an honest no-photo state.
- `description`: plain text; an empty string uses a short inquiry invitation. HTML is escaped.
- `featured`: true for homepage candidates. Up to three non-sold featured properties are used, with other records filling remaining spaces.
- `sourceDate`: date the record was supplied or verified.
- `tourUrl`: optional HTTPS property-tour URL; empty string omits the button.
- `legacyPath`: optional old property-detail path to forward to the new page.

The initial collection contains 9 active and 5 sold records captured from the old site. This is not a whole-market property search. Original listing-office credit is retained, including the Klemm listing. Stale open-house dates are not displayed.

## Retiring or changing a property

Remove its object from the file and rebuild. Previously generated property routes are replaced by a redirect to the property collection, so visitors do not see stale details. If its ID stays the same but the slug changes, the old slug forwards to the new one. Keep `plans/listing-history.json` between builds; it tracks those previous routes. Keep sold records in the array if you want them to remain browsable.

## Editing the website

- `tools/build_site.py`: shared layout, written interior content, homepage wiring, redirects, property rendering.
- `implementation/site.css`: the shared approved design and responsive layout.
- `implementation/site.js`: menu, property filters, community photo selector, email request preparation.
- `backups/approved-homepage/index.html`: original approved home layout used as the build template. Its accompanying CSS/JS preserve the first version for reference only.

Do not hand-edit generated HTML unless you also update the template/build source; the next build replaces generated HTML. `tools/import_snapshot.py` is the one-time legacy import, not the ongoing update command; rerunning it restores the initial snapshot data.

## Leads and launch

Contact and home-value forms validate the visitor’s input, show a review, and open a prepared email. Copy and save are available as fallbacks. Nothing is sent automatically, and no request is stored in a server or database. Connecting direct lead delivery later requires the receiving service and a privacy notice update.

All captured legacy pages have destinations in `plans/migration-map.json`. `implementation/_redirects` contains permanent redirect rules for compatible hosts; static fallback pages also forward visitors on a basic static server. Configure permanent redirects on the actual host at launch. The sitemap assumes the existing domain `agent4liferealty.com`. Hosting, DNS cutover, and publication were not performed.
