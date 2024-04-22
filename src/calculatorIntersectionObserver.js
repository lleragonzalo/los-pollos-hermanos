const menuCalculator = document.getElementById('menu-calculator');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menuCalculator.classList.add('reveal');
    } else {
      menuCalculator.classList.remove('reveal');
    }
  });
}, {
  threshold: 0.5
});

observer.observe(menuCalculator);
