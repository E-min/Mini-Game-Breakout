import { ball, platform } from "./objects.js";
import { gravity } from "./globalVariables.js";

function checkObjectBoxCollision(
  objTopCollision,
  objRightCollision,
  objBottomCollision,
  objLeftCollision,
  objWidth,
  objHeight
) {
  // on y axis let the ball go through when there is no platform on its way
  if (ball.x <= objRightCollision && ball.x >= objLeftCollision) {
    //check if ball will go through the object when velocity is higher than height
    if (
      ball.velocity.y + gravity >= objTopCollision - ball.y - ball.radius &&
      ball.y <= objTopCollision
    ) {
      ball.velocity.y *= -ball.elasticity;
      ball.velocity.y += platform.velocity.y;
      ball.velocity.x += platform.velocity.x;
      ball.y = objTopCollision - ball.radius;
    }
    //check if ball will go through bottom to top of the object
    if (
      ball.velocity.y - gravity <= objBottomCollision - ball.y + ball.radius &&
      ball.y >= objBottomCollision
    ) {
      ball.velocity.y *= -ball.elasticity;
      ball.y = objBottomCollision + ball.radius;
    }
  } else {
  }
}
export default checkObjectBoxCollision;
