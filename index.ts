#! /usr/bin/env node

import inquirer from "inquirer";
console.log("Welvome To Number Guessing Game.")
const Randomnumber = Math.floor(Math.random() * 10 + 1);
while (true) { 
const answer = await inquirer.prompt([
  {
    name: "UserGuessNum",
    type: "number",
    message: "Guess a Number From 1-10",
  },
]);
console.log(answer);
if (answer.UserGuessNum === Randomnumber) {
  console.log("Congratulations! You Guess Right");
 break} else {
  console.log("Oops! try Again");
}
}