import {
  themesButton,
  langButtons,
  pageBody,
  sunBlock,
  moonBlock,
  title,
  portfolioLinks,
  avatar,
} from "./data.js";

let mainTheme = true;

const themesToggle = () => {
  mainTheme = !mainTheme;
  pageBody.classList.toggle("body_theme_dark");
  themesButton.classList.toggle("header__themes-button_dark");
  sunBlock.classList.toggle("header__themes-indicator_sun_dark");
  moonBlock.classList.toggle("header__themes-indicator_moon_dark");
  title.classList.toggle("header__title_theme_dark");
  langButtons.forEach((el) => {
    el.classList.toggle("header__language-selector_theme_dark");
  });
  portfolioLinks.forEach((el) => {
    el.classList.toggle("portfolio__site_name_theme_dark");
  });
  mainTheme
    ? (avatar.src = "images/face__light.jpg")
    : (avatar.src = "images/face__dark.jpg");
};

themesButton.addEventListener("click", themesToggle);
