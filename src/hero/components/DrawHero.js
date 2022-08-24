import "../styles/hero.css";
// import hero width and height

export default function DrawHero(x, y, z) {
  const heroWidth = 200;
  const heroHeight = 200;
  return `
  <div class='hero'
  style='transform: scaleX(${0.9}) scaleY(${0.9})
  translate3d(${x * 200}px, ${y * 200}px, ${z * 200}px);'>
    <div class="face up"></div>
    <div class="face left"></div>
    <div class="face back"></div>
    <div class="face right"></div>
    <div class="face front"></div>
  </div>
  `;
}
