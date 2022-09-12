import "../styles/RenderGameOver.css";
import updateScene from "../../gameStart/updateScene";

export default function RenderGameOver() {
  const $div = document.createElement("div");
  const $h3 = document.createElement("h3");
  const $p = document.createElement("p");

  $div.classList.add("game-over");
  $h3.textContent = "YOU DIED";
  $p.textContent = "Play again? Press any key";

  $div.append($h3, $p);

  document.body.append($div);

  const func = () => {
    $div.remove();
    updateScene();
    window.removeEventListener("keydown", func);
  };

  window.addEventListener("keydown", func);
}
