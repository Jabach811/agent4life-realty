# Full replacement verification — September 13, 2026

Passed in Microsoft Edge via Playwright:

- 11 main routes at 1280, 390, and 320 pixels: 33 route/size checks, screenshots saved, no horizontal overflow, all images decoded.
- 14 individual property pages at each of those widths: correct addresses and no horizontal overflow.
- Homepage additionally checked at 768, 820, and 1024 pixels.
- Status/city filtering, price filtering, no-results state, and filter reset.
- Contact and valuation forms: native validation, review text, encoded email draft, review invalidation after edits. No email sent.
- Property inquiry carries the address into contact form; mobile navigation opens and closes with Escape.
- 59 captured old routes/property URLs reach their mapped replacements using local fallback redirects.
- No browser JavaScript errors. Static local links resolve.
- Isolated listing-update fixture: slug change redirects, safe text escaping, removal redirects, sitemap removal, and empty collection build.

Source: 9 active and 5 sold records from September 13 saved source, with all 14 photos recovered. Dates and original listing-office credit are displayed. No claim of live inventory.

Artifacts: `full-site/results.json`, `full-site/*.png`, `full-site.cjs`, `update-fixture.py`, `tablet.cjs`.

Manual visual review: homepage and interior page captures, including seller page, property collection, contact, valuation, buyer, team, about, community, testimonial and privacy layouts. Privacy headline shortened after spotting an awkward phone wrap.

Limits: automated email delivery is not configured; requests use the visitor's email application with copy/save fallbacks. Permanent server redirects require host support/configuration; local fallback pages were tested. Hosting/DNS and public cutover were not performed.
