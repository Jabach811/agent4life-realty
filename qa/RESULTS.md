# Local verification — September 13, 2026

Microsoft Edge via Playwright, widths 1280 / 390 / 320, height 900.

- Visually inspected full-page screenshots and separate first-screen screenshots at all three widths.
- No horizontal overflow at the three widths.
- All page images decoded successfully (lazy-loaded images explicitly loaded for the screenshot pass).
- All three property dialogs opened with the correct address and closed with Escape.
- All six community buttons selected their corresponding community.
- Mobile menu opened, closed with Escape, and closed after navigation.
- All section anchor targets exist.
- No browser JavaScript errors.
- Reduced-motion emulation disables the hero animation.
- Reviewed semantic headings, labeled controls, focus styles, image descriptions and dimensions, and direct contact actions against web-design-guidelines.

QA scripts: check.cjs, hero.cjs. Screenshots: home-[width].png and hero-[width].png.

First run reached a directory index from a different local server, so it was discarded. Subsequent checks used the explicit implementation-directory server on 8778. Initial image checks ran before lazy images loaded; corrected checks decode the images first and all pass.

No contact messages or forms sent. No public deployment. No live inventory integration.
