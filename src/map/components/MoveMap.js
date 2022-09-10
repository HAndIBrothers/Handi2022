import { storageKey_Cubes } from "../../base/constants/constant";
import { getData, saveData } from "../../utils/store";

export const MoveMap = () => {
  let key = storageKey_Cubes;
  let data = getData(key);
  for (let index = 0; index < data.cube.length; index++) {
    data.cube[index].pos.x = Number(data.cube[index].pos.x) + 1;
    if (Number(data.cube[index].pos.x) > 2000) {
      data.cube[index].pos.x = -1000;
    }

    document.getElementById(
      data.cube[index].id
    ).style.transform = `translate3D(${data.cube[index].pos.x}px, ${data.cube[index].pos.y}px, ${data.cube[index].pos.z})`;
  }
  saveData(key, data);
};
