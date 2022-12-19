const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");

let hour = 0;
let min = 0;
let sec = 0;
let crono;

function play() {
  timer();
  crono = setInterval(() => {
    timer();
  }, 10);

  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  resetBtn.style.display = "block";
}

function pause() {
  clearInterval(crono);

  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
}

function reset() {
  clearInterval(crono);
  hour = 0;
  min = 0;
  sec = 0;

  document.querySelector("#display").innerText = "00:00:00";
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
  resetBtn.style.display = "none";
}

function timer() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hour++;
    }
  }

  function format(decimal) {
    if (decimal < 10) {
      return "0" + decimal;
    } else {
      return decimal;
    }
  }
  document.querySelector("#display").innerText =
    format(hour) + ":" + format(min) + ":" + format(sec);
}
