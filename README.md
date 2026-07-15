# Choys of Bovey — website

A one-page marketing site for **Choys of Bovey**, the family Chinese takeaway on
Town Hall Place, Bovey Tracey (edge of Dartmoor).

Design concept: *dusk on the moor* — the takeaway as the warm lantern-light that
comes on every evening at five. Twilight-teal and lantern-gold, with the menu set
like a receipt in monospace.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All page content |
| `styles.css` | Styling |
| `script.js`  | Live "open now / opens at 5" status, today's-hours highlight, scroll reveals |
| `logo.png`   | The mascot logo — used in the nav, hero, visit section and footer. **Required.** |

Pure static HTML/CSS/JS — no build step, no dependencies. Fonts load from Google
Fonts. The whole palette (pillar-box red, gold, cream, warm black), the seigaiha
wave band, the 中餐-style motifs and the brush accents are all drawn from the logo.

## Preview locally

Just open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

**Vercel (recommended)**
1. Push this folder to a GitHub repo.
2. In Vercel → *Add New Project* → import the repo.
3. Framework preset: **Other**. No build command, output directory `./`.
4. Deploy — you'll get a shareable URL.

**GitHub Pages** also works: push, then Settings → Pages → deploy from the
repo root.

## Notes before going live

- **The full menu is transcribed** from Choys' 2024 printed menu
  (`2548-menus-*.jpg`) into sections, with a jump-nav to each. A few prices on
  blurred lines were read to the nearest sensible value — worth a final check
  against the paper menu before launch. Sauce dishes that offer "peppers or mixed
  veg" are listed once (same price for either), per the printed menu.
- Phone (`01626 834302` / `07778 339128`), email, address, cash-only and 5–9pm
  hours all match the printed menu / current listing.
- To add real food photography, drop images into an `/images` folder and wire
  them into the hero or menu cards. The menu scans (`2548-menus-*.jpg`) can be
  removed from the repo once you're happy, or kept and linked as a full PDF.
