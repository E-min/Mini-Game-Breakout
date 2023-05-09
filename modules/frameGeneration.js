import checkEnvironmentOutlineCollision from "./environmentCollisions.js";
import checkPlayerCollision from "./playerCollisions.js";
import { drawObjects } from "./drawObjects.js";
import { gravity, display, context, fps } from "./globalVariables.js";
import { ball, platform } from "./objects.js";
import { score } from "./objectsCollisions.js";

function gameStart() {
  // Calculate the time elapsed since the last frame
  const now = Date.now();
  const delta = now - lastFrameTime;
  // Limit the frame rate to the desired FPS
  if (delta >= 1000 / fps) {
    // Clear the canvas
    context.clearRect(0, 0, display.width, display.height);
    //apply air resistance
    if (ball.velocity.x > 0.1 || ball.velocity.x < -0.1) {
      ball.velocity.x > 0 && (ball.velocity.x -= ball.airres);
      ball.velocity.x < 0 && (ball.velocity.x += ball.airres);
    } else {
      // needed for stopping the ball in x axis
      ball.velocity.x = 0;
    }
    //apply gravity
    ball.velocity.y += gravity;
    ///updating movement
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
    checkEnvironmentOutlineCollision();
    checkPlayerCollision(
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );
    drawObjects();
    // Save the time of this frame
    lastFrameTime = now;
  }
  // Request the next frame
  requestAnimationFrame(gameStart);
}
// Start the game Start
var lastFrameTime = Date.now();

export default gameStart;
