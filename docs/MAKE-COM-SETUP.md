# "Today's Insight": updating insight.json

Since Make.com's "GitHub, Update a file" module isn't cooperating, this
guide covers the manual way, which is completely fine and only takes a
minute or two per post. Make.com stays useful for other things later; it
just isn't the delivery mechanism for this specific file right now.

## The file

`assets/data/insight.json`. Whatever is in it is what shows up in the
"Today's Insight" card on the homepage and the articles page. Edit it
directly in GitHub (Code tab, open the file, pencil icon, edit, commit to
`main`) or edit it locally and push. Either way, GitHub Pages rebuilds
automatically, usually live within a minute.

## The basic fields

```json
{
  "text": "The text of the post, or a short excerpt of it.",
  "url": "https://www.linkedin.com/feed/update/urn:li:activity:XXXXXXXXXXXXXXXXXXX/",
  "postedAt": "2026-07-15T09:00:00Z",
  "updatedAt": "2026-07-15T09:05:00Z",
  "postId": "2026-07-15",
  "hashtags": ["ROAS", "Ecommerce"]
}
```

- `text`, `url`, `postedAt`, and `updatedAt` are the ones that actually
  show up on the site.
- `postId` and `hashtags` aren't rendered right now; keep them if you want
  your own record, or drop them, doesn't matter either way.
- `url`: grab this from LinkedIn by clicking the timestamp on your post
  ("3h", "1d", etc.) and copying the link, or the three-dot menu on the
  post → "Copy link to post."

## Adding an image or a PDF

Add a `media` object. Three shapes it can take:

**No attachment (default):**
```json
"media": { "type": "none", "url": "", "alt": "" }
```
(or just leave the whole `media` key out entirely, same effect)

**A single image:**
```json
"media": {
  "type": "image",
  "url": "/assets/data/media/2026-07-15.jpg",
  "alt": "Chart showing true ROAS vs reported ROAS across 12 campaigns"
}
```

**A PDF (LinkedIn "document" post):**
```json
"media": {
  "type": "pdf",
  "url": "/assets/data/media/2026-07-15.pdf",
  "alt": ""
}
```
For PDFs, the widget renders the actual pages with Prev/Next buttons and a
page counter, the same swipe-through-pages experience LinkedIn gives you,
just click-through instead of swipe. It reads the real PDF page by page,
there's no need to pre-convert anything to images.

Two ready-to-copy templates are sitting right next to this file:
`insight.example-image.json` and `insight.example-pdf.json`.

## Getting the file onto the site

The image or PDF itself has to live somewhere the widget can fetch it
from. Simplest path:

1. Download the image or PDF from your own LinkedIn post (three-dot menu
   on the post, or on an image, right-click → save; for documents, the
   post itself usually has a download option since you're the author).
2. Drop it into `assets/data/media/` in the repo, named however you like
   (`2026-07-15.pdf` is a fine convention, dated).
3. Point `media.url` at it: `/assets/data/media/2026-07-15.pdf`.
4. Commit. That's it, no separate hosting needed.

## Full example, start to finish

```json
{
  "text": "Most \"profitable\" Meta campaigns aren't. Reported ROAS ignores COGS, returns, and payment fees.",
  "url": "https://www.linkedin.com/feed/update/urn:li:activity:7123456789012345678/",
  "postedAt": "2026-07-15T09:00:00Z",
  "updatedAt": "2026-07-15T09:05:00Z",
  "postId": "2026-07-15",
  "hashtags": ["ROAS", "Ecommerce"],
  "media": {
    "type": "pdf",
    "url": "/assets/data/media/2026-07-15.pdf",
    "alt": ""
  }
}
```

## If you want Make.com back in the loop later

The manual step above (editing one file, once a day) is genuinely fine
long-term, plenty of small teams run their whole site this way. But if you
want to revisit automating it: the "GitHub, Update a file" module has a
handful of known trip-ups worth checking before giving up on it entirely,
most commonly the branch name not matching (`main` vs `master`), the file
path missing the leading folder, or the connection's token not having
`Contents: Read and write` scoped to this specific repo. If you send me
the exact error Make.com throws, I can usually pinpoint which one it is.

The rest of the original plan (a Google Form as your "drop box" for the
day's post text and URL, feeding a Make.com scenario, once a day) still
holds up fine as the trigger side, it's specifically the GitHub write step
that needs troubleshooting.
