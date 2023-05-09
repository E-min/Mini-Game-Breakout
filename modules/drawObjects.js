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
    const bottomLocation = object.y + object.height;
    const topLocation = object.y;
    const rightLocation = object.x + object.width;
    const leftLocation = object.x;
    checkObjectBoxCollision(object);
    context.fillStyle = object.color;
    context.fillRect(object.x, object.y, object.width, object.height);
  });

  // ***************************************
  // Draw the rectangle with rounded corners
  context.fillStyle = platform.color;
  context.beginPath();
  context.moveTo(
    platform.x - platform.width / 2 + borderRadius,
    platform.y - platform.height / 2
  );
  context.lineTo(
    platform.x + platform.width / 2 - borderRadius,
    platform.y - platform.height / 2
  );
  context.arcTo(
    platform.x + platform.width / 2,
    platform.y - platform.height / 2,
    platform.x + platform.width / 2,
    platform.y - platform.height / 2 + borderRadius,
    borderRadius
  );
  context.lineTo(
    platform.x + platform.width / 2,
    platform.y + platform.height / 2 - borderRadius
  );
  context.arcTo(
    platform.x + platform.width / 2,
    platform.y + platform.height / 2,
    platform.x + platform.width / 2 - borderRadius,
    platform.y + platform.height / 2,
    borderRadius
  );
  context.lineTo(
    platform.x - platform.width / 2 + borderRadius,
    platform.y + platform.height / 2
  );
  context.arcTo(
    platform.x - platform.width / 2,
    platform.y + platform.height / 2,
    platform.x - platform.width / 2,
    platform.y + platform.height / 2 - borderRadius,
    borderRadius
  );
  context.lineTo(
    platform.x - platform.width / 2,
    platform.y - platform.height / 2 + borderRadius
  );
  context.arcTo(
    platform.x - platform.width / 2,
    platform.y - platform.height / 2,
    platform.x - platform.width / 2 + borderRadius,
    platform.y - platform.height / 2,
    borderRadius
  );
  context.closePath();
  context.fill();
}
