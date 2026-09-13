# Agent4Life — complete local replacement

Preview: http://127.0.0.1:8778/

Serve from the workspace with:

    python -m http.server 8778 --bind 127.0.0.1 --directory implementation

11 main pages: home, properties, sellers, buyers, communities, Emad, team, testimonials, home valuation, contact, and privacy. The collection includes 14 individual property pages, filters, original property photos, and 59 old-link destinations. All main pages share the approved homepage’s design.

Updates: edit `data/listings.json`, then run `python tools/build_site.py` from the workspace root. See `../LISTING-WORKFLOW.md` for the field contract, removal behavior, and deployment notes.

Requests prepare an email for the visitor to review and send in their own email app. They do not post to Agent Image or a server. Copy/save fallbacks are provided.

This is a local build, not a live cutover. The original source files and approved first homepage are preserved.
