# Il Guardaroba: Late 15th-Century Italian Dress

Extant-art picture dictionary and maker resource for late 15th-century Italian dress, headwear, foundation layers, and footwear.

## Repository

Recommended repo name: `il-guardaroba`

Recommended GitHub repo description:

`Extant-art picture dictionary and maker resource for late 15th-century Italian dress, headwear, foundation layers, and footwear.`

Expected GitHub Pages URL once published under Jennifer's GitHub account:

`https://maeeast.github.io/il-guardaroba/`

## What is included

This is the **extant art edition**. The card images are sourced from period or near-period Italian artwork and each card includes a citation link.

The site also includes a **Make it** section with modern construction tutorials, YouTube videos, project diaries, and commercial patterns. These are maker aids, not primary historical evidence. The period art citations remain on the individual dictionary cards.

The site uses remote image URLs from Wikimedia Commons so the zip stays small and source attribution is preserved on each card. If you want to make it fully offline later, download the source images and replace the remote `src` values with local paths.

## Publish on GitHub Pages

1. Create a new GitHub repository named `il-guardaroba`.
2. Use this description: `Extant-art picture dictionary and maker resource for late 15th-century Italian dress, headwear, foundation layers, and footwear.`
3. Upload the contents of this folder to the repo root.
4. Go to **Settings → Pages**.
5. Choose **Deploy from a branch**.
6. Select `main` and `/root`.
7. Save.

GitHub will give you a public URL after the site deploys. For this repo, it should be:

`https://maeeast.github.io/il-guardaroba/`

## Files

- `index.html` — main webpage
- `styles.css` — visual styling
- `script.js` — filters and small interactions
- `sources.json` — machine-readable art sources
- `construction-resources.json` — machine-readable construction links
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing


## Local image assets

This build includes local copies of the extant artwork images used by the dictionary cards under `assets/images/`. It also includes the AI-generated visual reference sketches under `assets/ai-reference/`.

The extant-art cards still link to their original citation pages. The AI sketches are included as modern visual aids only, not historical evidence.

Each dictionary card links to a detail page in `items/` with:

- the extant art image and citation
- the AI reference sketch
- the card notes and evidence label
- a link back to the construction resources

See `IMAGE-INVENTORY.md` for the included image and detail-page list.
