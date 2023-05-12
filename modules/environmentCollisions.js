import { ballHit, failed } from "./audio.js";
import { ball, platform } from "./objects.js";

function checkEnvironmentOutlineCollision() {
  // Check top collision
  if (ball.y - ball.radius <= 0) {
    ballHit.play();
    ball.y = ball.radius;
    ball.velocity.y *= -ball.elasticity;
  } else if (ball.y + ball.radius > display.height) {
    // Check bottom collision
    failed.play();
    // Reduce ball velocity to minimize vibration
    ball.velocity.x = 0;
    ball.velocity.y *= 0.8;
    setTimeout(() => {
      ball.x = 175;
      ball.y = 175;
      setTimeout(() => {
        ball.velocity.y = -platform.velocity.y;
      }, 1500);
    }, 500);
  } else if (ball.x + ball.radius >= display.width) {
    // Check right collision
    ballHit.play();
    ball.x = display.width - ball.radius;
    ball.velocity.x *= -ball.elasticity;
  } else if (ball.x - ball.radius <= 0) {
    // Check left collision
    ballHit.play();
    ball.x = 0 + ball.radius;
    ball.velocity.x *= -ball.elasticity;
  }
}
export default checkEnvironmentOutlineCollision;
