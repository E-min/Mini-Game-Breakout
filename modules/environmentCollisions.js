import { ballHit, failed } from "./audio.js";
import { ball } from "./objects.js";

export let fps = 60;
function checkEnvironmentOutlineCollision() {
  // Check top collision
  if (ball.y - ball.radius <= 0) {
    ball.velocity.y *= -ball.elasticity;
    ball.y = ball.radius;
    ballHit.play();
  }
  // Check bottom collision
  if (ball.y + ball.radius > display.height) {
    failed.play();
    ball.velocity.x = 0;
    setTimeout(() => {
      ball.x = 175;
      ball.y = 175;
      ball.velocity.y = 10;
    }, 1000)
  }
  // Check right collision
  if (ball.x + ball.radius >= display.width) {
    ball.velocity.x *= -ball.elasticity;
    ball.x = display.width - ball.radius;
    ballHit.play();
  }
  // Check left collision
  if (ball.x - ball.radius <= 0) {
    ball.velocity.x *= -ball.elasticity;
    ball.x = 0 + ball.radius;
    ballHit.play();
  }
}
export default checkEnvironmentOutlineCollision;
