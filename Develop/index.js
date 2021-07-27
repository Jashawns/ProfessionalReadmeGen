// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// function init () {
  let entries = [
    {
      type: "response",
      name: "title",
      message: "What is the title of your app?"
    },
    {
      type: "response",
      name: "description",
      message: "What is the app used for?"
    },
    {
      type: "response",
      name: "installation",
      message: "How do you install the app?"
    },
    {
      type: "response",
      name: "usage",
      message: "How is the app used?"
    },  
    {
      type: "list",
      name: "license",
      message: "What license did you use: ",
      choices: [
          "MIT",
          "Mozilla",
          "Apache",
          "Zlib",
      ]
    },
    {
      type: "response",
      name: "contributions",
      message: "How can the user make contributions to the app?"
    },
    {
      type: "response",
      name: "tests",
      message: "How do you test the app?"
    },   
    {
      type: "response",
      name: "questions",
      message: "Where can the user email any questions or concerns?"
    },
    {
      type: "response",
      name: "user.story",
      message: "What is the user story?"
    },
    {
      type: "response",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "response",
      name: "email",
      message: "What is your email address?"
    }
  ]

function writeToFileAsync(rmeEntries, rmeData) {
  return fs.writeFileSync(path.join(process.cwd(),rmeEntries), rmeData)
  
}
// // TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(entries)
    .then((inquirerResponse) => {   
        console.log("Generated");
      writeToFileAsync("README.md", generateMarkdown({...inquirerResponse}))
    })
    .catch((err) => {
        console.log(err);
    })
  }
    // writeToFile ()git

// // Function call to initialize app
init ()
