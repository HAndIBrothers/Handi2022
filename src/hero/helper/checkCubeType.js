import getCubeValue from "./getCubeValue";

function isContained(x, y, w, h, containerX, containerY) {
  if (
    // left bottom
    (containerX <= x &&
      x <= containerX + w &&
      containerY <= y &&
      y <= containerY + h) ||
    // left up
    (containerX <= x &&
      x <= containerX + w &&
      containerY <= y + h &&
      y + h <= containerY + h) ||
    // right bottom
    (containerX <= x + w &&
      x + w <= containerX + w &&
      containerY <= y &&
      y <= containerY + h) ||
    // right up
    (containerX <= x + w &&
      x + w <= containerX + w &&
      containerY <= y + h &&
      y + h <= containerY + h)
  ) {
    return true;
  }
  return false;
}

export function isBottomCube(x, y, z, w, h, targets) {
  for (let i = 0; i < targets.length; i++) {
    if (Math.floor(z) === Math.floor(targets[i].z)) {
      if (isContained(x, y, w, h, targets[i].x, targets[i].y)) {
        return true;
      }
    }
    if (z < 0) {
      return true;
    }
  }
  return false;
}

export function isUpCube(x, y, z, w, d, targets) {
  for (let i = 0; i < targets.length; i++) {
    if (Math.floor(y) === Math.floor(targets[i].y)) {
      if (isContained(x, z, w, d, targets[i].x, targets[i].z)) {
        return true;
      }
    }
  }
  return false;
}

export function isRightCube(x, y, z, h, d, targets) {
  for (let i = 0; i < targets.length; i++) {
    if (Math.floor(x) === Math.floor(targets[i].x)) {
      if (isContained(y, z, h, d, targets[i].y, targets[i].z)) {
        return true;
      }
    }
  }
  return false;
}

export function isLeftCube(cube, x, y, z, h, d) {
  // tile1 = getCubeValue(x, y, z);
  // tile2 = getCubeValue(x, y + h - 0.1, z);
  // tile3 = getCubeValue(x, y, z + d);
  // tile4 = getCubeValue(x, y + h - 0.1, z + hero_d);

  // if (tile1 === cube || tile2 === cube || tile3 === cube || tile4 === cube) {
  //   return true;
  // }
  // return false;

  for (let i = 0; i < targets.length; i++) {
    if (Math.floor(z) === Math.floor(targets[i].z)) {
      if (
        // front bottom
        (targets[i].x <= x &&
          x <= targets[i].x + w &&
          targets[i].y <= y &&
          y <= targets[i].y + h) ||
        // front up
        (targets[i].x <= x &&
          x <= targets[i].x + w &&
          targets[i].y <= y + h &&
          y + h <= targets[i].y + h) ||
        // back bottom
        (targets[i].x <= x + w &&
          x + w <= targets[i].x + w &&
          targets[i].y <= y &&
          y <= targets[i].y + h) ||
        // back up
        (targets[i].x <= x + w &&
          x + w <= targets[i].x + w &&
          targets[i].y <= y + h &&
          y + h <= targets[i].y + h)
      ) {
        return true;
      }
    }
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
