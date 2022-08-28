import RenderHero from "../hero/components/RenderHero";
import { dataMap } from "../.././src/base/constants/constantMap";
import { viewportSize } from "../.././src/base/constants/constant";
import { renderScene } from "../.././src/scene/components/RenderScene";
import { renderFloor } from "../.././src/map/components/RenderFloor";
import { renderMap } from "../.././src/map/components/RenderMap";
import { renderCamera } from "../.././src/camera/components/RenderCamera";
import { resetScene } from "../scene/ResetScene";

export default function updateScene() {
  let t = 0;
  const $scene = document.querySelector("#scene");
  const $floor = document.querySelector("#floor");

  // :: Test Start
  resetScene();
  renderScene(viewportSize.width, viewportSize.height);
  RenderHero($scene);
  renderFloor(dataMap[1].width, dataMap[1].height);
  renderMap(dataMap[1]);
  renderCamera(dataMap[1].start.x, dataMap[1].start.y, 0.5);
  // :: Test End

  const loop = () => {
    // 작동 확인을 위한 코드
    if (t % 1000 === 0) {
      console.log(t);
    }
    t++;

    console.warn("Check"); //
    requestAnimationFrame(loop);
  };
  loop();
}
