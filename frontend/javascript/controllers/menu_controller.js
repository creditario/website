import { Controller } from "stimulus";
import { useTransition } from "stimulus-use"

export default class extends Controller {
  static targets = ["menu"];

  toggleMenu(event) {
    event.preventDefault();

    this.menuTarget.classList.toggle("hidden");
  }

  connect() {
    useTransition(this, { element: this.menuTarget });
  }
}
