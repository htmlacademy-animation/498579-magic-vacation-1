import AccentTypography from "./accent-typography";

export default () => {
  document.body.addEventListener(`screenChanged`, (evt) => {
    const links = document.body.querySelectorAll(`.js-menu-link`);
    const headerNav = document.querySelector(`.js-header-nav`);

    links.forEach((link) => {
      link.classList.remove(`active`);
    });

    headerNav.querySelector(`[data-href=${evt.detail.screenName}]`).classList.add(`active`);

    switch (evt.detail.screenName) {
      case `story`:
        const storyTitle = new AccentTypography(`.slider__item-title`, `transform`, 400, `typography-active`);
        storyTitle.destroyAnimation();

        setTimeout(() => {
          storyTitle.runAnimation();
        }, 0);
        break;

      case `prizes`:
        const prizesTitle = new AccentTypography(`.prizes__title`, `transform`, 400, `typography-active`);
        prizesTitle.destroyAnimation();

        setTimeout(() => {
          prizesTitle.runAnimation();
        }, 0);
        break;

      case `rules`:
        const rulesTitle = new AccentTypography(`.rules__title`, `transform`, 400, `typography-active`);
        rulesTitle.destroyAnimation();

        setTimeout(() => {
          rulesTitle.runAnimation();
        }, 0);
        break;

      case `game`:
        const gameTitle = new AccentTypography(`.game__title`, `transform`, 400, `typography-active`);
        gameTitle.destroyAnimation();

        setTimeout(() => {
          gameTitle.runAnimation();
        }, 0);
        break;
    }
  });
};
