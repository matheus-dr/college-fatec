// Tabuada
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const input = Number(prompt("Insert a number: "));

let i = 0;
while (++i <= 10) {
  console.log(`${i} * ${input} = ${i * input}`);
}

// Exec
const weight = Number(prompt("Insert your weight: "));

let totalSeconds = 0;
let x = weight;

while (x >= 0.1) {
  totalSeconds += 30;
  x *= 0.85;
}

console.log(
  `Minutes: ${Math.trunc(totalSeconds / 60)}\nSeconds: ${-(
    Math.trunc(totalSeconds / 60) * 60 -
    totalSeconds
  )}`
);
