# Il Guardaroba: Late 15th-Century Italian Dress

Extant-art picture dictionary and maker resource for late 15th-century Italian dress, headwear, foundation layers, and footwear.

## Repository

Recommended repo name: `il-guardaroba`

Recommended GitHub repo description:

`Extant-art picture dictionary and maker resource for late 15th-century Italian dress, headwear, foundation layers, and footwear.`

Expected GitHub Pages URL once published:

`https://maeeast.github.io/il-guardaroba/`

## What is included

This is the **extant art edition**. The card images are sourced from period or near-period Italian artwork and each card includes a citation link.

The site also includes a **Make it** section with modern construction tutorials, YouTube videos, project diaries, and commercial patterns. These are maker aids, not primary historical evidence. The period art citations remain on the individual dictionary cards.

## Image setup (required before first upload)

The card images are **not bundled in this zip** because Wikimedia Commons blocks automated downloads from build environments. Run the download script once on your local machine before pushing to GitHub:

```
python3 assets/images/download-images.py
```

This fetches all 9 public-domain artwork images from Wikimedia Commons at 900px width and saves them to `assets/images/`. The script skips any files that already exist, so it is safe to re-run.

Once downloaded, the file tree should look like:

```
il-guardaroba/
  index.html
  styles.css
  script.js
  README.md
  .nojekyll
  sources.json
  construction-resources.json
  assets/
    images/
      download-images.py
      ghirlandaio-birth-of-mary.jpg
      ghirlandaio-marriage-of-mary.jpg
      ghirlandaio-zacharias-detail.jpg
      ghirlandaio-giovanna-tornabuoni.jpg
      pala-sforzesca.jpg
      bellini-procession-san-marco.jpg
      carpaccio-two-venetian-ladies.jpg
      cossa-schifanoia-march.jpg
      cossa-allegory-of-april.jpg
```

All source images are public domain reproductions via Wikimedia Commons.

## Publish on GitHub Pages

1. Run `python3 assets/images/download-images.py` locally to fetch the images.
2. Create a new GitHub repository named `il-guardaroba`.
3. Use this description: `Extant-art picture dictionary and maker resource for late 15th-century Italian dress, headwear, foundation layers, and footwear.`
4. Upload the full contents of this folder (including `assets/`) to the repo root.
5. Go to **Settings → Pages**.
6. Choose **Deploy from a branch**.
7. Select `main` and `/ (root)`.
8. Save.

GitHub will give you a public URL after the site deploys. For this repo it should be:

`https://maeeast.github.io/il-guardaroba/`

## Files

- `index.html` — main webpage
- `styles.css` — visual styling
- `script.js` — filter buttons and small interactions
- `sources.json` — machine-readable art sources
- `construction-resources.json` — machine-readable construction links
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing
- `assets/images/download-images.py` — run once to fetch artwork images locally
