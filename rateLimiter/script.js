const div = document.querySelector(".div");
const btn = document.querySelector("#btn");
let debounceTimer;
let lastExecuted = 0;
const changeColor = function () {
  const color = Math.floor(Math.random() * 256);
  div.style.backgroundColor = `rgb(${color},${color},${color})`;
};

function debounce(fn, delay) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fn, delay);
  }
  
function throtle(fn,delay){


    let now= Date.now();
    if(now-lastExecuted>=delay){
        fn();
        lastExecuted = now;
    }

}
btn.addEventListener("click",()=>throtle(changeColor, 900));

function throttle(fn, interval) {
    let lastExecuted = 0;
    return function () {
      let now = Date.now();
      if (now - lastExecuted >= interval) {
        fn();
        lastExecuted = now;
      }
    };
  }
  
  const throttledFunction = throttle(changeColor, 300);
  btn.addEventListener("click", throttledFunction);