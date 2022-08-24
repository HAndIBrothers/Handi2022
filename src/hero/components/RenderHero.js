import DrawHero from "./DrawHero";
export default function (target, x, y, z) {
  target.insertAdjacentHTML("beforeEnd", DrawHero(x, y, z));
}
