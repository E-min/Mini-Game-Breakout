import { platform } from "./objects.js";

const buttons = document.querySelectorAll(".button");

// removes info after pressing
buttons.forEach((button) => {
  document.addEventListener("keydown", function handleKeyDown(event) {
    if (
      event.code === "ArrowLeft" ||
      event.code === "ArrowRight" 
    ) {
      const infoElement = document.getElementById("info");
      if (infoElement) {
        infoElement.remove();
        document.removeEventListener("keydown", handleKeyDown);
      }
    }
  });
});

function playerController() {
  let leftKeyPressed = false;
  let rightKeyPressed = false;

  buttons.forEach((button) => {
    button.addEventListener("touchstart", (event) => {
      switch (event.target.value) {
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
    }
  });

  let lastFrameTime = performance.now();
  function update() {
    const minX = 0;
    const maxX = display.width - platform.width;
    const minY = (display.height * 2) / 3 - platform.height;
    const maxY = display.height - platform.height;

    // Clamp the platform's position to within the canvas bounds
    platform.x = Math.max(minX, Math.min(maxX, platform.x));
    platform.y = Math.max(minY, Math.min(maxY, platform.y));
    const now = performance.now();
    const delta = now - lastFrameTime;
    lastFrameTime = now;
    const velocity = 7; // velocity in px/ms
    movementController(
      leftKeyPressed,
      rightKeyPressed,
      velocity,
      delta
    ); // for arrow keys
    // Request the next frame
    requestAnimationFrame(update);
  }
  // Start the update loop
  requestAnimationFrame(update);
}

const movementController = (left, right, velocity, delta) => {
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
};
export default playerController;
