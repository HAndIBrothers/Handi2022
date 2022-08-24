import { tileSize, zoomBase } from "../base/constants/constant";

export const setCamera = (_x, _y, _rate) => {
  scene.style.transformOrigin = `10% 10%`;
  const xPos = -tileSize * -_x + -tileSize;
  const yPos = -tileSize * (-_y - 2) + -tileSize;
  scene.style.transform = `translate3d(${xPos}px, ${yPos}px, ${
    zoomBase * _rate
  }px) rotateX(30deg) rotateZ(180deg)`;
};
