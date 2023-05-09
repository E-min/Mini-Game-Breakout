import { ball, rectangular } from "./objects.js";
import { gravity} from "./globalVariables.js";
const infoScore = document.getElementById('score');
let score = 0;
function checkObjectBoxCollision(object) {
  const bottomLocation = object.y + object.height;
  const topLocation = object.y;
  const rightLocation = object.x + object.width;
  const leftLocation = object.x;
  // on y axis let the ball go through when there is no platform on its way
  if (ball.x <= rightLocation && ball.x >= leftLocation) {
    //check if ball will go through the object when velocity is higher than height
    if (
      ball.velocity.y + gravity >= topLocation - ball.y - ball.radius &&
      ball.y + ball.radius <= topLocation
    ) {
      if (object.type !== 'player') {
        const index = rectangular.indexOf(object);
        rectangular.splice(index, 1);
        score++;
        infoScore.innerText = score;
      }
      ball.velocity.y *= -ball.elasticity;
      ball.y = topLocation - ball.radius;
    }
    //check if ball will go through bottom to top of the object
    if (
      ball.velocity.y - gravity <= bottomLocation - ball.y + ball.radius &&
      ball.y - ball.radius >= bottomLocation
    ) {
      if (object.type !== 'player') {
        const index = rectangular.indexOf(object);
        rectangular.splice(index, 1);
        score++;
        infoScore.innerText = score;
      }
      ball.velocity.y *= -ball.elasticity;
      ball.y = bottomLocation + ball.radius;
    }
  } else if (ball.y > topLocation && ball.y < bottomLocation) {
    //right collision
    if (
      ball.velocity.x <= rightLocation - ball.x + ball.radius &&
      ball.x - ball.radius >= rightLocation
    ) {
      if (object.type !== 'player') {
        const index = rectangular.indexOf(object);
        rectangular.splice(index, 1);
        score++;
        infoScore.innerText = score;
      }
      ball.velocity.x *= -ball.elasticity;
      ball.x = rightLocation + ball.radius;
    }
    //left collision
    if (
      ball.velocity.x >= leftLocation - ball.x - ball.radius &&
      ball.x + ball.radius <= leftLocation
    ) {
      if (object.type !== 'player') {
        const index = rectangular.indexOf(object);
        rectangular.splice(index, 1);
        score++;
        infoScore.innerText = score;
      }
      ball.velocity.x *= -ball.elasticity;
      ball.x = leftLocation - ball.radius;
    }
  }
}
export {score}
export default checkObjectBoxCollision;
