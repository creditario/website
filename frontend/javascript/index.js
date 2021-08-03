import "../styles/index.scss";
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start();
const context = require.context("./controllers", true, /.js$/);
application.load(definitionsFromContext(context));

let navbar = document.getElementById("navbar");
let navButton = document.getElementById("navButton");
let navMenu = document.getElementById("navMenu");
let burger = document.getElementById("burger");
let close = document.getElementById("close");

if (navButton) {
  navButton.addEventListener("click", function () {
    if (window.scrollY == 0) {
      navbar.classList.toggle("change");
    }
    navMenu.classList.toggle("hidden");
    burger.classList.toggle("hidden");
    close.classList.toggle("hidden");
  });
}

if (navbar) {
  window.addEventListener("scroll", function () {
    if (
      window.scrollY == 0 &&
      document.getElementById("navbar").classList.contains("change")
    ) {
      navbar.classList.remove("change");
    } else {
      navbar.classList.add("change");
    }
  });
}
