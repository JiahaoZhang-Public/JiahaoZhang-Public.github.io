# Difference from Original Template

Original template: [RayeRen/acad-homepage.github.io](https://github.com/RayeRen/acad-homepage.github.io)

This repo keeps the original Jekyll base, but restructures homepage content into reusable, data-driven components. The biggest changes are in `Publications` and `Projects`.

## High-level Changes

- Replaced placeholder profile/content with Jiahao Zhang's academic content.
- Added sections: `Services` and `Projects`.
- Removed `Invited Talks`.
- Added profile photo and CV download in sidebar.
- Added project-page-safe path handling for GitHub Pages subpath deployment.
- Refactored publication rendering from hardcoded content to metadata + template.

## Publications: Original vs Current

### Original template behavior

- Publications are hardcoded in `_pages/about.md`.
- No shared publication metadata file.
- No status grouping or consistent badge system.
- No author truncation policy.
- No BibTeX copy interaction.

### Current behavior

- Data file: `_data/publications.yml`
- Renderer include: `_includes/publication_item.html`
- Homepage orchestration: `_pages/about.md`
- Grouping/order:
  - `Published`
  - `Under review`
  - `Manuscript`
  - Grouped after sorting by `year` descending.

### Publication card logic

- Fixed information hierarchy:
  1. Title (clickable)
  2. Badges (status + topic + optional role)
  3. Venue/year line
  4. Author line
  5. Links (fixed order)
  6. Keywords
- Status normalization:
  - `Published`
  - `Under review`
  - `Manuscript`
- Topic normalization:
  - `XAI`
  - `AI4Sci`
- Author marks:
  - `*` single first author
  - `†` co-first author
  - `✉` corresponding author
- Author truncation:
  - Default max: `8`
  - Preserve first/co-first, corresponding, and self before filling remaining slots.
- Interaction:
  - Cover click expands abstract (`details/summary`).
  - BibTeX button supports one-click copy via `assets/js/publications.js`.
- Styling:
  - Card layout, badge styles, and cover behavior in `assets/css/main.scss`.

## Projects: Original vs Current

### Original template behavior

- No dedicated `Projects` section or project card system.

### Current behavior

- Data file: `_data/projects.yml`
- Renderer include: `_includes/project_item.html`
- Homepage section: `# 🚀 Projects` in `_pages/about.md`
- Navigation entry in `_data/navigation.yml`

### Project card logic

- No author list is shown.
- Role-based ownership is explicit:
  - `Lead`
  - `Core`
  - `Participate`
- Card fields:
  - title
  - role/status/period
  - category/topic
  - tags
  - summary
  - links (current convention: `Web`, `Code`)
- Cover area:
  - Fixed 5:3 ratio with crop behavior.
  - Responsive layout (desktop cover/content split).

## Sidebar/Profile Changes

- Avatar uses `images/author/jiahao.jpg`.
- CV download link exposed from `_config.yml` (`author.cv`) and rendered in `_includes/author-profile.html`.

## GitHub Pages Subpath Safety

To support deployment under:
`https://jiahaozhang-public.github.io/Jiahao-Zhang/`

### Config

- `_config.yml`:
  - `url: "https://jiahaozhang-public.github.io"`
  - `baseurl: "/Jiahao-Zhang"`

### Path handling

Key assets/links were switched to `| relative_url` in:

- `_includes/head.html`
- `_includes/head/custom.html`
- `_includes/scripts.html`
- `_includes/masthead.html`
- `_includes/author-profile.html`
- `_includes/publication_item.html`
- `_includes/project_item.html`

This avoids local/online path mismatches (common issue on project pages where CSS/JS/images load locally but fail after push).
