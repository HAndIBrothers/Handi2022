export const initCube = (_size) => {
  const mapFaces = document.querySelectorAll(".mapFace");
  mapFaces.forEach((mapFace) => {
    mapFace.style.width = _size + "px";
    mapFace.style.height = _size + "px";
  });
  const ups = document.querySelectorAll(".up");
  const upTransform = `translateZ(${_size}px)`;
  ups.forEach((up) => {
    up.style.transform = upTransform;
  });
  const rights = document.querySelectorAll(".right");
  const rightTransform = `translate3D(${_size / 2}px, -${
    _size / 2
  }px, 0) rotateZ(-90deg) rotateX(-90deg)`;
  rights.forEach((right) => {
    right.style.transform = rightTransform;
  });
  const lefts = document.querySelectorAll(".left");
  const leftTransform = `translate3D(-${_size / 2}px, -${
    _size / 2
  }px, 0) rotateZ(90deg) rotateX(-90deg)`;
  lefts.forEach((left) => {
    left.style.transform = leftTransform;
  });
  const backs = document.querySelectorAll(".back");
  const backTransform = `translate3D(0, -${_size}px, 0) rotateZ(180deg) rotateX(-90deg)`;
  backs.forEach((back) => {
    back.style.transform = backTransform;
  });
};
