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
let contactNav = document.getElementById("cta-nav");
let contactBtn1 = document.getElementById("cta-1");
let contactBtn2 = document.getElementById("cta-2");

navButton.addEventListener("click", function () {
  if (window.scrollY == 0) {
    navbar.classList.toggle("change");
  }
  navMenu.classList.toggle("hidden");
  burger.classList.toggle("hidden");
  close.classList.toggle("hidden");
});

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

contactNav.parentElement.onclick = () => {
  const contactController = application.controllers.filter(
    (ele) => ele.identifier === "contact"
  )[0];
  contactController.openModal();
};
contactBtn1.parentElement.onclick = () => {
  const contactController = application.controllers.filter(
    (ele) => ele.identifier === "contact"
  )[0];
  contactController.openModal();
};
contactBtn2.parentElement.onclick = () => {
  const contactController = application.controllers.filter(
    (ele) => ele.identifier === "contact"
  )[0];
  contactController.openModal();
};
