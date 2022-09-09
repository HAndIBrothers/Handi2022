import getCubeValue from "./getCubeValue";

// stage 어디에 두지?
export function isBottomCube(cube, x, y, z, w, h) {
  const tile1 = getCubeValue(x, y, z);
  const tile2 = getCubeValue(x + w - 0.1, y, z);
  const tile3 = getCubeValue(x, y + h - 0.1, z);
  const tile4 = getCubeValue(x + w - 0.1, y + h - 0.1, z);
  if (
    tile1 == cube ||
    tile2 == cube ||
    tile3 == cube ||
    tile4 == cube ||
    z < 0
  ) {
    return true;
  }
  return false;
}

export function isLeftCube(cube, x, y, z, h, d) {
  tile1 = getCubeValue(x, y, z);
  tile2 = getCubeValue(x, y + h - 0.1, z);
  tile3 = getCubeValue(x, y, z + d);
  tile4 = getCubeValue(x, y + h - 0.1, z + hero_d);

  if (tile1 === cube || tile2 === cube || tile3 === cube || tile4 === cube) {
    return true;
  }
  return false;
}

export function isRightCube(cube, x, y, z, w, h, d) {
  tile1 = getCubeValue(x + w - 0.1, y, z);
  tile2 = getCubeValue(x + w - 0.1, y + h - 0.1, z);
  tile3 = getCubeValue(x + w - 0.1, y, z + d);
  tile4 = getCubeValue(x + w - 0.1, y + h - 0.1, z + d);

  if (tile1 === cube || tile2 === cube || tile3 === cube || tile4 === cube) {
    return true;
  }
  return false;
}

export function isUpCube(cube, x, y, z, w, d) {
  tile1 = getCubeValue(x, y, z);
  tile2 = getCubeValue(x + w - 0.1, y, z);
  tile3 = getCubeValue(x, y, z + d);
  tile4 = getCubeValue(x + w - 0.1, y, z + d);

  if (tile1 === cube || tile2 === cube || tile3 === cube || tile4 === cube) {
    return true;
  }
  return false;
}

export function isDownCube(cube, x, y, h, w, d) {
  tile1 = getCubeValue(x, y + h - 0.1, z);
  tile2 = getCubeValue(x + w - 0.1, y + h - 0.1, z);
  tile3 = getCubeValue(x, y + h - 0.1, z + d);
  tile4 = getCubeValue(x + w - 0.1, y + h - 0.1, z + d);

  if (tile1 === cube || tile2 === cube || tile3 === cube || tile4 === cube) {
    return true;
  }
  return false;
}

export function isVerticalUpCube(cube, x, y, z, w, d, h) {
  tile1 = getCubeValue(x, y, z + d);
  tile2 = getCubeValue(x + w - 0.1, y, z + d);
  tile3 = getCubeValue(x, y + h - 0.1, z + d);
  tile4 = getCubeValue(x + w - 0.1, y + h - 0.1, z + d);

  if (tile1 === cube || tile2 === cube || tile3 === cube || tile4 === cube) {
    return true;
  }
  return false;
}
