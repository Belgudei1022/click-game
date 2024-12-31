let count = 0;
const counter = document.querySelector(".counter");
const outspace = document.querySelector(".outspace");
const btn = document.querySelector(".click");

let intervalId = null;

btn.addEventListener("click", () => {
  const containerRect = outspace.getBoundingClientRect();
  const buttonSize = 60;

  const randomX = Math.random() * (containerRect.width - buttonSize);
  const randomY = Math.random() * (containerRect.height - buttonSize);

  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;

  count++;
  counter.innerHTML = count;

  if (!intervalId) {
    intervalId = setInterval(starttime, 100);
  }
});

outspace.addEventListener("click", (e) => {
  if (!e.target.classList.contains("click")) {
    alert("You did well!");
    count = 0;
    counter.innerHTML = count;
    clearInterval(intervalId);
  }
});

const minute = document.getElementById("minute");
const second = document.getElementById("second");
const reset = document.querySelector(".reset");

let m = 0;
let s = 0;

function starttime() {
  s++;
  if (s < 10) {
    second.innerText = "0" + s;
  } else {
    second.innerText = s;
  }

  if (s == 59) {
    s = 0;
    m++;
    if (m < 10) {
      minute.innerText = "0" + m;
    } else {
      minute.innerText = m;
    }
  }
}
reset.addEventListener("click", () => {
  intervalId = null;

  m = 0;
  s = 0;

  minute.innerText = "00";
  second.innerText = "00";
});
