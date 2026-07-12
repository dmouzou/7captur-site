# Getting your Mailchimp embed URL

The newsletter form is already built and placed on the homepage, the
`/articles/` listing page, and all 4 article pages, it just points at a
placeholder right now, so nothing will actually submit anywhere until you
swap in your real values.

## Where to find it in Mailchimp

1. Log into Mailchimp → **Audience** (left sidebar) → **Signup forms**.
2. Choose **Embedded forms** (not "Signup form URL" or "Pop-up", the
   *embedded* one is what gives you a raw HTML `<form>` you can lift the
   pieces from).
3. Pick the **Classic** style if asked, it doesn't matter what it looks
   like, since we're using our own styling, not theirs.
4. Mailchimp shows you a block of HTML. You need exactly two things out of
   it:

   **A. The form's `action` URL**, a line that looks like:
   ```
   <form action="https://7captur.us21.list-manage.com/subscribe/post?u=a1b2c3d4e5f6g7h8i9&amp;id=abcd1234ef&amp;f_id=001234" ...>
   ```

   **B. The hidden honeypot field name**, a line that looks like:
   ```
   <input type="text" name="b_a1b2c3d4e5f6g7h8i9_abcd1234ef" tabindex="-1" value="">
   ```
   (This field exists purely to catch bots, real visitors never see or
   fill it in. Mailchimp silently discards any submission where it's
   filled, so it has to keep the exact `u` and `id` values from your form
   in its name for that to work.)

## What to send me

Just paste the full `action="..."` URL and the `name="b_..."` value from
your embedded form code here in chat, and I'll drop them into all 6 files
myself, no need to edit anything by hand. If you'd rather do it yourself,
here's exactly what to replace:

In each of these files:
- `index.html`
- `articles/index.html`
- `articles/why-your-meta-roas-is-lying-to-you/index.html`
- `articles/the-30-day-return-lag-problem/index.html`
- `articles/cogs-adjusted-profitability/index.html`
- `articles/assisted-execution-vs-full-automation/index.html`

Find:
```html
action="https://7CAPTUR_MAILCHIMP_DOMAIN.us1.list-manage.com/subscribe/post?u=REPLACE_U&id=REPLACE_ID&f_id=REPLACE_FID"
```
Replace with your real action URL (the whole thing, `u=`, `id=`, and
`f_id=` all included).

Find:
```html
<input type="text" name="b_REPLACE_U_REPLACE_ID" tabindex="-1" value="">
```
Replace `REPLACE_U` and `REPLACE_ID` with the same `u` and `id` values from
your form's action URL (the honeypot field name has to match exactly, or
Mailchimp will reject legitimate submissions too).

## After it's wired up

The form posts directly to Mailchimp (no server or API key needed on your
end) and opens Mailchimp's own confirmation page in a new tab. If you'd
rather visitors stay on your site with an inline "You're subscribed"
message instead of a new tab, that's a small follow-up build using
Mailchimp's JSONP endpoint, say the word and I'll add it.

## Tracking signups

Mailchimp's own **Audience → Overview** dashboard is the source of truth
for subscriber counts and growth over time, no extra tracking needed for
that. If you're also running Google Analytics / GA4 on the site and want
signups to show up there too (e.g. as a conversion event), let me know and
I'll add a `gtag` event fire on submit, I didn't add one by default since
there's no analytics snippet in the current site files to hook into.
