import { tileSize } from "../base/constants/constant";

export const drawCube = (_x, _y, _z, _token) => {
  let html = "";
  if (Number(_token) === 1) {
    html = `<div id='x${_x}y${_y}z${_z}' class='cube' style='transform:translate3d(${
      _x * tileSize
    }px,${_y * tileSize}px,${_z * tileSize}px)'>`;
    html += `<div class="mapFace up"></div>`;
    html += `<div class="mapFace left"></div>`;
    html += `<div class="mapFace back"></div>`;
    html += `<div class="mapFace right"></div>`;
    html += `<div class="mapFace front"></div>`;
  }
  return html;
};
