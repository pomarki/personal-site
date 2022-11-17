const themesButton = document.getElementById("themes-button");
const langButtons = Array.from(
  document.querySelectorAll(".header__language-selector")
);
const pageBody = document.querySelector(".body");
const sunBlock = document.querySelector(".header__themes-indicator_sun_light");
const moonBlock = document.querySelector(
  ".header__themes-indicator_moon_light"
);
const title = document.querySelector(".header__title");
const portfolioLinks = Array.from(
  document.querySelectorAll(".portfolio__site_name")
);
const avatar = document.querySelector(".header__avatar");

export { themesButton, langButtons, pageBody, sunBlock, moonBlock, title, portfolioLinks, avatar };
