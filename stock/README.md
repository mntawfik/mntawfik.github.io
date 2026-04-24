# `public/stock/` — stock / Wikimedia images used by POST_OVERRIDES

This folder holds editor-supplied photographs attached to posts whose
original Facebook entry was text-only. Each image also appears as a credit
line beneath the photo on the rendered post (see `PhotoAttribution` in
`src/pages/PostDetail.tsx`), linking back to the source and licence.

## Pipeline

Source originals live **outside** this folder, in `tmp/stock-src/` (not
checked in). Running `node scripts/process-stock-images.js` rewrites every
`<basename>-full.jpg` + `<basename>-thumb.jpg` in this folder using the
same sharp pipeline as the Facebook importer (full inside 1800×1800;
thumb 800×600 cover-fit anchored to `north`).

If a file below is replaced, re-download it into `tmp/stock-src/` with
the same basename and re-run the processor. Keep this ledger in sync with
the entries in `src/content/postOverrides.ts`.

## Ledger

Each row names the basename here, the post that uses it, the source
Wikimedia file page, the author, and the licence. Every licence listed
is reuse-safe with attribution (and most are CC0 or CC BY-SA — see the
individual file pages for the full deed).

### `giza-pyramids-aerial`
- **Used by post:** `2015-01-07-24iiaz` — book purpose / table of contents
- **Source:** <https://commons.wikimedia.org/wiki/File:Giza-pyramids.JPG>
- **Author:** Robster1983
- **Licence:** CC0 1.0 Universal (Public Domain Dedication) — <https://creativecommons.org/publicdomain/zero/1.0/>
- **Original resolution:** 1833 × 1208

### `karnak-hypostyle-columns`
- **Used by post:** `2015-01-22-z9713z` — book launch + "first great civilisation" foreword
- **Source:** <https://commons.wikimedia.org/wiki/File:Columns_in_Karnak_Temple.JPG>
- **Author:** OmarShawki
- **Licence:** CC BY-SA 3.0 Unported — <https://creativecommons.org/licenses/by-sa/3.0/>
- **Original resolution:** 4928 × 3264

### `rosetta-stone`
- **Used by post:** `2015-07-29-0r1c95` — Ancient-Egyptian ↔ Arabic word roots
- **Source:** <https://commons.wikimedia.org/wiki/File:Rosetta_Stone.JPG>
- **Author:** Hans Hillewaert
- **Licence:** CC BY-SA 4.0 International — <https://creativecommons.org/licenses/by-sa/4.0/>
- **Original resolution:** 3665 × 4288

### `ramses-ii-colossus-memphis`
- **Used by post:** `2017-01-06-xxz8qt` — Pharaoh of Moses / rebuttal to foreign historians
- **Source:** <https://commons.wikimedia.org/wiki/File:By_ovedc_-_Ramses_II_colossal_statue_in_Memphis_-_01.jpg>
- **Author:** Ovedc
- **Licence:** CC BY-SA 4.0 International — <https://creativecommons.org/licenses/by-sa/4.0/>
- **Original resolution:** 5312 × 2988

### `great-sphinx-giza`
- **Used by post:** `2017-12-07-xmdf3k` — Arab-nation awakening call
- **Source:** <https://commons.wikimedia.org/wiki/File:Great_Sphinx_of_Giza_May_2015.JPG>
- **Author:** MusikAnimal
- **Licence:** CC BY-SA 3.0 Unported — <https://creativecommons.org/licenses/by-sa/3.0/>
- **Original resolution:** 6000 × 4000

### `seated-scribe-louvre`
- **Used by post:** `2021-02-28-qvtm34` — Egyptian as mother-of-languages / Ahmed Kamal's dictionary
- **Source:** <https://commons.wikimedia.org/wiki/File:Le_Scribe_accroupi_-_Mus%C3%A9e_du_Louvre_Antiquit%C3%A9s_%C3%A9gyptiennes_E_3023.jpg>
- **Author:** Shonagon
- **Licence:** CC0 1.0 Universal (Public Domain Dedication) — <https://creativecommons.org/publicdomain/zero/1.0/>
- **Original resolution:** 7062 × 7887
