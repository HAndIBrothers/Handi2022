import { tileSize } from "../base/constants/constant";

export const drawCube = (_x, _y, _z, _token) => {
  let html = "";
  const token = Number(_token);

  const cubeId = `x${_x}y${_y}z${_z}`;
  const cubeClass = `cube${token}`;
  const cubePosX = `${_x * tileSize}`;
  const cubePosY = `${_y * tileSize}`;
  const cubePosZ = `${_z * tileSize}`;
  const cubePos = `${cubePosX}px,${cubePosY}px,${cubePosZ}px`;

  if (token >= 1) {
    html = `<div id='${cubeId}' class='${cubeClass}' style='transform:translate3d(${cubePos})'>`;
    html += `<div class="mapFace up"></div>`;
    html += `<div class="mapFace left"></div>`;
    html += `<div class="mapFace right"></div>`;
    html += `<div class="mapFace front"></div><div>`;
  }
  return html;
};
