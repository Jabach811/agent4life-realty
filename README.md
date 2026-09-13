# Emad Basma / Agent4Life Realty — site rebuild

Same workflow as Klemm V2. Research first, decisions written down, one shared stylesheet, one page at a time, browser-checked at 320/390/1280 before moving on. Nothing publishes without Joel.

- `reference/legacy-site/pages/` — frozen HTML snapshot of all 53 live pages (agent4liferealty.com, crawled 2026-09-13)
- `reference/legacy-site/assets/` — every image the live site serves (41 files, incl. the A4L logo)
- `reference/instagram/`, `reference/youtube/` — stills, captions, video list, channel avatar
- `research/` — page inventory, legacy review (redundancies), brand + persona notes
- `plans/` — V2 plan, route map, dated decisions
- `implementation/` — the new site. Preview: `python -m http.server 8767 --bind 127.0.0.1` from `implementation/`
