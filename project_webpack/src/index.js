import { run } from "./app/app";

import { AlertService } from "./app/utils/alert.service";
import { ComponentService } from "./app/utils/component.service";

import "./main.scss";


const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);


