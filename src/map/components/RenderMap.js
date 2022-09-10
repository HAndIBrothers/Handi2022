import { drawCube } from "../drawCube";
import { initCube } from "../initCube";
import { tileSize } from "../../base/constants/constant";
import { setColorCube } from "../setColorCube";

export const RenderMap = () => {
  let movingCubes = {
    cube: [],
  };
  movingCubes = RenderRandom(movingCubes);
  initCube(tileSize);
  setColorCube();

  return movingCubes;
};

const RenderRandom = (_movingCubes) => {
  for (let posY = 8; posY > 0; posY--) {
    if (Math.random() < 0.1) continue;
    const speed = Math.random() * 2 + 1;
    for (let posX = -10; posX < 5; posX++) {
      if (Math.random() < 0.7) continue;
      _movingCubes = DrawAndSaveCube(_movingCubes, posX, posY, 0, 1, speed);
    }
  }
  return _movingCubes;
};
const DrawAndSaveCube = (_movingCubes, _x, _y, _z, _token, _speed) => {
  map.insertAdjacentHTML("beforeEnd", drawCube(_x, _y, _z, _token));
  _movingCubes.cube.push({
    id: `x${_x}_y${_y}_z${_z}`,
    pos: {
      x: _x,
      y: _y,
      z: _z,
    },
    token: _token,
    speed: _speed,
  });
  return _movingCubes;
};
