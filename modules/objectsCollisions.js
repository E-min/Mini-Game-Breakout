import { ball } from "./objects.js";

function checkObjectBoxCollision(
  objTopCollision,
  objRightCollision,
  objBottomCollision,
  objLeftCollision,
  objWidth,
  objHeight
) {
  // Check top collision
  if (
    ball.y + ball.radius > objTopCollision &&
    ball.y + ball.radius < objTopCollision + objHeight
  ) {
    ball.velocity.y *= -ball.elasticity;
    ball.y = objTopCollision - ball.radius;
  }
  // Check bottom collision
  if (
    ball.y - ball.radius < objBottomCollision &&
    ball.y - ball.radius > objBottomCollision - objHeight
  ) {
    ball.velocity.y *= -ball.elasticity;
    ball.y = objBottomCollision + ball.radius;
  }
  // // Check right collision
  // if (ball.x + ball.radius <= objRightCollision && ball.x + ball.radius >= objRightCollision) {
  //     ball.velocity.x *= -ball.elasticity;;
  //     ball.x = objRightCollision + ball.radius;
  //   }
  // // Check left collision
  // if (ball.x + ball.radius <= 0) {
  //   ball.velocity.x *= -ball.elasticity;;
  //     ball.x = 0 + ball.radius;
  //   }
}
export default checkObjectBoxCollision;
