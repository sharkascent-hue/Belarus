# Belarus — Farm With Pride

Website for selling new and used Belarus tractors in Ireland.

No build step. `index.html` is the yard (home page), `tractor.html?id=…` is each tractor's listing page,
and `stock.js` holds the data both pages share.

## Editing

Everything you'll usually change is in `stock.js`:

- `CONFIG`: phone number, WhatsApp number, email, address and the example finance rate.
- `CONFIG.heroVideo` / `CONFIG.storyVideo`: the background video files.
- `STOCK`: the tractors for sale. Each one has its specs, price, description, features and a `gallery` of photos.
  Its listing page is `tractor.html?id=<id>`.

## Before going live

- Replace the example stock, prices and contact details with real ones.
- Connect the trade-in form to your email or a form service (see the `TODO`s in `index.html` and `tractor.html`).
- Tractor photos and the two background videos are AI-generated and load from Higgsfield. For speed, download them,
  compress to WebP and keep them in this repo.

## Hosting

Turn on GitHub Pages (Settings → Pages → Deploy from branch → `main`, `/ (root)`), then point
belarus.ie at it with a custom domain.
