import colorearHeader from "./color_header.js";
import hamburgerMenu from "./menu_hamburguer.js";
import responsiveMedia from "./responsive_design.js";

let d = document,
  w = window;

d.addEventListener("DOMContentLoaded", (e) => {
  colorearHeader("headerStatic");
  hamburgerMenu(".panel-btn", "#nav", "#nav a");
  searchFilters(".card-filter", ".col", ".searchButton");
  responsiveMedia("divCards", "(max-width: 1216px)");
  buttonFavs(".favButton", "remove");
});
