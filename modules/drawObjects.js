import { ball, platform, rectangular } from "./objects.js";
import { context } from "./globalVariables.js";
import checkObjectBoxCollision from "./objectsCollisions.js";

export function drawObjects() {
  //****************************************
  //creating ball
  context.fillStyle = ball.color;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  context.fill();
  const borderRadius = 5; // Set the border radius to 10 pixels
  //****************************************
  // draw target boxes
  rectangular.forEach((object) => {
    checkObjectBoxCollision(object);
    context.fillStyle = object.color;
    context.fillRect(object.x, object.y, object.width, object.height);
  });
  // ***************************************
  // Draw the rectangle with rounded corners
  context.fillStyle = platform.color;
  context.beginPath();
  context.fillRect(platform.x, platform.y, platform.width, platform.height)
}
