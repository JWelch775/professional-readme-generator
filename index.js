// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);


function promptUser() { 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description for this project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'give a step by step description on how to get your application up and running if any. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please describe how to install/run your program');
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples on the usage of your application. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please provide a description on the usage of your application')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Please enter a list of people (if any) that are responsible for developing this project (required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Who is responsible for developing this project?')
                return false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license. (Required)',
        choices: ['MIT', 'None'],
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else{
                console.log('Please choose a license');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username (required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    }
]);
}

promptUser()
  .then(function(data) {
    const readme = generateMarkdown(data);
    const license = data.license
 
    return writeFile("README.md", readme);
  })
  .then(function() {
    console.log(" README.md has been created!");
  })
  .catch(function(err) {
    console.log(err);
  });









