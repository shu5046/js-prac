const container = document.getElementById("container");
const select = document.getElementById("select");
const start = document.getElementById("start");
let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");
let numbar = document.getElementById("numbars");
let delay = 20;

numbar.addEventListener("input", function(){
  num = this.value;
  (function (num) {
    container.innerHTML = "";
    for (let i = 0; i < num; i++) {
      let value = Math.floor(Math.random() * 100) + 1;
      let bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${value * 3}px`;
      bar.style.width = `${600 / num}px`;
      container.appendChild(bar);
    }
  })(num);
});
slider.addEventListener("input", function () {
  sliderValue.textContent = `${this.value}ms`;
  delay = this.value;
});

start.addEventListener("click", () => {
  if (select.value == "bubble") {
    bubbleSort();
  }
  if (select.value == "selection") {
    selectionSort();
  }
  if (select.value == "insertion") {
    insertionSort();
  }
});


async function bubbleSort() {
  let bars = document.querySelectorAll(".bar");
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      let bar1 = bars[j];
      let bar2 = bars[j + 1];

      let h1 = parseInt(bar1.style.height);
      let h2 = parseInt(bar2.style.height);

      bar1.style.backgroundColor = "rgba(255, 0, 0,0.5)";
      bar2.style.backgroundColor = "rgba(255, 0, 0,0.5)";
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (h1 > h2) {
        [bar1.style.height, bar2.style.height] = [
          bar2.style.height,
          bar1.style.height,
        ];
      }
      bar1.style.backgroundColor = "rgba(0, 0, 255,0.4)";
      bar2.style.backgroundColor = "rgba(0, 0, 255,0.4)";
    }
  }
}

async function selectionSort() {
  let bars = document.querySelectorAll(".bar");
  for (let i = 0; i < bars.length - 1; i++) {
    let min_idx = i;
    bars[min_idx].style.backgroundColor = "rgba(0,255, 0,0.5)";

    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.backgroundColor = "rgba(255, 0, 0,0.5)";

      let h1 = parseInt(bars[j].style.height);
      let h2 = parseInt(bars[min_idx].style.height);
      await new Promise((resolve) => setTimeout(resolve, 50));
      if (h1 < h2) {
        bars[min_idx].style.backgroundColor = "rgba(0, 0, 255,0.4)";
        min_idx = j;
        bars[min_idx].style.backgroundColor = "rgba(0,255, 0,0.5)";
      } else {
        bars[j].style.backgroundColor = "rgba(0, 0, 255,0.4)";
      }
    }
    if (min_idx !== i) {
      [bars[i].style.height, bars[min_idx].style.height] = [
        bars[min_idx].style.height,
        bars[i].style.height,
      ];
    }
    bars[min_idx].style.backgroundColor = "rgba(0, 0, 255,0.4)";
  }
}

async function insertionSort() {
  let bars = document.querySelectorAll(".bar");
  for (let i = 1; i < bars.length; i++) {
    let j = i - 1;
    let temp = bars[i].style.height;
    bars[i].style.backgroundColor = "rgba(255, 0, 0,0.5)";
    await new Promise((resolve) => setTimeout(resolve, delay));
    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(temp)) {
      bars[j + 1].style.height = bars[j].style.height;
      bars[j].style.backgroundColor = "rgba(255, 0, 0,0.5)";
      j--;
      await new Promise((resolve) => setTimeout(resolve, delay));
      bars[j + 1].style.backgroundColor = "rgba(0, 0, 255,0.4)";
    }
    bars[j + 1].style.height = temp;
    bars[i].style.backgroundColor = "rgba(0, 0, 255,0.4)";
  }
}
