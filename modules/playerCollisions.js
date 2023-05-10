import checkObjectBoxCollision from "./objectsCollisions.js";
import { ball,platform } from "./objects.js";
function checkPlayerCollision() {
  const objectTop = platform.y;
  const objectBottom = platform.y + platform.height;
  const objectLeft = platform.x;
  const objectRight = platform.x + platform.width;
  checkObjectBoxCollision(platform);
  if (
    ball.y + ball.radius >= objectTop &&
    ball.y - ball.radius <= objectBottom &&
    ball.x - ball.radius <= objectRight &&
    ball.x + ball.radius >= objectLeft
  ) {
    ball.velocity.y += platform.velocity.y;
    ball.velocity.x += platform.velocity.x;
  }
}
export default checkPlayerCollision;
