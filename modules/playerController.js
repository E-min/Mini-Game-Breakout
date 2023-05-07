import { platform } from "./objects.js";

function playerController() {
  let leftPressed = false;
  let rightPressed = false;
  let upPressed = false;
  let downPressed = false;

  document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowLeft") {
      leftPressed = true;
    } else if (event.code === "ArrowRight") {
      rightPressed = true;
    } else if (event.code === "ArrowUp") {
      upPressed = true;
    } else if (event.code === "ArrowDown") {
      downPressed = true;
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.code === "ArrowLeft") {
      leftPressed = false;
    } else if (event.code === "ArrowRight") {
      rightPressed = false;
    } else if (event.code === "ArrowUp") {
      upPressed = false;
    } else if (event.code === "ArrowDown") {
      downPressed = false;
    }
  });

  let lastFrameTime = performance.now();
  function update() {
    const now = performance.now();
    const delta = now - lastFrameTime;
    lastFrameTime = now;

    const minX = platform.width / 2;
    const maxX = display.width - platform.width / 2;
    const minY = (display.height * 2) / 3 - platform.height / 2;
    const maxY = display.height - platform.height / 2;

    // Clamp the platform's position to within the canvas bounds
    platform.x = Math.max(minX, Math.min(maxX, platform.x));
    platform.y = Math.max(minY, Math.min(maxY, platform.y));

    let distanceX = (rightPressed ? 0.2 : 0) - (leftPressed ? 0.2 : 0);
    let distanceY = (downPressed ? 0.2 : 0) - (upPressed ? 0.2 : 0);
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2); // Pythagorean theorem to get total distance
    const velocity = (distance / delta) * 400; // velocity in px/ms
    if (leftPressed) {
      platform.x -= 0.2 * delta;
      platform.velocity.x = -velocity;
    }
    if (rightPressed) {
      platform.x += 0.2 * delta;
      platform.velocity.x = velocity;
    }
    if (upPressed) {
      platform.y -= 0.2 * delta;
      platform.velocity.y = -velocity;
    }
    if (downPressed) {
      platform.y += 0.2 * delta;
      platform.velocity.y = velocity;
    }
    
    // Request the next frame
    requestAnimationFrame(update);
  }
  // Start the update loop
  requestAnimationFrame(update);
}
//export function mouseMovement() {
//   display.addEventListener("mousemove", function (event) {
//     // Get the canvas's bounding rectangle
//     const canvasRect = display.getBoundingClientRect();
//     // Calculate the mouse's x and y coordinates relative to the canvas
//     const mouseX = event.clientX - canvasRect.left;
//     const mouseY = event.clientY - canvasRect.top;
//     platform.x = mouseX;
//     platform.y = mouseY;
//   });
// }

export default playerController;
