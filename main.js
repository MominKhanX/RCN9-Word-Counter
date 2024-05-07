#! /usr/bin/env node
import chalk from "chalk";
// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
// Print welcome message
console.log(chalk.bold.rgb(73, 158, 255)(`${chalk.bold.hex('#499EFF')(`\n  \t\t\t <<<======================================>>>`)}`));
console.log(chalk.rgb(0, 255, 51).bold("\n \t<================ Welcome to My Word-Counter Application\u{1F60A} ================>\n"));
console.log(chalk.bold.rgb(73, 158, 255)(`${chalk.bold.hex('#499EFF')(`\t\t\t <<<======================================>>>\n`)}`));
// Declare a constant 'answers' and assign it to the result of inquirer.prompt function 
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.rgb(60, 195, 222).bold("Enter your message to count the word: ")
    },
]);
const words = answers.Sentence.trim().split(" ");
// Print the array of words to the console
console.log(words);
// Print 
console.log(chalk.rgb(242, 255, 3).bold(`Your Sentence Word Count is ${words.length}`));
