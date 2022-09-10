import { drawCube } from "../drawCube";
import { initCube } from "../initCube";
import { tileSize } from "../../base/constants/constant";
import { setColorCube } from "../setColorCube";

export const RenderMap = () => {
  let movingCubes = {
    cube: [],
  };
  movingCubes = DrawAndSaveCube(movingCubes, 0, 8, 0, 1, 5);
  initCube(tileSize);
  setColorCube();

  return movingCubes;
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
