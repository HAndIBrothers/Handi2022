import { storageKey_Cubes, tileSize } from "../../base/constants/constant";
import { getData, saveData } from "../../utils/store";

export const MoveMap = (_movingCubes) => {
  let data = _movingCubes;
  for (let index = 0; index < data.cube.length; index++) {
    data.cube[index].pos.x =
      Number(data.cube[index].pos.x) + 0.01 * data.cube[index].speed;

    if (data.cube[index].speed === 0) continue;

    data.cube[index].pos.y = Number(data.cube[index].pos.y) + 0.01;
    const posX = Number(data.cube[index].pos.x) * tileSize;
    const posY = Number(data.cube[index].pos.y) * tileSize;
    const posZ = Number(data.cube[index].pos.z) * tileSize;
    if (Number(data.cube[index].pos.x) > 15) {
      data.cube[index].pos.x = -15;
    }
    if (Number(data.cube[index].pos.y) > 10) {
      data.cube[index].pos.x = Math.floor(Math.random() * 20 - 5);
      data.cube[index].pos.y = 2;
      data.cube[index].pos.z = Number(data.cube[index].pos.z) + 8;
      data.cube[index].speed = Number(data.cube[index].speed) + 0.001;
    }

    document.getElementById(
      data.cube[index].id
    ).style.transform = `translate3D(${posX}px, ${posY}px, ${posZ}px)`;
  }
  return data;
};
