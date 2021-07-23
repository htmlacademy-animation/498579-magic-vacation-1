import {getRandomInt} from "../utils/functions";

export default class AccentTypography {
  constructor(
      elementSelector,
      property,
      duration,
      activeClass,
      delay = 0,
      timingFunction = `cubic-bezier(0, 0.82, 0.75, 0.98)`,
      timeOffsetDelta = 20,
  ) {
    this.elementSelector = elementSelector;
    this.property = property;
    this.duration = duration;
    this.delay = delay;
    this.activeClass = activeClass;
    this.timeOffset = 0;
    this.timeOffsetDelta = timeOffsetDelta;
    this.timingFunction = timingFunction || `ease`;

    if (typeof this.elementSelector === `string`) {
      this.element = document.querySelector(this.elementSelector);
    } else {
      this.element = this.elementSelector;
    }

    this.prepareText();
  }

  init() {
    if (!this.element) {
      return;
    }
    this.addStyle();
  }

  createElement(letter) {
    const newSpan = document.createElement(`span`);
    newSpan.innerText = letter;

    return newSpan;
  }

  prepareText() {
    const targetText = this.element.textContent.trim().split(/\s/).filter((item) => item);

    const contentParent = targetText.reduce((parentFragment, word, index) => {
      const wordElement = [...word].reduce((fragment, letter) => {
        fragment.appendChild(this.createElement(letter));
        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`word-container`);
      wordContainer.appendChild(wordElement);
      parentFragment.appendChild(wordContainer);

      if (index < targetText.length - 1) {
        parentFragment.appendChild(document.createTextNode(` `));
      }

      return parentFragment;
    }, document.createDocumentFragment());

    this.element.innerHTML = ``;
    this.element.appendChild(contentParent);
  }

  getTransition(timeOffset) {
    return `${this.property} ${this.duration}ms ${this.timingFunction} ${this.delay + timeOffset}ms`;
  }

  addStyle() {
    const words = [...this.element.querySelectorAll(`.word-container`)];
    let delta = 20;

    for (let i = 0; i < words.length; i++) {
      words[i].querySelectorAll(`span`).forEach((span) => {
        span.style.transition = this.getTransition(getRandomInt(8) * delta);
      });
    }
  }

  clearStyle() {
    const words = [...this.element.querySelectorAll(`.word-container span`)];
    words.forEach((word) => {
      word.removeAttribute(`style`);
    });
  }

  runAnimation() {
    this.init();
    this.element.classList.add(this.activeClass);
  }

  destroyAnimation() {
    this.clearStyle();
    this.element.classList.remove(this.activeClass);
  }
}
