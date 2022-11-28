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
  mainBanner,
} from "./data.js";
import { themesToggle } from "./themesToggle.js";
import { menuTitles, documentTitles } from "./titles.js";
import { Link } from "../components/Link.js";
import { rndArr,  renderMainScreen } from "./utils.js";



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



// слушатель на изменение окна
/* window.addEventListener('resize', () => {
  console.log(window.innerWidth);
}); */

const renderBanner = () => {
  mainBanner.classList.add("life__banner_type_invisible");
  renderMainScreen(rndArr());
  mainBanner.removeEventListener("click", renderBanner)
}


mainBanner.addEventListener("click", renderBanner)
themesButton.addEventListener("click", () => themesToggle(mainTheme));

document.title = documentTitles.eng[0]; // добавить случайный выбор и переключатель по кнопке ru / en


