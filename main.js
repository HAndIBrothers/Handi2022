import { dataMap } from "./Module/Map/dataMap.js";
import { drawMap } from "./Module/Map/drawMap.js";

document.querySelector("#app").append("Hello js13k!");

drawMap(dataMap[1]);
