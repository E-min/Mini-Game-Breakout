import checkObjectBoxCollision from "./objectsCollisions.js";
import { ball, platform } from "./objects.js";
import { gravity } from "./globalVariables.js";

function checkPlayerCollision(xaxis, yaxis, width, height) {
  const bottomLocation = yaxis - height / 2;
  const topLocation = yaxis + height / 2;
  const rightLocation = xaxis + width / 2;
  const leftLocation = xaxis - width / 2;
  checkObjectBoxCollision(
    bottomLocation,
    rightLocation,
    topLocation,
    leftLocation,
    width,
    height
  );
}
export default checkPlayerCollision;
