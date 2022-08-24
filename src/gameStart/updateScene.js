import RenderHero from "../hero/components/RenderHero";
import { dataMap } from "../.././src/base/constants/constantMap";
import { viewportSize } from "../.././src/base/constants/constant";
import { renderScene } from "../.././src/scene/components/RenderScene";
import { renderFloor } from "../.././src/map/components/RenderFloor";
import { renderMap } from "../.././src/map/components/RenderMap";
import { renderCamera } from "../.././src/camera/components/RenderCamera";

export default function updateScene() {
  let t = 0;
  const $scene = document.querySelector("#scene");
  const $floor = document.querySelector("#floor");
  RenderHero($scene);
  const loop = () => {
    // 작동 확인을 위한 코드
    if (t % 1000 === 0) {
      console.log(t);
    }
    t++;
    $scene.style.width = $floor.style.width = 10 * 200 + "px";
    $scene.style.height = $floor.style.height = 10 * 200 + "px";

    // Test Start
    renderScene(viewportSize.width, viewportSize.height);
    renderFloor(dataMap[1].width, dataMap[1].height);
    renderMap(dataMap[1]);
    renderCamera(dataMap[1].start.x, dataMap[1].start.y, 1);
    // Test End

    console.warn("Check"); //
    //requestAnimationFrame(loop);
  };
  loop();
}
