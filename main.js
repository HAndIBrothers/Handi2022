import { dataMap } from "./Module/Map/dataMap.js";
import { viewportSize } from "./Module/data.js";
import { drawScene, drawFloor, drawMap } from "./Module/Map/drawMap.js";

document.querySelector("#app").append("Hello js13k!");

drawScene(viewportSize.width, viewportSize.height);
drawFloor(dataMap[2].width, dataMap[2].height);
drawMap(dataMap[2]);
