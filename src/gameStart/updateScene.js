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
import { isBottomCube } from "../hero/helper/checkCubeType";
import RenderGameOver from "../gameOver/components/RenderGameOver";
import { getData, saveData } from "../utils/store";

export default function updateScene() {
  let requestId;
  let play = true;
  // key event
  let keys = {
    l: 0,
    r: 0,
    d: 0,
    l: 0,
    j: 0,
  };

  let score = 0;
  SetMaxScore(score);

  onkeydown = onkeyup = (e) => {
    keys[
      "j****lurd************************l**r************l*d***u**u"[
        e.keyCode - 32
      ]
    ] = e.type[5];
  };

  let stageLevel = 1;
  let { x: heroX, y: heroY, z: heroZ } = dataMap[stageLevel]["start"];

  const $scene = document.querySelector("#scene");

  // :: Test Start
  resetScene();
  renderScene(viewportSize.width, viewportSize.height);
  // renderFloor(dataMap[1].width, dataMap[1].height);
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

    const cubeCoords = movingCubes.cube.map((cube) => {
      return cube.pos;
    });

    if (isBottomCube(heroX, heroY, heroZ, heroWidth, heroDepth, cubeCoords)) {
      heroZ = Math.ceil(heroZ);
      isGrounded = true;
      zSpeed = 0;
      zAcceleration = 0;
    }

    if (heroZ < -10) {
      play = false;
      window.cancelAnimationFrame(requestId);
      RenderGameOver();
      return;
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

    $hero.style.transform = `translate3d(${heroX * tileSize}px, ${
      heroY * tileSize
    }px, ${heroZ * tileSize}px)`;
    if (score < Math.floor(heroZ)) {
      score = Math.floor(heroZ);
      document.getElementById("score").innerHTML = `Score : ${score}`;

      SetMaxScore(score);
    }

    renderCamera(heroX, heroY, heroZ);
    movingCubes = MoveMap(movingCubes);

    requestId = requestAnimationFrame(loop);
  };
  loop();
}

const SetMaxScore = (_score) => {
  let maxScore = getData("handi_max_score");
  if (maxScore === null) maxScore = 0;
  if (maxScore < _score) maxScore = _score;
  saveData("handi_max_score", maxScore);
  document.getElementById("maxScore").innerHTML = `Max Score : ${maxScore}`;
};
