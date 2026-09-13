# Agent4Life V2 plan

Goal: replace the 53-page Agent Image site with an 11-page static site that reads like Emad's truck — big, plain, certain — and keeps the A4L logo untouched.

## Order of work
1. Research (done): crawl, inventory, asset download, persona, brand. See `research/`.
2. Homepage mock set — three options (A/B/C) in one file with real content and real photos. Joel picks. Nothing else gets styled until then.
3. Wire the winner into `implementation/` as `index.html` + one shared `site.css` + minimal `site.js`.
4. Interior pages one at a time, in this order: sellers → home-value → listings → about → team → testimonials → buyers → communities → contact → privacy. Each page: build, open at 320 / 390 / 1280, fix overflow, then next.
5. Forms are preview-only (submit shows a "this would send…" summary) until a handler is chosen. Field contract goes in `research/form-contracts.json` once set.
6. IDX: leaving Agent Image means leaving iHomefinder. Options for `/listings/`: (a) new IDX provider embed, (b) hand-maintained listing cards from MLS data, (c) link out to Zillow/MetroList. Needs Emad. Plan for (b) with the 9 current cards, swap later.
7. Audit pass (web-quality-audit), then hosting/DNS plan like Klemm.

## Rules carried over from Klemm V2
- One stylesheet. No per-page CSS files.
- Real content only. No lorem, no stock heroes.
- Every legacy URL in `route-map.json` gets a redirect at launch.
- No publication without Joel.
