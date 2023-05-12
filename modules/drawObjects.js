import { ball, platform, rectangular } from "./objects.js";
import { context } from "./globalVariables.js";
import checkObjectBoxCollision from "./objectsCollisions.js";

export function drawTargetBoxes() {
  // draw target boxes one time only
  rectangular.forEach((object) => {
    context.fillStyle = object.color;
    context.fillRect(object.x, object.y, object.width, object.height);
  });
}
export function drawObjects() {
  //****************************************
  //creating ball
  context.fillStyle = ball.color;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  context.fill();
  //****************************************
  // draw target boxes collision
  rectangular.forEach((object) => {
    checkObjectBoxCollision(object);
  });
  // ***************************************
  // Draw the rectangle with rounded corners
  context.fillStyle = platform.color;
  context.beginPath();
  context.fillRect(platform.x, platform.y, platform.width, platform.height);
}
