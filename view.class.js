export class View {
  constructor(image, buttons) {
    this.image = image;
    this.background = image.parentNode;
    this.buttons = buttons;
  }

  update(tamagochi) {
    for (const stat of tamagochi.stats) {
      this.setBarWidth(stat);
      this.setText(stat);
      this.setBarColor(stat, "rgb(2, 173, 2)");

      if (tamagochi.isSleeping) {
        this.setBackgroundColor("black");
        this.setImage("./svg/sleep.svg");
      } else {
        this.setBackgroundColor("white");
        if (stat.value <= 0) {
          this.setBarColor(stat, "");
          this.setImage("./svg/dead.svg");
        } else if (stat.value < 25) {
          this.setBarColor(stat, "red");
          this.setImage("./svg/crying.svg");
        } else if (stat.value < 50) {
          this.setBarColor(stat, "yellow");
          this.setImage("./svg/sad.svg");
        } else if (stat.value < 75) {
          this.setImage("./svg/neutral.svg");
        }
      }
    }
  }

  setBarColor(stat, color) {
    stat.bar.style.backgroundColor = color;
  }

  setImage(src) {
    this.image.src = src;
  }

  setText(stat) {
    stat.statusEl.innerText = `${stat.value} %`;
  }

  setBarWidth(stat) {
    stat.bar.style.width = `${stat.value}%`;
  }

  setBackgroundColor(color) {
    this.background.style.backgroundColor = color;
  }
}
