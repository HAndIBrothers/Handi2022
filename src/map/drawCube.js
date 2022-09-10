import { storageKey_Cubes, tileSize } from "../base/constants/constant";
import { getData, saveData } from "../utils/store";

export const drawCube = (_x, _y, _z, _token) => {
  let html = "";
  const token = Number(_token);

  const cubeId = `x${_x}_y${_y}_z${_z}`;
  const cubeClass = `cube${token}`;
  const cubePosX = `${_x * tileSize}`;
  const cubePosY = `${_y * tileSize}`;
  const cubePosZ = `${_z * tileSize}`;
  const cubePos = `${cubePosX}px,${cubePosY}px,${cubePosZ}px`;

  if (token >= 1) {
    html = `<div id='${cubeId}' class='${cubeClass}' style='transform:translate3d(${cubePos})'>`;
    if (token === 4) {
      html += `<div class="mapFace up">💣</div>`;
    } else {
      html += `<div class="mapFace up">${_x}/${_y}</div>`;
    }
    html += `<div class="mapFace left"></div>`;
    html += `<div class="mapFace back"></div>`;
    html += `<div class="mapFace right"></div>`;
    html += `<div class="mapFace front"></div><div>`;
  }
  return html;
};
