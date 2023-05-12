import { ball, platform } from "./objects.js";
import { ballHit } from "./audio.js";

function checkPlayerCollision() {
  const objectTop = platform.y - ball.radius;
  const objectBottom = platform.y + platform.height + ball.radius;
  const objectLeft = platform.x - ball.radius;
  const objectRight = platform.x + platform.width + ball.radius;
  if (ball.x > objectRight || ball.x < objectLeft) {
    return; // exit from function if ball outside of plaftom's x axis
  }
  if (ball.y > objectBottom || ball.y < objectTop) {
    return; // exit from function if ball outside of plaftom's y axis
  }
  ballHit.play();
  if (ball.y >= objectTop && ball.x <= objectLeft && ball.x >= objectRight) {
    ball.y = objectTop;
  };
  ball.velocity.y = platform.velocity.y;
  ball.velocity.x += platform.velocity.x;
}
export default checkPlayerCollision;
