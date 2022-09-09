import RenderHero from "../hero/components/RenderHero";
import { dataMap } from "../.././src/base/constants/constantMap";
import { tileSize, viewportSize } from "../.././src/base/constants/constant";
import { renderScene } from "../.././src/scene/components/RenderScene";
import { renderFloor } from "../.././src/map/components/RenderFloor";
import { RenderMap } from "../.././src/map/components/RenderMap";
import { MoveMap } from "../map/components/MoveMap";
import { renderCamera } from "../.././src/camera/components/RenderCamera";
import { hero } from "../hero/constants/heroConstants";
import { resetScene } from "../scene/ResetScene";
import {
  isBottomCube,
  isLeftCube,
  isRightCube,
  isUpCube,
  isDownCube,
  isVerticalUpCube,
} from "../hero/helper/checkCubeType";

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

  const WALL = 1;

  const $scene = document.querySelector("#scene");
  const $floor = document.querySelector("#floor");

  // :: Test Start
  resetScene();
  renderScene(viewportSize.width, viewportSize.height);
  renderFloor(dataMap[1].width, dataMap[1].height);
  let movingCubes = RenderMap();
  RenderHero($scene, heroX, heroY, heroZ);
  const $hero = document.querySelector(".hero");
  // :: Test End

  let {
    gravity,
    zSpeed,
    zAcceleration,
    isGrounded,
    canJump,
    width: heroWidth,
    height: heroHeight,
    depth: heroDepth,
  } = hero;

  const loop = () => {
    isGrounded = false;
    // Hero Gravity
    zAcceleration -= gravity;
    zSpeed += zAcceleration;
    heroZ += zSpeed;

    // isBottomCube
    // parameter:
    // cube, x, y, z, w, h
    if (isBottomCube(WALL, heroX, heroY, heroZ, heroWidth, heroHeight)) {
      heroZ = Math.ceil(heroZ);
      isGrounded = true;
      zSpeed = 0;
      zAcceleration = 0;
    }
    // if (heroZ < 0) heroZ = 0;
    // if (heroZ === 0) {
    // }

    /** Hero Move */
    if (keys["u"]) {
      // isUpCube
      // parameter:
      // cube, x, y, z, w, d

      heroY -= 0.1;
    }
    if (keys["r"]) {
      // isRightCube
      // parameter:
      // cube, x, y, z, w, h, d
      heroX += 0.1;
    }
    if (keys["d"]) {
      // isDownCube
      // parameter:
      // cube, x, y, h, w, d
      heroY += 0.1;
    }
    if (keys["l"]) {
      // isLeftCube
      // parameter:
      // cube, x, y, z, h, d
      heroX -= 0.1;
    }
    if (keys["j"] && isGrounded && canJump) {
      // isVerticalUpCube
      // parameter:
      // cube, x, y, z, w, d, h
      zSpeed = 0.3;
      canJump = false;
    }

    if (!keys["j"]) {
      canJump = true;
    }

    $hero.style.transform = `translate3d(${heroX * tileSize}px, ${
      heroY * tileSize
    }px, ${heroZ * tileSize}px)`;
    renderCamera(heroX, heroY, heroZ);
    movingCubes = MoveMap(movingCubes);

    requestAnimationFrame(loop);
  };
  loop();
}
