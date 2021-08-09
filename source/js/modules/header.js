export const header = () => {
  const links = document.body.querySelectorAll(`.js-menu-link`);
  const headerLogo = document.querySelector(`.js-header-logo`);
  const headerNav = document.querySelector(`.js-header-nav`);
  const socialToggler = headerNav.querySelector(`.js-social-toggler`);

  const headerLogoDuration = parseInt(getComputedStyle(headerLogo).getPropertyValue(`--duration`), 10);
  const headerNavDuration = parseInt(getComputedStyle(headerNav).getPropertyValue(`--duration`), 10);

  links.forEach((link) => {
    link.classList.remove(`active`);
  });

  setTimeout(() => {
    headerLogo.classList.add(`active`);
  }, 0);

  headerLogo.addEventListener(`transitionstart`, () => {
    setTimeout(() => {
      headerNav.classList.add(`active`);
    }, headerLogoDuration * 0.8);
  });

  headerNav.addEventListener(`transitionstart`, () => {
    setTimeout(() => {
      const location = window.location.hash.slice(1);
      if (location) {
        headerNav.querySelector(`[data-href=${location}]`).classList.add(`active`);
      }
    }, headerNavDuration);
  });

  headerNav.addEventListener(`transitionstart`, () => {
    setTimeout(() => {
      socialToggler.classList.add(`active`);
    }, headerNavDuration * 0.8);
  });
};
