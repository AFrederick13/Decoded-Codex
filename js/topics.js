// Topic filtering script
function initTopics() {

  // Get filter buttons and topic grid
  const filterButtons = document.querySelectorAll('#filter-buttons .filter-btn');
  const topicGrid = document.getElementById('topic-grid');

  // Return early if no buttons or topic grid found
  if (!filterButtons.length || !topicGrid) return;
  
  // Get all topic cards
  const topicCards = topicGrid.querySelectorAll('.topic-card');

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