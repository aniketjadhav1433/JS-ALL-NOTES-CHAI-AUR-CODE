let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let body = document.querySelector("body");


let interval;

let randomColor = () => {
  let hex = "0123456789abcdef";  // these are 16 numbers so we need numbers btw 0-16
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];  // this will take the index of hex code and add it till 6 numbers
  }
  return color;
};

start.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      body.style.backgroundColor = randomColor();
      console.log(randomColor());
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
