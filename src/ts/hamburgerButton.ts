{
  const hambButton = document.querySelector('.hamburgerButton');
  const nav = document.querySelector('.header__nav');

  (() => {
    if (!hambButton || !nav) return;
    hambButton.addEventListener('click', () => {
      hambButton.classList.toggle('hamburgerButton--active');
      nav.classList.toggle('header__nav--open');
    });
  })();
}
