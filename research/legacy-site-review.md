# Legacy site review — agent4liferealty.com

Crawled 2026-09-13. 53 pages, 7.3 MB of HTML. Agent Image "aios" WordPress theme, iHomefinder IDX (MetroList feed), Yoast, accessibility widget injected into every `<title>`.

## What the site is actually made of

**Real, Emad-specific content (keep, rewrite):**
- Home hero copy + tagline, About bio (three versions of it), team of five with headshots, 8 testimonials, contact details, community intro paragraphs for 6 cities, 9 active listings + 5 sold via IDX.

**Agent Image stock content (drop or collapse):**
- 18 "resource" pages (buyer ×6, seller ×6, finance ×6) — generic template text, stock photos, identical on hundreds of Agent Image sites.
- 3 blog posts — stock articles, stock photos, no author.
- Latest News — syndicated national commercial-real-estate headlines. Irrelevant to a Tracy home seller.
- 3 demo listings in Oak Lawn, TX — leftover from the theme demo.
- 4 hero slideshow photos — stock luxury homes, none in California.
- Social Media page — stale embeds.
- Sitemap page, Privacy Policy boilerplate.

## Redundancies (the reason for this rebuild)

1. **The bio appears three times.** `/about/`, `/agents/emad-basma/`, and `/team/` each carry a full-length version of the same bio with slightly different wording. One says "top 1%", another "top 2%".
2. **Landing pages that are just their first child.** `/buyers/` = `/buyer/deciding-to-buy/`, `/sellers/` = `/seller/deciding-to-sell/`, `/financing/` = `/finance/getting-started/`. Same title, same word count, same page.
3. **Two home-valuation pages.** `/what-is-my-home-worth/` and `/get-a-free-home-valuation/` — same form, different wrapper copy.
4. **Four lead forms that all go to the same inbox.** Home worth, dream home, relocate, contact. Each with a 120-word TCPA consent block.
5. **Community pages are 2,500–3,000 words each,** most of it IDX search widgets repeated five times per page (5 forms per community page).
6. **Every page has the same footer form + newsletter form** on top of the page's own form.
7. **Nav has 25+ links across 3 levels** for a five-person brokerage in one town.

## Page-by-page disposition

| Legacy URL | Words | Decision |
|---|---|---|
| `/` | 828 | Rebuild. Keep: tagline, featured listings, short bio, communities, testimonials. |
| `/about/` | 707 | Merge into one `/about/` (Emad + the story of Agent4Life). |
| `/agents/emad-basma/` | 738 | Fold into `/about/`. |
| `/team/` | 866 | Keep as `/team/` — the 4 other agents get cards, not pages. |
| `/agents/sonya-jones/`, `/nizar-basma/`, `/jamese-johnson/`, `/rosendo-serna/` | ~650 | Drop as separate pages; short bios live on `/team/`. |
| `/buyers/` + 6 `/buyer/*` | ~4,400 | Collapse to one `/buyers/` page written in Emad's voice. |
| `/sellers/` + 6 `/seller/*` | ~4,700 | Collapse to one `/sellers/` — this is his core business, gets the most care. |
| `/financing/` + 6 `/finance/*` | ~4,100 | Drop. Not his service. One paragraph + lender referral line on `/buyers/`. |
| `/what-is-my-home-worth/`, `/get-a-free-home-valuation/` | 1,164 | One `/home-value/` page, one form. |
| `/find-my-dream-home/`, `/help-me-relocate/` | 1,064 | Drop. `/contact/` form gets an "I'm looking to…" choice instead. |
| `/communities/` + 6 `/community/*` | ~16,000 | Keep `/communities/` with 6 sections. Strip repeated IDX widgets; one search link each. |
| `/properties/`, `/sold/`, `/search/` | ~4,400 | `/listings/` (active + sold). IDX provider decision pending after leaving Agent Image. |
| `/testimonials/` | 815 | Keep `/testimonials/`; drop the 3 empty entries. |
| `/latest-news/`, 3 `/blog/*` | ~3,900 | Drop. |
| `/social-media/` | 415 | Drop; social links in footer + a truck strip on home. |
| `/contact/` | 508 | Keep. One form. |
| `/sitemap/`, `/privacy-policy/` | | Sitemap drop (XML only). Privacy: keep short version. |
| `/listings/*-tx/`, `/listing-report/*` | | Drop (demo data). |

Result: 53 pages → 11. Nav: Listings · Sellers · Buyers · Communities · About · Team · Contact, plus "What's my home worth" as the button.

## Technical notes from the crawl
- Images live on `cdn.agentimagehosting.com` — all 41 downloaded to `reference/legacy-site/assets/`.
- Team headshots are only 350×500. Emad's about photo is 800×800. YouTube avatar (1188×1188, grey suit, red tie) is the best portrait we have.
- Hero photos are all stock. Real property photos exist in the IG/YouTube stills (1583 Roger Dr, 8336 Park Pl, 3242 Shrute Dr, the $3.65M Waterwell Way house).
- Forms post to Agent Image; nothing to reuse. New forms: preview-only until a form handler is chosen (same as Klemm).
- `1533 Vinewood Way` on the sold page lists "Klemm Real Estate" as listing office — small world.
