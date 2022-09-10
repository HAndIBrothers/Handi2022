import RenderHero from "../hero/components/RenderHero";
import { dataMap } from "../.././src/base/constants/constantMap";
import { viewportSize } from "../.././src/base/constants/constant";
import { renderScene } from "../.././src/scene/components/RenderScene";
import { renderFloor } from "../.././src/map/components/RenderFloor";
import { RenderMap } from "../.././src/map/components/RenderMap";
import { MoveMap } from "../map/components/MoveMap";
import { renderCamera } from "../.././src/camera/components/RenderCamera";
import { hero } from "../hero/constants/heroConstants";
import { resetScene } from "../scene/ResetScene";

export default function updateScene() {
  // key event
  let keys = {
    l: 0,
    r: 0,
    d: 0,
    l: 0,
    j: 0,
  };

  onkeydown = onkeyup = (e) => {
    keys[
      "j****lurd************************l**r************l*d***u**u"[
        e.keyCode - 32
      ]
    ] = e.type[5];
  };

  let t = 0;
  let stageLevel = 1;
  let { x: heroX, y: heroY, z: heroZ } = dataMap[stageLevel]["start"];

  const $scene = document.querySelector("#scene");
  const $floor = document.querySelector("#floor");

  // :: Test Start
  resetScene();
  renderScene(viewportSize.width, viewportSize.height);
  renderFloor(dataMap[1].width, dataMap[1].height);
  RenderMap();
  RenderHero($scene, heroX, heroY, heroZ);
  const $hero = document.querySelector(".hero");
  // :: Test End

  let { gravity, zSpeed, zAcceleration, isGrounded, canJump } = hero;

  const loop = () => {
    // 작동 확인을 위한 코드
    if (t % 1000 === 0) {
      console.log(t);
    }
    t++;

    isGrounded = false;
    // Hero Gravity
    zAcceleration -= gravity;
    zSpeed += zAcceleration;
    heroZ += zSpeed;

    if (heroZ < 0) heroZ = 0;
    if (heroZ === 0) {
      isGrounded = true;
      zSpeed = 0;
      zAcceleration = 0;
    }

    /** Hero Move */
    if (keys["u"]) {
      heroY -= 0.1;
    }
    if (keys["r"]) {
      heroX += 0.1;
    }
    if (keys["d"]) {
      heroY += 0.1;
    }
    if (keys["l"]) {
      heroX -= 0.1;
    }
    if (keys["j"] && isGrounded && canJump) {
      zSpeed = 0.3;
      canJump = false;
    }

    if (!keys["j"]) {
      canJump = true;
    }

    $hero.style.transform = `translate3d(${heroX * 200}px,${heroY * 200}px,${
      heroZ * 200
    }px)`;
    renderCamera(heroX, heroY, heroZ);
    MoveMap();

    requestAnimationFrame(loop);
  };
  loop();
}
