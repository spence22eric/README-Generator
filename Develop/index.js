// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your project title?',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log("Please enter your project title!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project.',
            validate: descriptionEntry => {
                if (descriptionEntry) {
                    return true;
                } else {
                    console.log("Every good README needs a description. Take your time!")
                    return false;
                }
            }
        }
    ])
}

questions();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
