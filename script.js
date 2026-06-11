
const buttons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.dict-card');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach((b) => b.classList.remove('is-active'));
    button.classList.add('is-active');
    cards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter || card.dataset.worn === filter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});
