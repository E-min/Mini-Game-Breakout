import checkEnvironmentOutlineCollision from "./environmentCollisions.js";
import checkPlayerCollision from "./playerCollisions.js";
import { ball, platform } from "./objects.js";
import { gravity, display, context, fps } from "./globalVariables.js";

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
    // mouseMovement();
    checkPlayerCollision(
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );
    console.log(ball.velocity.y, platform.velocity.y);
    //creating ball
    context.fillStyle = ball.color;
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    context.fill();
    // Draw a filled rectangle
    context.fillStyle = platform.color;
    context.fillRect(
      platform.x - platform.width / 2,
      platform.y - platform.height / 2,
      platform.width,
      platform.height
    );
    // Save the time of this frame
    lastFrameTime = now;
  }
  // Request the next frame
  requestAnimationFrame(gameStart);
}
// Start the game Start
var lastFrameTime = Date.now();

export default gameStart;
