import { ball, rectangular } from "./objects.js";
import { boxHit, won } from "./audio.js";
import { fps } from "./environmentCollisions.js";

const infoScore = document.getElementById("score");
let score = 0;

function handleCollision(object) {
  if (score === 45) {
    won.play();
    fps = 0;
  }
  const index = rectangular.indexOf(object);
  rectangular.splice(index, 1);
  score++;
  infoScore.innerText = score;
  boxHit.play();
}
function checkObjectBoxCollision(object) {
  const objectTop = object.y - ball.radius;
  const objectBottom = object.y + object.height + ball.radius;
  const objectLeft = object.x + ball.radius;
  const objectRight = object.x + object.width - ball.radius;

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

export { score };
export default checkObjectBoxCollision;
