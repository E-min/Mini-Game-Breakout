import { platform } from "./objects.js";

const buttons = document.querySelectorAll(".button");
// removes info after pressing
buttons.forEach((button) => {
  document.addEventListener("keydown", function handleKeyDown(event) {
    if (
      event.code === "ArrowLeft" ||
      event.code === "ArrowRight" ||
      event.code === "Arrowup" ||
      event.code === "ArrowDown"
    ) {
      const infoElement = document.getElementById("info");
      if (infoElement) {
        infoElement.remove();
        document.removeEventListener("keydown", handleKeyDown);
      }
    }
  });
});

// Loop through each element and attach an event listener
function playerController() {
  // Keyboard booleans
  let leftKeyPressed = false;
  let rightKeyPressed = false;
  let upKeyPressed = false;
  let downKeyPressed = false;

  buttons.forEach((button) => {
    button.addEventListener("touchstart", (event) => {
      switch (event.target.value) {
        case "up":
          upKeyPressed = true;
          break;
        case "down":
          downKeyPressed = true;
          break;
        case "right":
          rightKeyPressed = true;
          break;
        case "left":
          leftKeyPressed = true;
          break;
      }
    });
  });
  buttons.forEach((button) => {
    button.addEventListener("touchend", (event) => {
      switch (event.target.value) {
        case "up":
          upKeyPressed = false;
          break;
        case "down":
          downKeyPressed = false;
          break;
        case "right":
          rightKeyPressed = false;
          break;
        case "left":
          leftKeyPressed = false;
          break;
      }
    });
  });
  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case "ArrowLeft":
        leftKeyPressed = true;
        break;
      case "ArrowRight":
        rightKeyPressed = true;
        break;
      case "ArrowUp":
        upKeyPressed = true;
        break;
      case "ArrowDown":
        downKeyPressed = true;
        break;
    }
  });
  document.addEventListener("keyup", function (event) {
    switch (event.code) {
      case "ArrowLeft":
        leftKeyPressed = false;
        break;
      case "ArrowRight":
        rightKeyPressed = false;
        break;
      case "ArrowUp":
        upKeyPressed = false;
        break;
      case "ArrowDown":
        downKeyPressed = false;
        break;
    }
  });

  let lastFrameTime = performance.now();
  function update() {
    const minX = platform.width / 2;
    const maxX = display.width - platform.width / 2;
    const minY = (display.height * 2) / 3 - platform.height / 2;
    const maxY = display.height - platform.height / 2;

    // Clamp the platform's position to within the canvas bounds
    platform.x = Math.max(minX, Math.min(maxX, platform.x));
    platform.y = Math.max(minY, Math.min(maxY, platform.y));
    const now = performance.now();
    const delta = now - lastFrameTime;
    lastFrameTime = now;

    let distanceX = (rightKeyPressed ? 0.2 : 0) - (leftKeyPressed ? 0.2 : 0);
    let distanceY = (downKeyPressed ? 0.2 : 0) - (upKeyPressed ? 0.2 : 0);
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2); // Pythagorean theorem to get total distance
    const velocity = (distance / delta) * 420; // velocity in px/ms
    movementController(
      leftKeyPressed,
      rightKeyPressed,
      upKeyPressed,
      downKeyPressed,
      velocity,
      delta
    ); // for arrow keys
    // Request the next frame
    requestAnimationFrame(update);
  }
  // Start the update loop
  requestAnimationFrame(update);
}
const movementController = (left, right, up, down, velocity, delta) => {
  if (left) {
    platform.x -= 0.2 * delta;
    platform.velocity.x = -velocity;
  } else {
    platform.velocity.x < 0 && (platform.velocity.x = 2);
  }
  if (right) {
    platform.x += 0.2 * delta;
    platform.velocity.x = velocity;
  } else {
    platform.velocity.x > 0 && (platform.velocity.x = 0);
  }
  if (up) {
    platform.y -= 0.2 * delta;
    platform.velocity.y = -velocity;
  } else {
    platform.velocity.y < 0 && (platform.velocity.y = 0);
  }
  if (down) {
    platform.y += 0.2 * delta;
    platform.velocity.y = velocity;
  } else {
    platform.velocity.y > 0 && (platform.velocity.y = 0);
  }
};
export default playerController;
