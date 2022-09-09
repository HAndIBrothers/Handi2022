import updateScene from "./updateScene";
import { saveData, clearData, getData } from "../utils/store";

export default function initializeGame() {
  // 초기화
  clearData();
  saveData("stageLevel", 1);

  // Hero
  const hero = { x: 0, y: 0, z: 0 };
  saveData("hero", hero);

  // Map
  const map = ["00000000"];
  saveData("map", map);

  // console.log(getData("hero"));
  // console.log(getData("stageLevel"));
  // console.log(getData("map"));

  updateScene();
}
