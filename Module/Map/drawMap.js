import { tileSize } from "../data.js";

export const drawScene = (_width, _height) => {
  viewport.style.width = _width + "px";
  viewport.style.height = _height + "px";
};
export const drawFloor = (_width, _height) => {
  scene.style.width = floor.style.width = _width * tileSize + "px";
  scene.style.height = floor.style.height = _height * tileSize + "px";
};
export const drawMap = (_map) => {
  for (let zIndex = 0; zIndex < _map.data.length; zIndex++) {
    for (let yIndex = 0; yIndex < _map.data[zIndex].length; yIndex++) {
      for (
        let xIndex = 0;
        xIndex < _map.data[zIndex][yIndex].length;
        xIndex++
      ) {
        const token = _map.data[zIndex][yIndex][xIndex];
        map.insertAdjacentHTML(
          "beforeEnd",
          drawCube(xIndex, yIndex, zIndex, token)
        );
      }
    }
  }
};

const drawCube = (_x, _y, _z, _token) => {
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
