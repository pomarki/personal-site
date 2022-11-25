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
import { menuTitles, documentTitles } from "./titles.js";
import { Link } from "../components/Link.js";
import { randomizerArr } from "./utils.js";
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
    //105
    let sub = [];
    for (let y = 0; y <= 17; y++) {
      //17
      sub.push(Math.floor(Math.random() * 2));
    }
    res.push(sub);
  }
  return res;
};

const renderMainScreen = (arr) => {
  
  let initialArr = randomizerArr(arr[0].length - 1, arr.length - 1);

  const renderElement = (a, b) => {
    if (arr[a][b] === 0) {
      screen.clearRect(12 * a, 12 * b, 10, 10);
    } else {
      screen.fillStyle = "#d9534d";
      screen.fillRect(12 * a, 12 * b, 10, 10);
    }
  };

  initialArr.forEach((adress) => {
    let cut = adress.indexOf("-");
    let y = adress.slice(0, cut);
    let x = adress.slice(cut + 1, adress.length);
    setTimeout(() => {renderElement(x, y)}, 1000)
  });
};

// слушатель на изменение окна
/* window.addEventListener('resize', () => {
  console.log(window.innerWidth);
}); */


renderMainScreen(rndArr());

themesButton.addEventListener("click", () => themesToggle(mainTheme));

document.title = documentTitles.eng[0]; // добавить случайный выбор и переключатель по кнопке ru / en


