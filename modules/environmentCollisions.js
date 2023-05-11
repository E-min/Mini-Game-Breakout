import { ballHit, failed } from "./audio.js";
import { ball, platform } from "./objects.js";

export let fps = 60;
function checkEnvironmentOutlineCollision() {
  // Check top collision
  if (ball.y - ball.radius <= 0) {
    ball.velocity.y *= -ball.elasticity;
    ball.y = ball.radius;
    ballHit.play();
  } else if (ball.y + ball.radius > display.height) { // Check bottom collision
  failed.play();
  // Reduce ball velocity to minimize vibration
  ball.velocity.x = 0;
  ball.velocity.y = 0;
  setTimeout(() => {
    ball.x = 175;
    ball.y = 175;
    setTimeout(() => {
      ball.velocity.y = -platform.velocity.y;
    }, 1000);
  }, 1000);
} else if (ball.x + ball.radius >= display.width) {// Check right collision
    ball.velocity.x *= -ball.elasticity;
    ball.x = display.width - ball.radius;
    ballHit.play();
  } else if (ball.x - ball.radius <= 0) { // Check left collision
    ball.velocity.x *= -ball.elasticity;
    ball.x = 0 + ball.radius;
    ballHit.play();
  }
}
export default checkEnvironmentOutlineCollision;
