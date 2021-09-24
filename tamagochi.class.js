import clamp from "./utilities.js";

export class Tamagochi {
  constructor(name) {
    this.name = name;
    this.isAlive = true;
    this.isSleeping = false;
    this.stats = [
      {
        id: "satiety",
        value: 100,
        statusEl: null,
        id_bar: "satietyBar",
        bar: null,
      },
      {
        id: "energy",
        value: 100,
        statusEl: null,
        id_bar: "energyBar",
        bar: null,
      },

      {
        id: "fun",
        value: 100,
        statusEl: null,
        id_bar: "funBar",
        bar: null,
      },
    ];
    for (const s of this.stats) {
      s.statusEl = document.getElementById(s.id);
      s.bar = document.getElementById(s.id_bar);
      s.statusEl.innerText = "100%";
    }
  }

  updateStatus() {
    for (const s of this.stats) {
      switch (s.id) {
        case "fun":
          s.value = clamp(s.value - 1, 0, 100);
          break;
        case "energy":
          if (this.isSleeping) {
            s.value = clamp(s.value + 2, 0, 100);
          } else {
            s.value = clamp(s.value - 2, 0, 100);
          }
          break;
        case "satiety":
          s.value = clamp(s.value - 3, 0, 100);

          break;
      }
    }
  }

  care(status) {
    for (const s of this.stats) {
      switch (s.id) {
        case "satiety":
          if (status === "feed") {
            s.value = clamp(s.value + 10, 0, 100);
          }
          break;
        case "fun":
          if (status === "play") {
            s.value = clamp(s.value + 10, 0, 100);
          }
          break;
        case "energy":
          if (status === "sleep") {
            this.isSleeping = !this.isSleeping;
          }
          break;
        default:
          break;
      }
    }
  }
}
