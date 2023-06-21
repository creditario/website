import { Controller } from "@hotwired/stimulus"
import { useTransition } from "stimulus-use"

export default class extends Controller {
  static targets = ["overlay", "modal", "container", "form", "validationAlert", "errorAlert", "submit", "confirmation", "contact"];

  connect() {
    useTransition(this, { element: this.modalTarget })
  }

  contact() {
    this.clearAlert()
    const isValid = this.formTarget.reportValidity()

    if (isValid) {
      this.submitForm()
    } else {
      this.validationAlertTarget.classList.remove("hidden")
    }
  }

  submitForm() {
    const formData = {
      name: this.formTarget.elements[0].value,
      email: this.formTarget.elements[1].value,
      company: this.formTarget.elements[2].value,
      message: this.formTarget.elements[3].value
    }

    const headers = new Headers();
    headers.append("Access-Control-Request-Headers", "Accept, Content-Type");
    headers.append("Access-Control-Request-Method", "POST");
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData)
    }

    this.submitTarget.setAttribute("disabled", true)

    fetch(
      "https://aoorora.com/contact",
      requestOptions
    )
    .then(response => {
      if (response.status === 202) {
        this.formTarget.reset()
        this.clearAlert()

        this.contactTarget.classList.add("hidden")
        this.confirmationTarget.classList.remove("hidden")
      } else if (response.status === 422) {
        this.errorAlertTarget.classList.remove("hidden")
      }

      this.submitTarget.removeAttribute("disabled")
    })
    .catch(() => {
      this.errorAlertTarget.classList.remove("hidden")
      this.submitTarget.removeAttribute("disabled")
    });
  }

  clearAlert() {
    if (!this.validationAlertTarget.classList.contains("hidden")) {
      this.validationAlertTarget.classList.add("hidden")
    }

    if (!this.errorAlertTarget.classList.contains("hidden")) {
      this.errorAlertTarget.classList.add("hidden")
    }
  }

  open(event) {
    event.preventDefault()

    this.configureAnimation(this.overlayTarget, true)

    this.element.classList.toggle("overflow-hidden")
    this.containerTarget.classList.toggle("hidden")
    this.overlayTarget.classList.toggle("hidden")

    this.animate(this.overlayTarget, true)
    this.enter();
  }

  close (event) {
    event.preventDefault()

    this.configureAnimation(this.overlayTarget, false)

    this.leave();
    this.animate(this.overlayTarget, false)

    this.overlayTarget.classList.toggle("hidden")
    this.containerTarget.classList.toggle("hidden")
    this.element.classList.toggle("overflow-hidden")

    this.formTarget.reset()
    this.clearAlert()

    this.contactTarget.classList.remove("hidden")
    this.confirmationTarget.classList.add("hidden")
  }

  animate(element, enter) {
    const enterToClasses = element.dataset["transitionEnterTo"]
    const leaveToClasses = element.dataset["transitionLeaveTo"]

    if (enter) {
      element.classList.remove(leaveToClasses)

      element.classList.add(enterToClasses)
    } else {
      element.classList.remove(enterToClasses)

      element.classList.add(leaveToClasses)
    }
  }

  configureAnimation(element, enter) {
    const enterClasses = element.dataset["transitionEnter"].split(" ")
    const enterActiveClasses = element.dataset["transitionEnterActive"].split(" ")

    const leaveClasses = element.dataset["transitionLeave"].split(" ")
    const leaveActiveClasses = element.dataset["transitionLeaveActive"].split(" ")

    if (enter) {
      element.classList.remove(...leaveClasses)
      element.classList.remove(...leaveActiveClasses)

      element.classList.add(...enterClasses)
      element.classList.add(...enterActiveClasses)
    } else {
      element.classList.remove(...enterClasses)
      element.classList.remove(...enterActiveClasses)

      element.classList.add(...leaveClasses)
      element.classList.add(...leaveActiveClasses)
    }
  }
}
