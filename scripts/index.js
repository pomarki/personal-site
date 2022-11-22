import {
  themesButton,
  langButtons,
  pageBody,
  sunBlock,
  moonBlock,
  title,
  portfolioLinks,
  avatar,
  wrapperAbout,
  colors,
} from "./data.js";
import { themesToggle } from "./themesToggle.js";
import { menuTitles } from "./titles.js";
import { Link } from "../components/Link.js";
const mainScreen = document.getElementById("main-screen");
let screen = mainScreen.getContext("2d");
screen.globalAlpha = 0.5;
mainScreen.width = 1280;
mainScreen.height = 222;

let mainTheme = true;
const openSection = (id) => {
  let section = document.getElementById(id);
  section.classList.toggle("body__wrapper_type_visible");
};

menuTitles.forEach((el) => {
  const targetSection = document.querySelector(`.${el.id}`);
  const newLink = new Link(el, openSection);
  const linkElement = newLink.generateLink();
  targetSection.prepend(linkElement);
});

const rndColor = (num) => {
  return Math.floor(Math.random() * num) || 0;
};

const rndArr = () => {
  let res = [];
  for (let x = 0; x <= 105; x++) {
    let sub = [];
    for (let y = 0; y <= 17; y++) {
      sub.push(Math.floor(Math.random() * 2));
    }
    res.push(sub);
  }
  return res;
};

const renderMainScreen = (arr) => {
  let bgColor;
  mainTheme ? (bgColor = "#fbfef9") : (bgColor = "#191923");

  for (let x = 0; x <= arr.length - 1; x++) {
    for (let y = 0; y <= arr[x].length - 1; y++) {
      if (arr[x][y] === 0) {
        screen.clearRect(12 * x, 12 * y, 10, 10);
      } else {
        screen.fillStyle = "#d9534d";
        screen.fillRect(12 * x, 12 * y, 10, 10);
      }
    }
  }
};

// слушатель на изменение окна
/* window.addEventListener('resize', () => {
  console.log(window.innerWidth);
}); */

//console.log(rndArr())

renderMainScreen(rndArr());

themesButton.addEventListener("click", () => themesToggle(mainTheme));
