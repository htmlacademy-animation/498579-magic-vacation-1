export default () => {
  const rulesScreen = document.querySelector(`#rules`);
  const list = rulesScreen.querySelector(`.rules__list`);
  const listItems = list.querySelectorAll(`.rules__item`);
  const rulesLink = document.querySelector(`.rules__link`);

  document.body.addEventListener(`screenChanged`, (evt) => {
    if (evt.detail.screenName === `rules`) {
      listItems.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add(`active`);
        }, (i + 1) * 200);
      });

      setTimeout(() => {
        rulesLink.classList.add(`active`);
      }, 1000);
    } else {
      listItems.forEach((item) => {
        item.classList.remove(`active`);
      });
      rulesLink.classList.remove(`active`);
    }
  });

};
