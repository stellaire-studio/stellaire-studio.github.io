import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
import ProfilesController from "./controllers/profiles_controller.js";

const application = Application.start();

application.register("profiles", ProfilesController);
