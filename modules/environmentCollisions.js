import { ball } from "./objects.js";

function checkEnvironmentOutlineCollision() {
  // Check top collision
  if (ball.y - ball.radius <= 0) {
    ball.velocity.y *= -ball.elasticity;
    ball.y = ball.radius;
  }
  // Check bottom collision
  if (ball.y + ball.radius > display.height ) {
    ball.velocity.y *= -ball.elasticity;
    // pretend to ball going pass bottom
    ball.y = display.height - ball.radius;
  }
  // Check right collision
  if (ball.x + ball.radius >= display.width) {
    ball.velocity.x *= -ball.elasticity;
    ball.x = display.width - ball.radius;
  }
  // Check left collision
  if (ball.x - ball.radius <= 0) {
    ball.velocity.x *= -ball.elasticity;
    ball.x = 0 + ball.radius;
  }
}
export default checkEnvironmentOutlineCollision;
