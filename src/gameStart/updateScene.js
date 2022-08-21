export default function updateScene() {
  let t = 60;

  const loop = () => {
    console.log("loop", t--);
    t && requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
}
