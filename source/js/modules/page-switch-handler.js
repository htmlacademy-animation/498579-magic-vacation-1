import AccentTypography from "./accent-typography";

export default () => {
  document.body.addEventListener(`screenChanged`, (evt) => {
    switch (evt.detail.screenName) {
      case `top`:
        const introTitle = new AccentTypography(`.intro__title`, `transform`, 500, `typography-active`);
        const introDate = new AccentTypography(`.intro__date`, `transform`, 400, `typography-active`, 400);

        introTitle.destroyAnimation();
        introDate.destroyAnimation();

        setTimeout(() => {
          introTitle.runAnimation();
          introDate.runAnimation();
        }, 0);

        break;

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
