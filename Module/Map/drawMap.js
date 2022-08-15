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
const tileSize = 200;
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

// var drawCube = (x, y, z, id = "") => {
//     html = `<div id='${id}' class='cube' style='transform:translate3d(${
//       x * 200
//     }px,${y * 200}px,${z * 200}px)'>`;
//     html += `<div class="face up"></div>`;
//     html += `<div class="face left"></div>`;
//     html += `<div class="face back"></div>`;
//     html += `<div class="face right"></div>`;
//     html += `<div class="face front"></div>`;
//     return html;
//   };
