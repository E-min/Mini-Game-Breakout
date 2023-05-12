const ball = {
  x: 175,
  y: 350,
  color: "red",
  radius: 7,
  elasticity: 1,
  velocity: { x: 0, y: 7 },
  airres: 0.0,
};
export const platform = {
  x: 155,
  y: 450,
  width: 50,
  height: 10,
  color: "black",
  velocity: { x: 0, y: -7 },
  type: "player",
};
export const rectangular = [
  {
    x: 20,
    y: 20,
    width: 40,
    height: 15,
    color: "darkred",
    id: 0,
    type: "target",
  },
  {
    x: 65,
    y: 20,
    width: 40,
    height: 15,
    color: "darkred",
    id: 1,
    type: "target",
  },
  {
    x: 110,
    y: 20,
    width: 40,
    height: 15,
    color: "darkred",
    id: 2,
    type: "target",
  },
  {
    x: 155,
    y: 20,
    width: 40,
    height: 15,
    color: "darkred",
    id: 3,
    type: "target",
  },
  {
    x: 200,
    y: 20,
    width: 40,
    height: 15,
    color: "darkred",
    id: 4,
    type: "target",
  },
  {
    x: 245,
    y: 20,
    width: 40,
    height: 15,
    color: "darkred",
    id: 5,
    type: "target",
  },
  {
    x: 290,
    y: 20,
    width: 40,
    height: 15,
    color: "darkred",
    id: 6,
    type: "target",
  },
  {
    x: 40,
    y: 40,
    width: 40,
    height: 15,
    color: "orange",
    id: 7,
    type: "target",
  },
  {
    x: 85,
    y: 40,
    width: 40,
    height: 15,
    color: "orange",
    id: 8,
    type: "target",
  },
  {
    x: 130,
    y: 40,
    width: 40,
    height: 15,
    color: "orange",
    id: 9,
    type: "target",
  },
  {
    x: 175,
    y: 40,
    width: 40,
    height: 15,
    color: "orange",
    id: 10,
    type: "target",
  },
  {
    x: 220,
    y: 40,
    width: 40,
    height: 15,
    color: "orange",
    id: 11,
    type: "target",
  },
  {
    x: 265,
    y: 40,
    width: 40,
    height: 15,
    color: "orange",
    id: 12,
    type: "target",
  },
  {
    x: 20,
    y: 60,
    width: 40,
    height: 15,
    color: "yellow",
    id: 13,
    type: "target",
  },
  {
    x: 65,
    y: 60,
    width: 40,
    height: 15,
    color: "yellow",
    id: 14,
    type: "target",
  },
  {
    x: 110,
    y: 60,
    width: 40,
    height: 15,
    color: "yellow",
    id: 15,
    type: "target",
  },
  {
    x: 155,
    y: 60,
    width: 40,
    height: 15,
    color: "yellow",
    id: 16,
    type: "target",
  },
  {
    x: 200,
    y: 60,
    width: 40,
    height: 15,
    color: "yellow",
    id: 17,
    type: "target",
  },
  {
    x: 245,
    y: 60,
    width: 40,
    height: 15,
    color: "yellow",
    id: 18,
    type: "target",
  },
  {
    x: 290,
    y: 60,
    width: 40,
    height: 15,
    color: "yellow",
    id: 19,
    type: "target",
  },
  {
    x: 40,
    y: 80,
    width: 40,
    height: 15,
    color: "green",
    id: 7,
    type: "target",
  },
  {
    x: 85,
    y: 80,
    width: 40,
    height: 15,
    color: "green",
    id: 8,
    type: "target",
  },
  {
    x: 130,
    y: 80,
    width: 40,
    height: 15,
    color: "green",
    id: 9,
    type: "target",
  },
  {
    x: 175,
    y: 80,
    width: 40,
    height: 15,
    color: "green",
    id: 10,
    type: "target",
  },
  {
    x: 220,
    y: 80,
    width: 40,
    height: 15,
    color: "green",
    id: 11,
    type: "target",
  },
  {
    x: 265,
    y: 80,
    width: 40,
    height: 15,
    color: "green",
    id: 12,
    type: "target",
  },
  {
    x: 20,
    y: 100,
    width: 40,
    height: 15,
    color: "darkblue",
    id: 0,
    type: "target",
  },
  {
    x: 65,
    y: 100,
    width: 40,
    height: 15,
    color: "darkblue",
    id: 1,
    type: "target",
  },
  {
    x: 110,
    y: 100,
    width: 40,
    height: 15,
    color: "darkblue",
    id: 2,
    type: "target",
  },
  {
    x: 155,
    y: 100,
    width: 40,
    height: 15,
    color: "darkblue",
    id: 3,
    type: "target",
  },
  {
    x: 200,
    y: 100,
    width: 40,
    height: 15,
    color: "darkblue",
    id: 4,
    type: "target",
  },
  {
    x: 245,
    y: 100,
    width: 40,
    height: 15,
    color: "darkblue",
    id: 5,
    type: "target",
  },
  {
    x: 290,
    y: 100,
    width: 40,
    height: 15,
    color: "darkblue",
    id: 6,
    type: "target",
  },
  ,
  {
    x: 40,
    y: 120,
    width: 40,
    height: 15,
    color: "purple",
    id: 7,
    type: "target",
  },
  {
    x: 85,
    y: 120,
    width: 40,
    height: 15,
    color: "purple",
    id: 8,
    type: "target",
  },
  {
    x: 130,
    y: 120,
    width: 40,
    height: 15,
    color: "purple",
    id: 9,
    type: "target",
  },
  {
    x: 175,
    y: 120,
    width: 40,
    height: 15,
    color: "purple",
    id: 10,
    type: "target",
  },
  {
    x: 220,
    y: 120,
    width: 40,
    height: 15,
    color: "purple",
    id: 11,
    type: "target",
  },
  {
    x: 265,
    y: 120,
    width: 40,
    height: 15,
    color: "purple",
    id: 12,
    type: "target",
  },
  ,
  {
    x: 20,
    y: 140,
    width: 40,
    height: 15,
    color: "cyan",
    id: 0,
    type: "target",
  },
  {
    x: 65,
    y: 140,
    width: 40,
    height: 15,
    color: "cyan",
    id: 1,
    type: "target",
  },
  {
    x: 110,
    y: 140,
    width: 40,
    height: 15,
    color: "cyan",
    id: 2,
    type: "target",
  },
  {
    x: 155,
    y: 140,
    width: 40,
    height: 15,
    color: "cyan",
    id: 3,
    type: "target",
  },
  {
    x: 200,
    y: 140,
    width: 40,
    height: 15,
    color: "cyan",
    id: 4,
    type: "target",
  },
  {
    x: 245,
    y: 140,
    width: 40,
    height: 15,
    color: "cyan",
    id: 5,
    type: "target",
  },
  {
    x: 290,
    y: 140,
    width: 40,
    height: 15,
    color: "cyan",
    id: 6,
    type: "target",
  },
];

export { ball };
