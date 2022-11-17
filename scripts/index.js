import { themesButton, pageBody, sunBlock, moonBlock } from "./data.js";

const themesToggle = () => {
  pageBody.classList.toggle("body_theme_dark");
  themesButton.classList.toggle("header__themes-button_dark");
  sunBlock.classList.toggle("header__themes-indicator_sun_dark");
  moonBlock.classList.toggle("header__themes-indicator_moon_dark");
};

themesButton.addEventListener("click", themesToggle);
