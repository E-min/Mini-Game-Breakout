import playerController from "./modules/playerController.js";
import gameStart from "./modules/frameGeneration.js";

const buttonsContainer = document.getElementById("buttons-container");
const info = document.getElementById("info");
//check if users have touchscreen
if ("ontouchstart" in window) {
} else {
  info.innerText = "Info: Use arrow keys to move platform";
  buttonsContainer.remove();
}
playerController();
gameStart();