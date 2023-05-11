import { ball, platform } from "./objects.js";
import { ballHit } from "./audio.js";

function checkPlayerCollision() {
  const objectTop = platform.y;
  const objectBottom = platform.y + platform.height;
  const objectLeft = platform.x;
  const objectRight = platform.x + platform.width;
  
  if (
    ball.y + ball.radius >= objectTop &&
    ball.y - ball.radius <= objectBottom &&
    ball.x - ball.radius <= objectRight &&
    ball.x + ball.radius >= objectLeft
  ) {
    ballHit.play();
    ball.velocity.y = platform.velocity.y;
    ball.velocity.x += platform.velocity.x;
  }
}
export default checkPlayerCollision;
