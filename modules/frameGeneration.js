import checkEnvironmentOutlineCollision from "./environmentCollisions.js";
import checkPlayerCollision from "./playerCollisions.js";
import { drawObjects } from "./drawObjects.js";
import { display, context} from "./globalVariables.js";
import { ball, platform, rectangular} from "./objects.js";
import { fps } from "./objectsCollisions.js";

// Start the game Start
let lastFrameTime = Date.now();
function gameStart() {
  // Calculate the time elapsed since the last frame
  const now = Date.now();
  const delta = now - lastFrameTime;
  // Limit the frame rate to the desired FPS
  if (delta >= 1000 / fps) {
    context.clearRect(ball.x - ball.radius - 1, ball.y - ball.radius - 1, (ball.radius * 2) + 2, (ball.radius * 2)+ 2);
    context.clearRect(0, platform.y, display.width, platform.height);
    // Clear the canvas
    const maxVelocity = -platform.velocity.y; // Set a maximum velocity value
    // Calculate the magnitude of the ball's velocity vector
    const velocityMag = Math.sqrt(ball.velocity.x ** 2 + ball.velocity.y ** 2);
    // If the magnitude exceeds the maximum value, reduce the velocity
    if (velocityMag > maxVelocity) {
      const scale = maxVelocity / velocityMag;
      ball.velocity.x *= scale;
      ball.velocity.y *= scale;
    }
    ///updating movement
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
    checkEnvironmentOutlineCollision();
    checkPlayerCollision();
    drawObjects();
    // Save the time of this frame
    lastFrameTime = now;
  }
  // Request the next frame
  requestAnimationFrame(gameStart);
}

export default gameStart;
