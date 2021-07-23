import slider from "../modules/slider";

export default () => {
  document.body.addEventListener(`screenChanged`, (evt) => {
    if (evt.detail.screenName === `story`) {
      slider();
    }
  });
};
