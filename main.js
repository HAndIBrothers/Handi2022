import { dataMap } from "./src/base/constants/constantMap";
import { viewportSize } from "./src/base/constants/constant";
import "./style.css";
import initializeGame from "./src/gameStart/initializeGame";
import { renderScene } from "./src/scene/components/RenderScene";
import { renderFloor } from "./src/map/components/RenderFloor";
import { renderMap } from "./src/map/components/RenderMap";
import { renderCamera } from "./src/camera/components/RenderCamera";

initializeGame();
renderScene(viewportSize.width, viewportSize.height);
renderFloor(dataMap[1].width, dataMap[1].height);
renderMap(dataMap[1]);
renderCamera(dataMap[1].start.x, dataMap[1].start.y, 1);
