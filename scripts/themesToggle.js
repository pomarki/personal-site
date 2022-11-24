import {
  themesButton,
  langButtons,
  pageBody,
  sunBlock,
  moonBlock,
  title,
  portfolioLinks,
  avatar,
  /* menuTitles, */
  mainScreenContainer,
} from "./data.js";

const themesToggle = (theme) => {
  theme = !theme;
  const menuTitles = Array.from(document.querySelectorAll(".main__title"));
  pageBody.classList.toggle("body_theme_dark");
  themesButton.classList.toggle("header__themes-button_dark");
  sunBlock.classList.toggle("header__themes-indicator_sun_dark");
  moonBlock.classList.toggle("header__themes-indicator_moon_dark");
  title.classList.toggle("header__title_theme_dark");
  mainScreenContainer.classList.toggle("life__screen_theme_dark");
  langButtons.forEach((el) => {
    el.classList.toggle("header__language-selector_theme_dark");
  });
  portfolioLinks.forEach((el) => {
    el.classList.toggle("portfolio__site_name_theme_dark");
  });
  menuTitles.forEach((el) => {
    el.classList.toggle("main__title_theme_dark");
  });

  /* theme
    ? (avatar.src = "images/face__light.jpg")
    : (avatar.src = "images/face__dark.jpg"); */
};

export { themesToggle };
