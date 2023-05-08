import { platform } from "./objects.js";
// Select all elements with the class "my-element"
const buttons = document.querySelectorAll('.button');

// Loop through each element and attach an event listener
function playerController() {
  // Keyboard booleans
  let leftKeyPressed = false;
  let rightKeyPressed = false;
  let upKeyPressed = false;
  let downKeyPressed = false;
  // Button booleans 
  let leftButtonPressed = false;
  let rightButtonPressed = false;
  let upButtonPressed = false;
  let downButtonPressed = false;
  
  buttons.forEach((button) => {
    button.addEventListener('touchstart', (event) => {
      switch(event.target.value) {
        case 'up':
          upButtonPressed = true;
          break;
        case 'down':
          downButtonPressed = true;
          break;
        case 'right':
          rightButtonPressed = true;
          break;
        case 'left':
          leftButtonPressed = true;
          break;
      }
    });
  });
  buttons.forEach((button) => {
    button.addEventListener('touchend', (event) => {
      switch(event.target.value) {
        case 'up':
          upButtonPressed = false;
          break;
        case 'down':
          downButtonPressed = false;
          break;
        case 'right':
          rightButtonPressed = false;
          break;
        case 'left':
          leftButtonPressed = false;
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
    const velocity = (distance / delta) * 300; // velocity in px/ms
    movementController(leftKeyPressed, rightKeyPressed, upKeyPressed, downKeyPressed, velocity, delta); // for arrow keys
    movementController(leftButtonPressed, rightButtonPressed, upButtonPressed, downButtonPressed, velocity, delta) // for button conttrols
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
    platform.velocity <= 0 && (platform.velocity.x = 0);
  }
  if (right) {
    platform.x += 0.2 * delta;
    platform.velocity.x = velocity;
  } else {
    platform.velocity >= 0 && (platform.velocity.x = 0);
  }
  if (up) {
    platform.y -= 0.2 * delta;
    platform.velocity.y = -velocity;
  } else {
    platform.velocity <= 0 && (platform.velocity.y = 0);
  }
  if (down) {
    platform.y += 0.2 * delta;
    platform.velocity.y = velocity;
  } else {
    platform.velocity <= 0 && (platform.velocity.y = 0);
  }
}
export default playerController;
