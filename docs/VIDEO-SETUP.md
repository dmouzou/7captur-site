# Video of the Week

Where it shows up:

- **`/articles/`**: the full thing, playable inline, title and
  description.
- **Homepage**: a single-line link only ("Video of the week: [title],
  Watch..."), no embed, so it doesn't crowd the page. It sends people to
  either YouTube directly or straight to the playable video on the
  articles page, whichever applies.

Both stay completely hidden until `assets/data/video.json` has a real
title in it.

## Two ways to supply the video

**Option A: a YouTube link**

```json
{
  "title": "How True ROAS Changes Your Monday Budget Call",
  "source": "youtube",
  "youtubeId": "dQw4w9WgXcQ",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "filePath": "",
  "poster": "",
  "description": "A quick walkthrough of the true ROAS calculation using a real campaign.",
  "updatedAt": "2026-07-11"
}
```

`youtubeId` is just the part of the URL after `v=`. The homepage teaser
links straight to `url`; the articles page embeds it inline.

**Option B: a video file you upload directly into the repo**

Since you mentioned uploading the file into the GitHub folder yourself,
this path skips YouTube entirely:

```json
{
  "title": "How True ROAS Changes Your Monday Budget Call",
  "source": "file",
  "youtubeId": "",
  "url": "",
  "filePath": "/assets/data/media/video-of-the-week.mp4",
  "poster": "/assets/data/media/video-of-the-week-poster.jpg",
  "description": "A quick walkthrough of the true ROAS calculation using a real campaign.",
  "updatedAt": "2026-07-11"
}
```

1. Drop the video file into `assets/data/media/` (`.mp4` is the safest
   format for browser playback; keep it reasonably compressed, GitHub
   Pages doesn't do any video processing for you).
2. Point `filePath` at it.
3. `poster` is optional, a still image shown before the visitor presses
   play. Skip it (leave as `""`) and the browser just shows the first
   frame instead.
4. The homepage teaser will link to `/articles/#video-of-the-week` since
   there's no YouTube page to send people to directly.

Only fill in the fields for whichever option you're using; leave the
other one's fields as empty strings. `source` is what the widget actually
checks, so that's the one field that has to be set correctly either way.
