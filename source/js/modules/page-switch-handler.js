import AccentTypography from "./accent-typography";

export default () => {
  const storyTitle = new AccentTypography(`.slider__item-title`, `transform`, 400, `typography-active`);
  const prizesTitle = new AccentTypography(`.prizes__title`, `transform`, 400, `typography-active`);
  const gameTitle = new AccentTypography(`.game__title`, `transform`, 400, `typography-active`);
  const rulesTitle = new AccentTypography(`.rules__title`, `transform`, 400, `typography-active`);

  document.body.addEventListener(`screenChanged`, (evt) => {
    const links = document.body.querySelectorAll(`.js-menu-link`);
    const headerNav = document.querySelector(`.js-header-nav`);

    links.forEach((link) => {
      link.classList.remove(`active`);
    });

    headerNav.querySelector(`[data-href=${evt.detail.screenName}]`).classList.add(`active`);

    switch (evt.detail.screenName) {
      case `story`:
        storyTitle.destroyAnimation();

        setTimeout(() => {
          storyTitle.runAnimation();
        }, 0);
        break;

      case `prizes`:
        prizesTitle.destroyAnimation();

        setTimeout(() => {
          prizesTitle.runAnimation();
        }, 0);
        break;

      case `rules`:
        rulesTitle.destroyAnimation();

        setTimeout(() => {
          rulesTitle.runAnimation();
        }, 0);
        break;

      case `game`:
        gameTitle.destroyAnimation();

        setTimeout(() => {
          gameTitle.runAnimation();
        }, 0);
        break;
    }
  });
};
