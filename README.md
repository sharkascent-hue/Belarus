# Belarus — Farm With Pride

Website for selling new and used Belarus tractors in Ireland.

Everything is in `index.html` (no build step). Open it in a browser to view it.

## Editing

At the top of the `<script>` near the bottom of `index.html`:

- `CONFIG`: phone number, email, address and the example finance rate.
- `CONFIG.heroVideo` / `CONFIG.storyVideo`: the background video files.
- `STOCK`: the tractors for sale (model, new/used, year, hp, hours, gearbox, price, photo).

## Before going live

- Replace the example stock, prices and contact details with real ones.
- Connect the trade-in form to your email or a form service (see the `TODO` in the script).
- Tractor photos and the two background videos are AI-generated and load from Higgsfield. For speed, download them,
  compress to WebP and keep them in this repo.

## Hosting

Turn on GitHub Pages (Settings → Pages → Deploy from branch → `main`, `/ (root)`), then point
belarus.ie at it with a custom domain.
