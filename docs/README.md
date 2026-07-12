# 7Captur, this batch

## The how-it-works.html "generated report" cards

Rebuilt the card layout from a fixed-column CSS grid to a wrapping flexbox
(`display:flex;flex-wrap:wrap`). The old grid needed an exact breakpoint
to know when to stack, and kept re-breaking at in-between viewport widths.
The new layout has no breakpoint to get wrong; the impact figures simply
wrap onto their own line the moment they don't fit, at any width. Also
gave the card container more padding (32px to 36-32px) for breathing room.

## Pricing card spend-tier bars

Those little bars weren't just unnecessary, they were actually broken:
the CSS expected a `.tiers-animated` class to fill them in, and nothing
in the page's JS ever added it, so they always rendered empty. Replaced
with a real interactive piece: drag the slider to your monthly ad spend
and the matching tier highlights with a "Your tier" tag.

## Pricing card buttons and the theme toggle

Both were still on the old design system's 8px-radius default while
every other button had already moved to the glass pill treatment. Now
pill-shaped and glass-styled to match, including the theme toggle,
which is now a proper frosted circle instead of a plain bordered square.

## About page, "A good fit looks like"

Found the actual bug: a leftover `padding: 0 !important` rule (originally
meant to remove a border) was also wiping the section's padding entirely,
so the text sat flush against the card edges. Removed the padding
override, kept the borderless look.

## Articles: full Liquid Glass, plus 2 more (6 total)

You were right, the article pages only had the base glass variables, not
the actual extension work (footer, buttons, card surfaces, ambient
blobs) that every other page has. Brought in the complete, proven glass
block across all 6 article pages and the listing page, plus added
glass-specific treatment for the article-only elements (card grid,
callout boxes, stat rows) that don't exist anywhere else on the site.

Two new articles, matching the voice and sourcing of the first four:

- **Why Real-Time Ad Optimization Is a Trap for E-Commerce Brands**,
  on why weekly beats real-time when the underlying data (COGS, returns)
  isn't real-time either.
- **Attribution Double-Counting: Why Your Meta and Klaviyo Revenue Never
  Adds Up**, on how both platforms claim credit for the same orders and
  what deduplicating against real store data actually requires.

Updated the prev/next links on the original 4 articles so the whole set
reads as one 6-article cycle, not two disconnected loops.

## Video of the Week: clarified

Confirmed the split is exactly as intended: full playable video on
`/articles/`, link-only teaser to YouTube on the homepage, no embed
there. Since you mentioned uploading the file into the GitHub folder
yourself rather than going through YouTube, extended `video.json` to
support either path, a YouTube ID or a self-hosted file living in
`assets/data/media/`. Full details in `docs/VIDEO-SETUP.md`. The
homepage teaser adapts its link and label automatically depending on
which one you use.

## Also fixed while in there

- Newsletter note wrapping got an extra `flex-basis:100%` safeguard on
  top of the existing `flex-wrap`, belt and suspenders.
- Checked the "Get your report" nav button contrast directly: it's
  already correct in the current source (unconditional dark text, not
  just in dark mode). If it's still washed out after you deploy this,
  that's a real signal worth a fresh screenshot.

## Em dashes

Confirmed clean sitewide again after this round of edits, including the
2 new articles and these docs. Zero remain.
