# Allegheny County Jr. High Wrestling Championship

Official site for the Allegheny County Junior High Wrestling Championship,
hosted every January at Shaler Area High School. Plain static HTML/CSS,
deployed via GitHub Pages, custom domain `accjuniorhigh.com` (see `CNAME`).

## Structure

- `index.html` — home page (hero, about/format, schedule, directors, sponsor CTA)
- `schools.html` — participating schools (placeholder until 2027 list is confirmed)
- `results.html` — 2024 championship finals results
- `sponsors.html` — sponsorship tiers + mail-in instructions
- `styles.css` — shared stylesheet (navy & gold theme)

## Deploying

Push to `main` — GitHub Pages redeploys automatically within a minute or two.
No build step.

## TODO

- [ ] Drop in new ACC logo (navy/gold) once finalized, replace the `ACC` badge
      placeholder in nav/footer across all pages.
- [ ] Confirm weigh-in / wrestling start times for Jan 8–9, 2027 and replace
      the "TBD" slots in the schedule section on `index.html`.
- [ ] Send 2027 confirmed school list to replace the placeholder on `schools.html`.
- [ ] Enable GitHub Pages for this repo (Settings → Pages → Deploy from `main`)
      and confirm DNS for accjuniorhigh.com points at GitHub Pages.
