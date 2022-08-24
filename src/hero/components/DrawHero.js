import "../styles/hero.css";
import { hero } from "../constants/heroConstants";
// import hero width and height

export default function DrawHero(x, y, z) {
  return `
  <div class='hero'
  style='transform: scaleX(${hero.width}) scaleY(${hero.height})
  translate3d(${x * 200}px, ${y * 200}px, ${z * 200}px);'>
    <div class="face up"></div>
    <div class="face left"></div>
    <div class="face back"></div>
    <div class="face right"></div>
    <div class="face front"></div>
  </div>
  `;
}
