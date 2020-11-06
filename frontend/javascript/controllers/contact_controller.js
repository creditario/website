import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [
    "modal",
    "form",
    "title",
    "name",
    "company",
    "email",
    "message",
    "cancel",
  ];

  openModal(e) {
    e.preventDefault();
    this.element.style.overflowY = "hidden";
    this.modalTarget.classList.remove("hidden");
  }

  showError(input, msg, title) {
    if (title) {
      if (!input.nextElementSibling.classList.contains("text-red-500")) {
        msg.forEach((element, index) => {
          let errorParagraph = document.createElement("p");
          errorParagraph.classList.add(
            "text-red-500",
            "text-xs",
            "m-0",
            "font-normal"
          );
          errorParagraph.textContent = element;
          input.parentElement.insertBefore(
            errorParagraph,
            input.parentElement.children[index + 1]
          );
        });
      }
    } else {
      const errorParagraph = document.createElement("p");
      errorParagraph.id = "errorParagraph";
      errorParagraph.classList.add("text-red-500", "text-xs", "font-normal");
      errorParagraph.textContent = msg;
      input.classList.add("border-red-500");

      if (!input.nextElementSibling) {
        input.parentElement.appendChild(errorParagraph);
      }
    }
  }

  validate(e) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.value.length > 0) {
      if (e.target.name === "email") {
        if (!regex.test(e.target.value)) {
          e.target.classList.add("border-red-500");

          if (!document.getElementById("errorParagraph")) {
            this.showError(
              e.target,
              `El correo electrónico debe contener el formato my@email.com`
            );
          } else {
            document.getElementById(
              "errorParagraph"
            ).textContent = `El correo electrónico debe contener el formato my@email.com`;
          }
        } else {
          if (e.target.classList.contains("border-red-500")) {
            e.target.classList.remove("border-red-500");
            document.getElementById("errorParagraph").remove();
          }
        }
      } else {
        if (e.target.classList.contains("border-red-500")) {
          e.target.classList.remove("border-red-500");
          document.getElementById("errorParagraph").remove();
        }
      }
    }
  }

  send(e) {
    e.preventDefault();

    if (this.nameTarget.value.length === 0) {
      this.showError(this.nameTarget, "El nombre es requerido");
    }
    if (this.companyTarget.value.length === 0) {
      this.showError(this.companyTarget, "La empresa es requerida");
    }
    if (this.emailTarget.value.length === 0) {
      this.showError(this.emailTarget, "El correo electrónico es requerido");
    }

    if (
      this.nameTarget.value.length !== 0 &&
      this.companyTarget.value.length !== 0 &&
      this.emailTarget.value.length !== 0 &&
      !document.getElementById("errorParagraph")
    ) {
      const data = {
        name: this.nameTarget.value.trim(),
        company: this.companyTarget.value.trim(),
        email: this.emailTarget.value.trim(),
        message: this.messageTarget.value.trim(),
      };
      this.contactRequest(data, this);
    }
  }

  contactRequest(data, thisClass) {
    const headers = new Headers();
    headers.append("Access-Control-Request-Headers", "Accept, Content-Type");
    headers.append("Access-Control-Request-Method", "POST");
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    const dataStr = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: headers,
      body: dataStr,
      redirect: "follow",
    };

    fetch(
      "https://7iplakas91.execute-api.us-east-2.amazonaws.com/production/",
      requestOptions
    )
      .then(async (response) => {
        return (data = {
          response,
          data: await response.json(),
        });
      })
      .then((data) => {
        if (data.response.status === 202) {
          thisClass.cancelTarget.click();
        }
        if (data.response.status === 422) {
          thisClass.showError(
            thisClass.titleTarget,
            Object.values(data.data.error),
            true
          );
        }
      })
      .catch((error) => {
        thisClass.showError(
          thisClass.titleTarget,
          [
            "Por el momento la solicitud no puede ser procesada. Por favor intenta más tarde",
          ],
          true
        );
      });
  }

  closeModal(e) {
    e.preventDefault();

    const titleErrors = [
      ...this.titleTarget.parentElement.children,
    ].filter((ele) => ele.classList.contains("text-red-500"));

    this.modalTarget.classList.add("hidden");
    if (this.nameTarget.classList.contains("border-red-500")) {
      this.nameTarget.classList.remove("border-red-500");
      document.getElementById("errorParagraph").remove();
    }
    if (this.companyTarget.classList.contains("border-red-500")) {
      this.companyTarget.classList.remove("border-red-500");
      document.getElementById("errorParagraph").remove();
    }
    if (this.emailTarget.classList.contains("border-red-500")) {
      this.emailTarget.classList.remove("border-red-500");
      document.getElementById("errorParagraph").remove();
    }
    if (titleErrors.length > 0) {
      titleErrors.forEach((ele) => ele.remove());
    }

    this.formTarget.reset();
    this.element.style.overflowY = "auto";
  }
}
