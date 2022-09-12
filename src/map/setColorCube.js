import { sixteenDiff } from "../utils/calculator";
import { dataCube } from "../base/constants/constantCube";

export const setColorCube = () => {
  dataCube.forEach((_value) => {
    colorCube(_value.id, _value.color);
  });
};

export const getColors = (_baseColor) => {
  return {
    front: _baseColor,
    all: sixteenDiff(_baseColor, 222222),
    side: sixteenDiff(sixteenDiff(_baseColor, 222222), 111111),
  };
};

const colorCube = (_number, _baseColor) => {
  const front = _baseColor;

  const all = sixteenDiff(front, 222222);
  const side = sixteenDiff(all, 222222);

  let cubes = document.querySelectorAll(`.cube${_number} *`);
  cubes.forEach((cube) => {
    cube.style.background = `#${all}`;
  });
  cubes = document.querySelectorAll(`.cube${_number} .front`);
  cubes.forEach((cube) => {
    cube.style.background = `#${front}`;
  });
  cubes = document.querySelectorAll(`.cube${_number} .left`);
  cubes.forEach((cube) => {
    cube.style.background = `#${side}`;
  });
  cubes = document.querySelectorAll(`.cube${_number} .right`);
  cubes.forEach((cube) => {
    cube.style.background = `#${side}`;
  });
};
