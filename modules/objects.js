const ball = {
  x: 175,
  y: 430,
  color: "red",
  radius: 10,
  elasticity: 0.9,
  velocity: { x: 0, y: 0 },
  airres: 0.0,
};
export const platform = {
  x: 175,
  y: 450,
  width: 50,
  height: 12,
  color: "black",
  velocity: { x: 0, y: 0 },
};
// apply elasticity selection values 
const selectedElasticity = document.getElementById("elasticity");
selectedElasticity.addEventListener("change", function () {
  ball.elasticity =
    +selectedElasticity.options[selectedElasticity.selectedIndex].value;
});

export { ball };
