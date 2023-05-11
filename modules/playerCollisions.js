import { ball, platform } from "./objects.js";
import { ballHit } from "./audio.js";

function checkPlayerCollision() {
  const objectTop = platform.y;
  const objectBottom = platform.y + platform.height;
  const objectLeft = platform.x;
  const objectRight = platform.x + platform.width;
  if (ball.x > objectRight + ball.radius || ball.x < objectLeft - ball.radius) {
    return; // exit from function if ball outside of plaftom's x axis
  }
  if (ball.y > objectBottom + ball.radius || ball.y < objectTop - ball.radius) {
    return; // exit from function if ball outside of plaftom's y axis
  }
  if (
    ball.y + ball.radius >= objectTop &&
    ball.y - ball.radius <= objectBottom &&
    ball.x - ball.radius <= objectRight &&
    ball.x + ball.radius >= objectLeft
  ) {
    ball.y = objectTop - ball.radius
    ballHit.play();
    ball.velocity.y = platform.velocity.y;
    ball.velocity.x += platform.velocity.x;
  }
}
export default checkPlayerCollision;
