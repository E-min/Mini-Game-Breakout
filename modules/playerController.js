import { platform } from "./objects.js";

const buttons = document.getElementsByClassName('button');
let buttonValues = [];

for (let i = 0; i < buttons.length; i++) {
  buttonValues.push(Number(buttons[i].value)); // push numerical value of each button into an array
}

if (buttonValues[0] === 'up') {
  console.log('up');
}
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
    const velocity = (distance / delta) * 300; // velocity in px/ms
    if (leftPressed) {
      platform.x -= 0.2 * delta;
      platform.velocity.x = -velocity;
    } else {
      platform.velocity <= 0 && (platform.velocity.x = 0);
    }
    if (rightPressed) {
      platform.x += 0.2 * delta;
      platform.velocity.x = velocity;
    } else {
      platform.velocity >= 0 && (platform.velocity.x = 0);
    }
    if (upPressed) {
      platform.y -= 0.2 * delta;
      platform.velocity.y = -velocity;
    } else {
      platform.velocity <= 0 && (platform.velocity.y = 0);
    }
    if (downPressed) {
      platform.y += 0.2 * delta;
      platform.velocity.y = velocity;
    } else {
      platform.velocity <= 0 && (platform.velocity.y = 0);
    }
    // Request the next frame
    requestAnimationFrame(update);
  }
  // Start the update loop
  requestAnimationFrame(update);
}
export default playerController;
