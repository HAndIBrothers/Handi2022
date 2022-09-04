import { dataMap } from "../../base/constants/constantMap";

export default function getCubeValue(stage, x, y, z) {
  const map = dataMap[stage].data;

  if (!map[Math.floor(z)]) return 0;
  if (!map[Math.floor(z)][Math.floor(y)]) return 0;

  return map[Math.floor(z)][Math.floor(y)][Math.floor(x)];
}
