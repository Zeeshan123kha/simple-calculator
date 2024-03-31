#!  /usr/bin/env node

import inquirer from "inquirer";

// Asking Question from users through inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},

    {message: "Enter Second Number", type: "number", name: "secondNumber"},

    {
        message: "select one operator to perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subraction", "Multiplication", "Divison"]
    }
])

if (answers.operator ==="Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
} else if(answers.operator ==="Subraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator ==="Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
} else if(answers.operator ==="Divison") {
    console.log(answers.firstNumber / answers.secondNumber);
} 
else {
    console.log("please enter your valid number");
}
console.log("THE END");