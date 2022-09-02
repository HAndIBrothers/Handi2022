import { tileSize, viewportSize, zoomBase } from "../base/constants/constant";

export const setCamera = (_x, _y, _z) => {
  scene.style.transformOrigin = `0% 0%`;
  const xPos = -tileSize * _x + -tileSize;
  const yPos = -tileSize * _y + -tileSize;
  const zPos = -tileSize * _z + -tileSize;

  const transform = `translate3d(${xPos}px, ${yPos}px, ${zPos}px) rotateX(10deg) rotateZ(0deg)`;
  scene.style.transform = transform;

  viewport.style.perspective = "0px";
};
