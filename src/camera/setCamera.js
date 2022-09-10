import { tileSize, viewportSize, zoomBase } from "../base/constants/constant";

export const setCamera = (_x, _y, _z) => {
  scene.style.transformOrigin = `0% 0%`;
  const xPos = -tileSize * _x + -tileSize / 2;
  const yPos = -tileSize * (_y - 1) + -tileSize;
  const zPos = -tileSize * (_z + 5) + -tileSize;

  const transform = `translate3d(${xPos}px, ${yPos}px, ${zPos}px) rotateX(15deg) rotateZ(0deg)`;
  scene.style.transform = transform;

  viewport.style.perspective = "-10px";
};
