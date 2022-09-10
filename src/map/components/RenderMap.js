import { drawCube } from "../drawCube";
import { initCube } from "../initCube";
import { tileSize } from "../../base/constants/constant";
import { setColorCube } from "../setColorCube";

export const RenderMap = () => {
  map.insertAdjacentHTML("beforeEnd", drawCube(0, 8, 0, 1));
  map.insertAdjacentHTML("beforeEnd", drawCube(2, 7, 0, 1));
  map.insertAdjacentHTML("beforeEnd", drawCube(4, 7, 0, 1));
  map.insertAdjacentHTML("beforeEnd", drawCube(-2, 7, 0, 1));
  map.insertAdjacentHTML("beforeEnd", drawCube(5, 6, 0, 1));
  map.insertAdjacentHTML("beforeEnd", drawCube(0, 5, 0, 1));
  // for (let zIndex = 0; zIndex < _map.data.length; zIndex++) {
  //   for (let yIndex = 0; yIndex < _map.data[zIndex].length; yIndex++) {
  //     for (
  //       let xIndex = 0;
  //       xIndex < _map.data[zIndex][yIndex].length;
  //       xIndex++
  //     ) {
  //       const token = _map.data[zIndex][yIndex][xIndex];
  //       map.insertAdjacentHTML(
  //         "beforeEnd",
  //         drawCube(xIndex, yIndex, zIndex, token)
  //       );
  //     }
  //   }
  // }
  initCube(tileSize);
  setColorCube();
};
