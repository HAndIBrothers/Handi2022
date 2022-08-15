import { tileSize } from "../data.js";

export const initBlock = (_size) => {
  const mapFaces = document.querySelectorAll(".mapFace");
  mapFaces.forEach((mapFace) => {
    mapFace.style.width = _size + "px";
    mapFace.style.height = _size + "px";
  });
  const ups = document.querySelectorAll(".up");
  const upTransform = `translateZ(${_size}px)`;
  ups.forEach((up) => {
    up.style.transform = upTransform;
  });
  const rights = document.querySelectorAll(".right");
  const rightTransform = `translate3D(${_size / 2}px, -${
    _size / 2
  }px, 0) rotateZ(-90deg) rotateX(-90deg)`;
  rights.forEach((right) => {
    right.style.transform = rightTransform;
  });
  const lefts = document.querySelectorAll(".left");
  const leftTransform = `translate3D(-${_size / 2}px, -${
    _size / 2
  }px, 0) rotateZ(90deg) rotateX(-90deg)`;
  lefts.forEach((left) => {
    left.style.transform = leftTransform;
  });
  const backs = document.querySelectorAll(".back");
  const backTransform = `translate3D(0, -${_size}px, 0) rotateZ(180deg) rotateX(-90deg)`;
  backs.forEach((back) => {
    back.style.transform = backTransform;
  });
};

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
