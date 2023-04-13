 
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('.close-btn');

  hamburger.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });