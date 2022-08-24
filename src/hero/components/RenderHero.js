import DrawHero from "./DrawHero";
export default function (target) {
  target.insertAdjacentHTML("beforeEnd", DrawHero(1, 1, 1));
}
