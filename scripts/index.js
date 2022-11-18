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

themesButton.addEventListener("click", () => themesToggle(mainTheme));
