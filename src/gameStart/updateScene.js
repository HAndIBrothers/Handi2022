import RenderHero from "../hero/components/RenderHero";

export default function updateScene() {
  let t = 0;
  const $scene = document.querySelector("#scene");
  const $floor = document.querySelector("#floor");
  RenderHero($scene);
  const loop = () => {
    // 작동 확인을 위한 코드
    if (t % 1000 === 0) {
      console.log(t);
    }
    t++;
    $scene.style.width = $floor.style.width = 10 * 200 + "px";
    $scene.style.height = $floor.style.height = 10 * 200 + "px";
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
}
