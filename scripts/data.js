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
const menuTitles = Array.from(document.querySelectorAll(".main__title"));
const avatar = document.querySelector(".header__avatar");
const wrapperAbout = document.getElementById("about");
const mainScreenContainer = document.querySelector(".life__screen");
const colors = ["#fbfef9", "#bf1363"];

/* const colors = [
  "#bf1363",
  "#0e79b2",
  "#fbfef9",
  "#d9534d",
  "#67468b",
  "#f49c49",
];
 */



export {
  themesButton,
  langButtons,
  pageBody,
  sunBlock,
  moonBlock,
  title,
  portfolioLinks,
  avatar,
  menuTitles,
  wrapperAbout,
  colors,
  mainScreenContainer,
};
