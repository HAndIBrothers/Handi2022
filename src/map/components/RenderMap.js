import { drawCube } from "../drawCube";
import { initCube } from "../initCube";
import { tileSize } from "../../base/constants/constant";
import { setColorCube } from "../setColorCube";

export const RenderMap = () => {
  let movingCubes = {
    cube: [],
  };
  //RenderSkull();
  movingCubes = RenderRandom(movingCubes);
  initCube(tileSize);
  setColorCube();

  return movingCubes;
};
const RenderSkull = () => {
  for (let index = 0; index < 7; index++) {
    map.insertAdjacentHTML("beforeEnd", drawCube(index, 11, 0, 2));
  }
};
const RenderRandom = (_movingCubes) => {
  _movingCubes = DrawAndSaveCube(_movingCubes, 3, 9, -1, 2, 0);
  for (let posY = 8; posY > 0; posY--) {
    const speed = Math.random() * 2 + 1;
    const posZ = Math.abs(posY - 8);

    for (let posX = -20; posX < 5; posX++) {
      if (Math.random() < 0.75) continue;
      _movingCubes = DrawAndSaveCube(_movingCubes, posX, posY, posZ, 1, speed);
    }
  }
  return _movingCubes;
};
const DrawAndSaveCube = (_movingCubes, _x, _y, _z, _token, _speed) => {
  map.insertAdjacentHTML("beforeEnd", drawCube(_x, _y, _z, _token));
  _movingCubes.cube.push({
    id: `x${_x}y${_y}z${_z}`,
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
