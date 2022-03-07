import { application } from "./application"

import MenuController from "./menu_controller"
application.register("menu", MenuController)

import ModalController from "./modal_controller"
application.register("modal", ModalController)
