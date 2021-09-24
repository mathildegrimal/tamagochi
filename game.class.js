export class Game {
  constructor(tamagochi, view) {
    this.timer = "";
    this.tamagochi = tamagochi;
    this.view = view;
  }
  play() {
    this.timer = setInterval(() => {
      this.tamagochi.updateStatus();
      this.view.update(this.tamagochi);

      for (const stat of this.tamagochi.stats) {
        if (stat.value <= 0) {
          this.end();
        }
      }
    }, 500);
    for (const button of this.view.buttons) {
      button.element.addEventListener("click", () => {
        this.tamagochi.care(button.name);
      });
    }
  }

  end() {
    console.log("end");
    this.tamagochi.isAlive = false;
    image.setAttribute("class", "");
    clearInterval(this.timer);
  }
}
