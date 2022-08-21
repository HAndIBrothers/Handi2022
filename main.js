import { dataMap } from "./src/base/constants/constantMap";
import { tileSize, viewportSize } from "./src/base/constants/constant";
import "./style.css";
import initializeGame from "./src/gameStart/initializeGame";
import { renderScene } from "./src/scene/components/RenderScene";
import { initCube } from "./src/map/initCube";
import { renderFloor } from "./src/map/components/RenderFloor";
import { renderMap } from "./src/map/components/RenderMap";

document.querySelector("#app").append("Hello js13k!");

initializeGame();
renderScene(viewportSize.width, viewportSize.height);
renderFloor(dataMap[1].width, dataMap[1].height);
renderMap(dataMap[1]);
initCube(tileSize);
