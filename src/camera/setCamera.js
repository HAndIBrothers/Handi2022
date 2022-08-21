import { tileSize, zoomBase } from "../base/constants/constant";

export const setCamera = (_x, _y, _rate) => {
  scene.style.transformOrigin = `50% 50%`;
  const xPos = -tileSize * _x + -tileSize;
  const yPos = -tileSize * _y + -tileSize;
  scene.style.transform = `translate3d(${xPos}px, ${yPos}px, ${
    zoomBase * _rate
  }px) rotateX(45deg) rotateZ(0deg)`;
};
