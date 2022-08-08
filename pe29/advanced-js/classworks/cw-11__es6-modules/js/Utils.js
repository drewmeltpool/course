let id = 0;

export const counter = () => {
  return ++id;
};


export const randomColor = () => {
  let r = getRandomInt(0, 255);
  let g = getRandomInt(0, 255);
  let b = getRandomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`
};

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

