import checkEnvironmentOutlineCollision from "./environmentCollisions.js";
import checkPlayerCollision from "./playerCollisions.js";
import { drawObjects } from "./drawObjects.js";
import { display, context} from "./globalVariables.js";
import { ball, platform} from "./objects.js";
import { fps } from "./environmentCollisions.js";

// Start the game Start
let lastFrameTime = Date.now();
function gameStart() {
  // Calculate the time elapsed since the last frame
  const now = Date.now();
  const delta = now - lastFrameTime;
  // Limit the frame rate to the desired FPS
  if (delta >= 1000 / fps) {
    // Clear the canvas
    context.clearRect(0, 0, display.width, display.height);
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
