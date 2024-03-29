import throttle from 'lodash/throttle';

export default class FullPageScroll {
  constructor() {
    this.THROTTLE_TIMEOUT = 2000;

    this.screenElements = document.querySelectorAll(`.screen:not(.screen--result)`);
    this.menuElements = document.querySelectorAll(`.page-header__menu .js-menu-link`);

    this.activeScreen = 0;
    this.previousscreen = 0;
    this.onScrollHandler = this.onScroll.bind(this);
    this.onUrlHashChengedHandler = this.onUrlHashChanged.bind(this);
  }

  init() {
    document.addEventListener(`wheel`, throttle(this.onScrollHandler, this.THROTTLE_TIMEOUT, {trailing: true}));
    window.addEventListener(`popstate`, this.onUrlHashChengedHandler);

    this.onUrlHashChanged();
  }

  onScroll(evt) {
    const currentPosition = this.activeScreen;
    this.reCalculateActiveScreenPosition(evt.deltaY);
    if (currentPosition !== this.activeScreen) {
      this.changePageDisplay();
    }
  }

  onUrlHashChanged() {
    const newIndex = Array.from(this.screenElements).findIndex((screen) => location.hash.slice(1) === screen.id);
    this.previousScreen = this.activeScreen;
    this.activeScreen = (newIndex < 0) ? 0 : newIndex;
    this.changePageDisplay();
  }

  activateSvg() {
    if (this.activeScreen === 2 && this.previousScreen !== 2) {
      const image = document.querySelector(`.js-prize-1`);
      const image2 = document.querySelector(`.js-prize-2`);
      const image3 = document.querySelector(`.js-prize-3`);

      image.src = `${image.dataset.img}?${new Date().getTime()}`;

      setTimeout(() => {
        image2.src = `${image2.dataset.img}?${new Date().getTime()}`;
      }, 3500);

      setTimeout(() => {
        image3.src = `${image3.dataset.img}?${new Date().getTime()}`;
      }, 6500);

    }
  }


  changePageDisplay() {
    this.changeVisibilityDisplay();
    this.changeActiveMenuItem();
    this.emitChangeDisplayEvent();
  }

  changeVisibilityDisplay() {
    this.activateSvg();
    const previousScreen = [...this.screenElements].find((el) => !el.classList.contains(`screen--hidden`));
    const currentScreen = this.screenElements[this.activeScreen];
    const overlaySlide = document.createElement(`div`);

    overlaySlide.classList.add(`overlay-slide`);

    if (previousScreen === currentScreen) {
      return;
    }

    if (previousScreen && previousScreen.id === `story` && currentScreen.id === `prizes`) {
      document.body.append(overlaySlide);

      window.setTimeout(() => {
        overlaySlide.classList.add(`active`);
      }, 0);

      window.setTimeout(() => {
        previousScreen.classList.remove(`active`);
        previousScreen.classList.add(`screen--hidden`);

        currentScreen.classList.remove(`screen--hidden`);
        currentScreen.classList.add(`active`);

        overlaySlide.classList.remove(`active`);
      }, 550);

    } else {
      this.screenElements.forEach((screen) => {
        screen.classList.add(`screen--hidden`);
        screen.classList.remove(`active`);
      });

      if (document.querySelector(`.overlay-slide`)) {
        document.querySelector(`.overlay-slide`).remove();
      }

      currentScreen.classList.remove(`screen--hidden`);

      setTimeout(() => {
        currentScreen.classList.add(`active`);
      }, 100);
    }
  }

  changeActiveMenuItem() {
    const activeItem = Array.from(this.menuElements).find((item) => item.dataset.href === this.screenElements[this.activeScreen].id);
    if (activeItem) {
      this.menuElements.forEach((item) => item.classList.remove(`active`));
      activeItem.classList.add(`active`);
    }
  }

  emitChangeDisplayEvent() {
    const event = new CustomEvent(`screenChanged`, {
      detail: {
        'screenId': this.activeScreen,
        'screenName': this.screenElements[this.activeScreen].id,
        'screenElement': this.screenElements[this.activeScreen]
      }
    });

    document.body.dispatchEvent(event);
  }

  reCalculateActiveScreenPosition(delta) {
    if (delta > 0) {
      this.activeScreen = Math.min(this.screenElements.length - 1, ++this.activeScreen);
    } else {
      this.activeScreen = Math.max(0, --this.activeScreen);
    }
  }
}
