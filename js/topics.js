// Topic filtering script
function initTopics() {

  // Get filter buttons and topic grid
  const filterButtons = document.querySelectorAll('#filter-buttons .filter-btn');
  const topicGrid = document.getElementById('topic-grid');

  // Return early if no buttons or topic grid found
  if (!filterButtons.length || !topicGrid) return;


  // NEW VERSION:
  // Convert topic cards to an array and sort alphabetically by heading/title
  const topicCards = Array.from(topicGrid.querySelectorAll('.topic-card'));

  topicCards.sort((a, b) => {
    // Look for an h2, h3, or .topic-title; fall back to the full card text
    const titleA = (a.querySelector('h2, h3, .topic-title') || a).textContent.trim();
    const titleB = (b.querySelector('h2, h3, .topic-title') || b).textContent.trim();
    return titleA.localeCompare(titleB, undefined, { sensitivity: 'base' });
  });

  // Re-append sorted cards into the grid
  topicCards.forEach(card => topicGrid.appendChild(card));
  // END NEW VERSION


  // PREVIOUS VERSION:
  // Get all topic cards
  // const topicCards = topicGrid.querySelectorAll('.topic-card');
  // END PREVIOUS VERSION
  

  // Add click event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Get the filter from the button's data attribute
      const filter = button.getAttribute('data-filter');

      // Show/hide topic cards based on the selected filter
      topicCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else {
          const tagsAttr = card.getAttribute('data-tags') || '';
          const tags = tagsAttr.split(' ').filter(t => t !== '');
          card.style.display = tags.includes(filter) ? 'flex' : 'none';
        }
      });
    });
  });
}

// Run immediately if DOM is already ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTopics);
} else {
  initTopics();
}