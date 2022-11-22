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
} from "./data.js";
import { themesToggle } from "./themesToggle.js";
import { menuTitles } from "./titles.js";
import { Link } from "../components/Link.js";
const mainScreen = document.getElementById("main-screen");
let screen = mainScreen.getContext("2d");
mainScreen.width = window.innerWidth;
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

screen.fillStyle = "#70C1B3";
screen.fillRect(10, 10, 10, 10);
screen.fillRect(10, 23, 10, 10);




themesButton.addEventListener("click", () => themesToggle(mainTheme));
