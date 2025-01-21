const container = document.getElementById("container");
const select = document.getElementById("select");
const start = document.getElementById("start");
const time = document.getElementById('slider');
console.log(time.value);



start.addEventListener("click", () => {
  if (select.value == "bubble") {
    bubbleSort();
  }
  if (select.value == "selection") {
    selectionSort();
  }
});


(function (num = 40) {
  container.innerHTML = "";
  for (let i = 0; i < num; i++) {
    let value = Math.floor(Math.random() * 100) + 1;
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.style.width = `${600 / num}px`;
    container.appendChild(bar);
  }
})();

async function bubbleSort() {
  let bars = document.querySelectorAll(".bar");
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      let bar1 = bars[j];
      let bar2 = bars[j + 1];

      let h1 = parseInt(bar1.style.height);
      let h2 = parseInt(bar2.style.height);

      bar1.style.backgroundColor = "red";
      bar2.style.backgroundColor = "red";
      await new Promise((resolve) => setTimeout(resolve, 10));
      if (h1 > h2) {
        [bar1.style.height, bar2.style.height] = [
          bar2.style.height,
          bar1.style.height,
        ];
      }
      bar1.style.backgroundColor = "blue";
      bar2.style.backgroundColor = "blue";
    }
  }
}

async function selectionSort() {
  let bars = document.querySelectorAll(".bar");
  for (let i = 0; i < bars.length - 1; i++) {
    let min_idx = i;
    bars[min_idx].style.backgroundColor = "green";

    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.backgroundColor = "red";

      let h1 = parseInt(bars[j].style.height);
      let h2 = parseInt(bars[min_idx].style.height);
      await new Promise((resolve) => setTimeout(resolve, 50));
      if (h1 < h2) {
        bars[min_idx].style.backgroundColor = "blue";
        min_idx = j;
        bars[min_idx].style.backgroundColor = "green";
      } else {
        bars[j].style.backgroundColor = "blue"; 
      }
    }
    if (min_idx !== i) {
      [bars[i].style.height, bars[min_idx].style.height] = [
        bars[min_idx].style.height,
        bars[i].style.height,
      ];
    }
    bars[min_idx].style.backgroundColor = "blue";
  }
}
