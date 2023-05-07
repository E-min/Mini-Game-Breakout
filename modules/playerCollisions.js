import checkObjectBoxCollision from "./objectsCollisions.js";
import { ball } from "./objects.js";
import { gravity } from "./globalVariables.js";

function checkPlayerCollision(xaxis, yaxis, width, height) {
  const bottomLocation = yaxis - height / 2;
  const topLocation = yaxis + height / 2;
  const rightLocation = xaxis + width / 2;
  const leftLocation = xaxis - width / 2;
  // let the ball go through when there is no platform on its way
  if (ball.x <= rightLocation && ball.x >= leftLocation) {
    //check if ball will go through the object when velocity is higher than height
    if (
      ball.velocity.y + gravity > topLocation - (ball.y - ball.radius) &&
      ball.y <= topLocation
    ) {
      ball.velocity.y *= -ball.elasticity;
      ball.y = topLocation - ball.radius * 2;
    }

    //check if ball will go through bottom of the object
    // if (ball.velocity.y + gravity > topLocation - (ball.y - ball.radius)) {
    //   ball.velocity.y *= -ball.elasticity;
    //   ball.y = topLocation - (ball.radius * 2 )
    // }
  }
  if (
    ball.y + ball.radius >= bottomLocation &&
    ball.y - ball.radius <= topLocation &&
    ball.x - ball.radius <= rightLocation &&
    ball.x + ball.radius >= leftLocation
  ) {
    checkObjectBoxCollision(
      bottomLocation,
      rightLocation,
      topLocation,
      leftLocation,
      width,
      height
    );
  }
}
export default checkPlayerCollision;
