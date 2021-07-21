export default () => {
  document.body.addEventListener(`screenChanged`, (evt) => {
    const footer = document.querySelector(`.footer-wrap`);

    if (evt.detail.screenName === `prizes` || evt.detail.screenName === `rules`) {
      footer.classList.remove(`hidden`);

      // Show footer
      setTimeout(() => {
        footer.classList.add(`active`);
      }, 250);

      document.querySelectorAll(`[data-footer]`).forEach((item) => {
        item.classList.remove(`active`);
      });

      setTimeout(() => {
        document.querySelector(`[data-footer=${evt.detail.screenName}]`).classList.add(`active`);
      }, 500);

    } else {
      footer.classList.remove(`active`);
      footer.classList.add(`hidden`);
    }
  });
};
