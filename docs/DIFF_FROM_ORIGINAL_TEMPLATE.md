# Difference from Original Template

Original template: [RayeRen/acad-homepage.github.io](https://github.com/RayeRen/acad-homepage.github.io)

This document summarizes what changed in this repo compared with the original template, with focus on the publication logic.

## High-level Changes

- Replaced all placeholder personal/profile content with Jiahao Zhang's content.
- Added `Services` section and removed `Invited Talks`.
- Added profile photo and CV download link in sidebar.
- Added project-page-safe path handling for GitHub Pages (`url` + `baseurl`, and `relative_url` usage in key assets/links).
- Reworked publication area from hardcoded markdown/HTML into a data-driven card system.

## Publication: Original vs Current

### Original Template

- Publications are directly hardcoded in `_pages/about.md`.
- No shared publication data file.
- No structured status/topic/role semantics.
- No grouping by status.
- No author truncation logic.
- No BibTeX copy interaction.

### Current Repo

- Publication data is stored in `_data/publications.yml`.
- Publication rendering is centralized in `_includes/publication_item.html`.
- `_pages/about.md` only orchestrates grouping/order and include calls.
- Cards enforce a fixed information hierarchy:
  1. Title (clickable)
  2. Badges: status + topic + optional role
  3. Venue + year
  4. Authors (with mark symbols and truncation)
  5. Links in fixed order (`PDF -> arXiv -> Code -> Project -> Slides -> BibTeX`)
  6. Keywords
- Cover image supports click-to-expand abstract (`<details>` block).
- BibTeX supports one-click copy via `assets/js/publications.js`.

## Publication Logic Details

### 1) Data Model (`_data/publications.yml`)

Each paper is represented as structured metadata (example fields):

- `title`, `status`, `topic`
- `venue`, `year`, `venue_note`
- `main_link`, `pdf`, `arxiv`, `code`, `project`, `slides`
- `image`, `keywords`, `abstract`, `bibtex`
- `self_author`, `max_authors`
- `authors` list with role flags:
  - `first_author: true`
  - `co_first_author: true`
  - `corresponding_author: true`

### 2) Grouping and Ordering (`_pages/about.md`)

- Papers are sorted by `year` descending.
- Then grouped and rendered in this order:
  - `Published`
  - `Under review`
  - `Manuscript`

### 3) Card Rendering (`_includes/publication_item.html`)

- Status badge vocabulary is fixed:
  - `Published`
  - `Under review`
  - `Manuscript`
- Topic badge is normalized to:
  - `XAI`
  - `AI4Sci`
- Role badge supports:
  - `First`
  - `Corresponding`
  - (co-first is kept in author marks, not as a dedicated badge)

### 4) Author Display Rules

- Maximum shown authors: `max_authors` (default 8).
- If author count exceeds max:
  - Always include first/co-first authors.
  - Always include corresponding author(s).
  - Always include `self_author` (if not already included).
  - Fill remaining slots in original author order.
  - Append `...` when truncated.
- Marks:
  - `*` single first author
  - `†` co-first author
  - `✉` corresponding author
- `Jiahao Zhang` is bolded in author line.

### 5) Interaction and Styling

- `assets/js/publications.js`:
  - BibTeX copy button logic.
- `assets/css/main.scss`:
  - Publication card layout and badges.
  - Cover area behavior (fixed aspect ratio + crop policy).

## GitHub Pages Path Handling Changes

To support project page deployment (`https://jiahaozhang-public.github.io/Jiahao-Zhang/`):

- `_config.yml` defines:
  - `url: "https://jiahaozhang-public.github.io"`
  - `baseurl: "/Jiahao-Zhang"`
- Key template asset links were switched to `| relative_url` in:
  - `_includes/head.html`
  - `_includes/head/custom.html`
  - `_includes/scripts.html`
  - `_includes/masthead.html`
  - `_includes/author-profile.html`
  - `_includes/publication_item.html`

This avoids the local/online mismatch where CSS/JS appears normal locally but breaks after deployment under a subpath.
