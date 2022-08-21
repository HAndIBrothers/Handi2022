import drawHero from "./drawHero";
export default function (target) {
  target.insertAdjacentHTML("beforeEnd", drawHero(1, 1, 1));
}
