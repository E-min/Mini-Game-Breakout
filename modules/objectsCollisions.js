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
    if (ball.velocity.y - gravity <= objBottomCollision - ball.y + ball.radius &&
      ball.y >= objBottomCollision) {
        ball.velocity.y *= -ball.elasticity;
        ball.y = objBottomCollision + ball.radius;
      }
  } else {
    console.log('1');
  }

}
export default checkObjectBoxCollision;

// // Check top collision
// if (
//   ball.y + ball.radius >= objTopCollision &&
//   ball.y + ball.radius <= objTopCollision + objHeight
// ) {
//   ball.velocity.y *= -ball.elasticity;
//   ball.y = objTopCollision - ball.radius;
//   console.log('1');
// }
// // Check bottom collision
// if (
//   ball.y - ball.radius < objBottomCollision &&
//   ball.y - ball.radius > objBottomCollision - objHeight
// ) {
//   // ball.velocity.y *= -ball.elasticity;
//   // ball.y = objBottomCollision + ball.radius;
// }
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