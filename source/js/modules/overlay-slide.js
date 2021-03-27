export default () => {
  const overlaySlide = document.createElement(`div`);
  const links = document.body.querySelectorAll(`.js-menu-link`);

  overlaySlide.classList.add(`overlay-slide`);

  links.forEach((link) => {
    link.addEventListener(`click`, (event) => {
      if (link.getAttribute(`href`) === `#prizes`) {
        event.preventDefault();

        document.documentElement.append(overlaySlide);

        setTimeout(() => {
          overlaySlide.classList.add(`active`);
        }, 0);

        setTimeout(() => {
          window.location = link.href;
        }, 300);

      } else {
        overlaySlide.classList.remove(`active`);
        overlaySlide.remove();
      }
    });
  });
};
