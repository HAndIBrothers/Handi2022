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
  }
  return false;
}
