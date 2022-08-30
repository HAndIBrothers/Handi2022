import { tileSize } from "../base/constants/constant";
import { sixteenDiff } from "../utils/calculator";

export const drawCube = (_x, _y, _z, _token) => {
  let html = "";
  const token = Number(_token);
  if (token >= 1) {
    let cube = "cube";

    html = `<div id='x${_x}y${_y}z${_z}' class='${cube}${token}' style='transform:translate3d(${
      _x * tileSize
    }px,${_y * -tileSize}px,${_z * tileSize}px)'>`;
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
