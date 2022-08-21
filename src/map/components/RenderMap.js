import { drawCube } from "../drawCube";
import { initCube } from "../initCube";
import { tileSize } from "../../base/constants/constant";

export const renderMap = (_map) => {
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
  initCube(tileSize);
};
