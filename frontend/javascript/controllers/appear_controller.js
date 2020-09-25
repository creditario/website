import { Controller } from "stimulus";
import { useIntersection } from "stimulus-use";

export default class extends Controller {
  static targets = [];

  options = {
    threshold: [0, 0.25, 0.5, 0.75, 1],
  };

  connect() {
    this.visible = false;
    useIntersection(this, this.options);
  }

  appear({ intersectionRatio }) {
    if (!this.visible) {
      this.visible = true;
      this.element.classList.add("fade-in-up__animate");
    }
  }
}
