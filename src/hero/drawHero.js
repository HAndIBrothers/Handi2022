// import hero width and height

export default function drawHero(x, y, z) {
  const heroWidth = 200;
  const heroHeight = 200;

  return `
  <div class=cube hero
  style='tranform: scaleX(${heroWidth}) scaleY(${heroHeight})
  translate3d(${x * 200}px, ${y * 200}px, ${z * 200}px)'>
    <div class="face up"></div>
    <div class="face left"></div>
    <div class="face back"></div>
    <div class="face right"></div>
    <div class="face front"></div>
  </div>`;
}
