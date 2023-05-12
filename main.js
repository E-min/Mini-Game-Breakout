import playerController from "./modules/playerController.js";
import gameStart from "./modules/frameGeneration.js";

import { rectangular } from "./modules/objects.js";
import { context } from "./modules/globalVariables.js";

const buttonsContainer = document.getElementById("buttons-container");
const info = document.getElementById("info");
//check if users have touchscreen
if ("ontouchstart" in window) {
} else {
  info.innerText = "Info: Use arrow keys to move platform";
  buttonsContainer.remove();
}
 //****************************************
  // draw target boxes one time only
  rectangular.forEach((object) => {
    context.fillStyle = object.color;
    context.fillRect(object.x, object.y, object.width, object.height);
  });
playerController();
gameStart();
