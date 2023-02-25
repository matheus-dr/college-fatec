const prompt = require("prompt-sync")();

const n = Number(prompt("Number to pow? "));

console.log(n * n);

const temp = prompt("Insert your body temperature: ");

if (temp >= 35 && temp < 37.5) {
  console.log("You're ok");
} else {
  console.log("you're not ok");
}
