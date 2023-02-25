const prompt = require("prompt-sync")();

const salary = prompt("Insert your salary: ");
const readjustment = prompt(
  "Insert how much it will have the readjustment (in the format N%): "
);

console.log(
  `Your new salary is ${Number(salary) * (1 + Number(readjustment) / 100)}`
);
