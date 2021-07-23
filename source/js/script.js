// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import rules from './modules/rules';
import pageSwitchHandler from "./modules/page-switch-handler.js";
import top from "./screens/top";
import story from "./screens/story";
import {header} from "./modules/header";
import prizes from "./screens/prizes";

// init modules
window.addEventListener(`load`, () => {
  header();
});
mobileHeight();
menu();
footer();
chat();
result();
form();
social();
rules();
top();
story();
prizes();

pageSwitchHandler();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
