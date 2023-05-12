import { ball, rectangular } from "./objects.js";
import { boxHit, won } from "./audio.js";
import { context, infoScore } from "./globalVariables.js";

let score = 0;
let fps = 60;

function handleCollision(object) {
  // clear rectangular when it gets hit
  context.clearRect(object.x, object.y, object.width, object.height);
  boxHit.play();
  score++;
  const index = rectangular.indexOf(object);
  rectangular.splice(index, 1);
  infoScore.innerText = score;
  if (score === 46) {
    won.play();
    fps = 0;
    return;
  }
}
function checkObjectBoxCollision(object) {
  const objectTop = object.y - ball.radius;
  const objectBottom = object.y + object.height + ball.radius;
  const objectLeft = object.x - ball.radius;
  const objectRight = object.x + object.width + ball.radius;

  if (ball.x > objectRight + ball.radius || ball.x < objectLeft - ball.radius) {
    return; // exit from function if ball outside of plaftom's x axis
  }
  if (ball.y > objectBottom + ball.radius || ball.y < objectTop - ball.radius) {
    return; // exit from function if ball outside of plaftom's y axis
  }
  if (ball.y >= objectTop && ball.y <= objectBottom) {
    // Ball is within object height
    if (ball.x <= objectLeft) {
      // Left collision
      ball.velocity.x = -ball.velocity.x;
      handleCollision(object);
    } else if (ball.x >= objectRight) {
      // Right collision
      ball.velocity.x = -ball.velocity.x;
      handleCollision(object);
    }
  } else if (ball.y <= objectTop) {
    // Top collision
    ball.velocity.y = -ball.velocity.y;
    handleCollision(object);
  } else if (ball.y >= objectBottom) {
    // Bottom collision
    ball.velocity.y = -ball.velocity.y;
    handleCollision(object);
  }
}

export { score, fps };
export default checkObjectBoxCollision;
