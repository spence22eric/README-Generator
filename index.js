// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');


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
            name: 'github',
            message: 'What is your GitHub username?',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },
        {
            input: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLinkedIn',
            message: 'Would you like to add your LinkedIn profile?',
            default: true
        },
        {
            type: 'input',
            name: 'linkedIn',
            message: 'Please paste your FULL LinkedIn URL (with https://).',
            when: ({ confirmLinkedIn }) => {
                if (confirmLinkedIn) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
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
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter your installation steps.',
            vadlidate: installationEntry => {
                if (installationEntry) {
                    return true;
                } else {
                    console.log("Please enter an installation guide!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'userGuide',
            message: 'Please describe how to use your application.',
            validate: usageGuide => {
                if (usageGuide) {
                    return true;
                } else {
                    console.log("Please provide a usage guide!");
                    return false;
                }
            }
        }        
    ])
        .then((answers) => {
            console.log(answers);
            writeToFile('Generated-README.md', answers);
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {

    });
};

// // TODO: Create a function to initialize app
function init() {
    questions();
}

// // Function call to initialize app
init();
