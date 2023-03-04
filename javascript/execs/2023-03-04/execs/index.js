import PromptSync from "prompt-sync";

const prompt = PromptSync();

const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const div = (x, y) => x / y;
const mult = (x, y) => x * y;

const amountOfNumbers = Number(prompt("How many numbers (min 2)? "));

let i = 2;
const firstNumber = Number(prompt("Insert the 1 number: "));
let answer = firstNumber;

do {
  const num = Number(prompt(`Insert the ${i} number: `));

  const operator = prompt("Which operator? (+, -, *, /) ");

  switch (operator) {
    case "+":
      answer = sum(answer, num);
      break;
    case "-":
      answer = sub(answer, num);
      break;
    case "*":
      answer = mult(answer, num);
      break;
    case "/":
      answer = div(answer, num);
      break;
    default:
      console.log("Invalid input");
      break;
  }
} while (i++ < amountOfNumbers);

console.log(`Answer: ${answer}`);
