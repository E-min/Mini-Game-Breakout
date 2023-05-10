import { ball, rectangular } from "./objects.js";
import { ballHit, boxHit, won } from "./audio.js";

const infoScore = document.getElementById("score");
let score = 0;

function handleCollision(object) {
  if (object.type === "player") {
    ballHit.play();
    return;
  }
  if(score === 45) {
    won.play();
  }
  const index = rectangular.indexOf(object);
  rectangular.splice(index, 1);
  score++;
  infoScore.innerText = score;
  boxHit.play();
}
function checkObjectBoxCollision(object) {
  const objectTop = object.y;
  const objectBottom = object.y + object.height;
  const objectLeft = object.x;
  const objectRight = object.x + object.width;

  if (ball.x > objectRight + ball.radius || ball.x < objectLeft - ball.radius) {
    // No collision on x-axis
    return;
  }

  if (ball.y > objectBottom + ball.radius || ball.y < objectTop - ball.radius) {
    // No collision on y-axis
    return;
  }

  if (ball.y >= objectTop && ball.y <= objectBottom) {
    // Ball is within object height

    if (ball.x <= objectLeft) {
      // Left collision
        ball.velocity.x *= -ball.elasticity;
        ball.x = objectLeft - ball.radius;
        handleCollision(object);
    } else if (ball.x >= objectRight) {
      // Right collision
        ball.velocity.x *= -ball.elasticity;
        ball.x = objectRight + ball.radius;
        handleCollision(object);
    }
  } else if (ball.y <= objectTop) {
    // Top collision
      ball.velocity.y *= -ball.elasticity;
      ball.y = objectTop - ball.radius;
      handleCollision(object);
  } else if (ball.y >= objectBottom) {
    // Bottom collision
      ball.velocity.y *= -ball.elasticity;
      ball.y = objectBottom + ball.radius;
      handleCollision(object);
  }
}

export { score };
export default checkObjectBoxCollision;
