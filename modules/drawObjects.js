import { ball, platform } from "./objects.js";
import { context } from "./globalVariables.js";

export function drawObjects () {
     //creating ball
     context.fillStyle = ball.color;
     context.beginPath();
     context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
     context.fill();
     const borderRadius = 5; // Set the border radius to 10 pixels
 
     context.fillStyle = platform.color;
 
     // Draw the rectangle with rounded corners
     context.beginPath();
     context.moveTo(
       platform.x - platform.width / 2 + borderRadius,
       platform.y - platform.height / 2
     );
     context.lineTo(
       platform.x + platform.width / 2 - borderRadius,
       platform.y - platform.height / 2
     );
     context.arcTo(
       platform.x + platform.width / 2,
       platform.y - platform.height / 2,
       platform.x + platform.width / 2,
       platform.y - platform.height / 2 + borderRadius,
       borderRadius
     );
     context.lineTo(
       platform.x + platform.width / 2,
       platform.y + platform.height / 2 - borderRadius
     );
     context.arcTo(
       platform.x + platform.width / 2,
       platform.y + platform.height / 2,
       platform.x + platform.width / 2 - borderRadius,
       platform.y + platform.height / 2,
       borderRadius
     );
     context.lineTo(
       platform.x - platform.width / 2 + borderRadius,
       platform.y + platform.height / 2
     );
     context.arcTo(
       platform.x - platform.width / 2,
       platform.y + platform.height / 2,
       platform.x - platform.width / 2,
       platform.y + platform.height / 2 - borderRadius,
       borderRadius
     );
     context.lineTo(
       platform.x - platform.width / 2,
       platform.y - platform.height / 2 + borderRadius
     );
     context.arcTo(
       platform.x - platform.width / 2,
       platform.y - platform.height / 2,
       platform.x - platform.width / 2 + borderRadius,
       platform.y - platform.height / 2,
       borderRadius
     );
     context.closePath();
 
     context.fill();
 
}