import { Tamagochi } from "./tamagochi.class.js";
import { Game } from "./game.class.js";
import { View } from "./view.class.js";

let image = document.getElementById("image");
let name = "Kiki";
let tamagochi = new Tamagochi(name);
const buttons = [
  {
    name: "play",
    element: document.getElementById("play"),
  },
  {
    name: "feed",
    element: document.getElementById("feed"),
  },
  {
    name: "sleep",
    element: document.getElementById("sleep"),
  },
];
let view = new View(image, buttons);

let game = new Game(tamagochi, view);

game.play();
