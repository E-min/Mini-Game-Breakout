import checkObjectBoxCollision from "./objectsCollisions.js";
import { ball,platform } from "./objects.js";
import { rectangular } from "./objects.js";
function checkPlayerCollision(xaxis, yaxis, width, height) {
  const bottomLocation = yaxis - height / 2;
  const topLocation = yaxis + height / 2;
  const rightLocation = xaxis + width / 2;
  const leftLocation = xaxis - width / 2;
  checkObjectBoxCollision(platform);
  if (
    ball.y + ball.radius >= bottomLocation &&
    ball.y - ball.radius <= topLocation &&
    ball.x - ball.radius <= rightLocation &&
    ball.x + ball.radius >= leftLocation
  ) {
    
    ball.velocity.y += platform.velocity.y;
    ball.velocity.x += platform.velocity.x;
  }
}
export default checkPlayerCollision;
