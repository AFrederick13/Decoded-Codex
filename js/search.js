function initSearch() {
    if (typeof PagefindUI === 'undefined') return;

    const searchContainer = document.querySelector("#search");
    if (!searchContainer) return;

    new PagefindUI({
        element: "#search",
        showSubResults: true
    });

    // Ensure the generated form has an id and name for DevTools/accessibility compliance
    const form = searchContainer.querySelector('form');
    if (form) {
        if (!form.id) form.id = 'pagefind-search-form';
        if (!form.name) form.name = 'search-form';
    }

    // Add a click listener to the search container to make results full clickable
    // Using "mousedown" is more reliable than "click" for navigation events.
    searchContainer.addEventListener('mousedown', (e) => {
        // Find the top-level result item that was clicked on.
        const resultElement = e.target.closest('.pagefind-ui__result');
        if (resultElement) {
            // Find the link within that result.
            const link = resultElement.querySelector('a');
            // If a link is found, navigate to its href.
            if (link) window.location.href = link.href;
        }
    });
}

/**
 * Initialize when the DOM is ready. 
 * Since the script is deferred, it usually runs after parsing, 
 * but this check ensures safety.
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
} else {
    initSearch();
}