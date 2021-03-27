export default () => {
  const overlaySlide = document.createElement(`div`);
  const links = document.body.querySelectorAll(`.js-menu-link`);

  overlaySlide.classList.add(`overlay-slide`);

  document.documentElement.append(overlaySlide);

  links.forEach((link) => {
    link.addEventListener(`click`, (event) => {
      if (link.getAttribute(`href`) === `#prizes`) {
        event.preventDefault();

        overlaySlide.classList.add(`active`);

        setTimeout(() => {
          window.location = link.href;
        }, 300);

      } else {
        overlaySlide.classList.remove(`active`);
      }
    });
  });
};
