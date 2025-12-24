# Project Context: Decoded Codex

## Tech Stack
- **SSG:** Eleventy (11ty)
- **Templating:** Nunjucks (.njk)
- **Search:** Pagefind (Static search library)
- **Styling:** Standard CSS (`/css/style.css`)
- **Content:** Markdown (.md) with YAML front matter

## Project Structure & Key Files
- `_includes/base.njk`: The main layout file containing the HTML head, navigation, and footer.
- `pages/index.md`: The home page, which displays topic cards and the search bar.
- `js/topics.js`: Logic for filtering and displaying topic cards (currently being optimized).
- `js/search.js`: Logic for initializing Pagefind search UI.
- `pagefind/`: Generated search index and UI components.

## Current Architecture Notes
- **Topic Cards:** Displayed on the home page using a collection loop (`collections.topics`).
- **Search:** Pagefind UI is initialized on the home page.

## Ongoing Optimization Goals
1. **JS Relocation:** Move page-specific JavaScript out of `base.njk`.
   - Pagefind JS/CSS should only load on the home page (or pages with a search bar).
   - Topic card filtering logic (`topics.js`) should only load on the home page.
2. **Performance:** Reduce Total Blocking Time (TBT) by deferring non-critical scripts and ensuring scripts don't run on pages where their target DOM elements don't exist.
3. **Clean Templates:** Use Nunjucks blocks or front-matter flags to conditionally inject scripts into the base template.

## Current State
- Refactored `base.njk` to use conditional flags (`loadSearch`, `loadTopics`) for script and style injection.
- Updated `index.md` to trigger these flags and removed inline script tags for better organization.
- Implemented a more robust initialization pattern in `topics.js` to handle various loading states and improved tag matching logic.
- Resolved the 404 error by adding `eleventyConfig.addPassthroughCopy("js")` to the Eleventy configuration.
- Moved Pagefind initialization logic from `base.njk` to a dedicated `js/search.js` file.
- Enhanced `js/search.js` to programmatically add `id` and `name` attributes to the Pagefind-generated form for DevTools compliance.

## How to use this context
At the start of a new session, tell the assistant: 
*"Please read PROJECT_CONTEXT.md to understand the current project state and optimization goals before we proceed."*