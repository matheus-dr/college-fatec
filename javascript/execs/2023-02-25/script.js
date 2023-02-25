const body = document.querySelector("body");

let r = 256;
let g = 256;
let b = 256;

let flagUpRed = true;
let flagUpGreen = true;
let flagUpBlue = true;

const a = setInterval(() => {
  if (r > 255 || g > 255 || b > 255 || r < 40 || g < 40 || b < 40) {
    flagUpRed = Math.random() > 0.5;
    flagUpGreen = Math.random() > 0.5;
    flagUpBlue = Math.random() > 0.5;
  }

  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  if (flagUpRed) {
    r++;
  } else {
    r--;
  }

  if (flagUpGreen) {
    g++;
  } else {
    g--;
  }

  if (flagUpBlue) {
    b++;
  } else {
    b--;
  }
}, 0);
