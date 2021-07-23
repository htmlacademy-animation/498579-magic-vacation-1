import AccentTypography from "../modules/accent-typography";

export default () => {
  const introTitle = new AccentTypography(`.intro__title`, `transform`, 500, `typography-active`);
  const introDate = new AccentTypography(`.intro__date`, `transform`, 400, `typography-active`);

  document.body.addEventListener(`screenChanged`, (evt) => {
    if (evt.detail.screenName === `top`) {
      const headerNav = document.querySelector(`.js-header-nav`);
      const socialToggler = headerNav.querySelector(`.js-social-toggler`);
      const footer = document.querySelector(`.js-footer`);
      const introMessage = document.querySelector(`.intro__message`);

      const headerNavDuration = parseInt(getComputedStyle(headerNav).getPropertyValue(`--duration`), 10);
      const introMessageDuration = parseInt(getComputedStyle(introMessage).getPropertyValue(`--duration`), 10);

      // 1. Start footer animation
      setTimeout(() => {
        footer.classList.add(`active`);
      }, 300);

      // 2. Start header animation (header())

      // 3. Show title
      if (socialToggler.classList.contains(`active`)) {
        introTitle.destroyAnimation();
        setTimeout(() => {
          introTitle.runAnimation();
        }, headerNavDuration * 0.8);

      } else {
        // socialToggler.addEventListener(`transitionstart`, () => {
        introTitle.destroyAnimation();

        setTimeout(() => {
          introTitle.runAnimation();
        }, 600); // todo headerNavDuration * 0.8
        // });
      }

      // 4. Show text
      document.querySelector(`.intro__title`).addEventListener(`transitionstart`, () => {
        setTimeout(() => {
          introMessage.classList.add(`active`);
        }, 300);
      });

      // 5. Icons

      // 6. Show dates
      introMessage.addEventListener(`transitionstart`, () => {
        introDate.destroyAnimation();

        setTimeout(() => {
          introDate.runAnimation();
        }, introMessageDuration);
      });

      // 6.1 Show dates title

    }
  });
};
