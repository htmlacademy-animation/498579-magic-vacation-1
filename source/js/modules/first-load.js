export default () => {
  const body = document.body;
  const links = body.querySelectorAll(`.js-menu-link`);

  if (body.classList.contains(`loaded`)) {
    body.classList.remove(`loaded`);
  }

  body.classList.add(`loaded`);

  links.forEach((link) => {
    link.classList.remove(`active`);
  });

  setTimeout(() => {
    links[0].classList.add(`active`);
  }, 600);
};
