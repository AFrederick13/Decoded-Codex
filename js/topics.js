function initTopics() {
  const filterButtons = document.querySelectorAll('#filter-buttons .filter-btn');
  const topicGrid = document.getElementById('topic-grid');

  if (!filterButtons.length || !topicGrid) return;
  
  const topicCards = topicGrid.querySelectorAll('.topic-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

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