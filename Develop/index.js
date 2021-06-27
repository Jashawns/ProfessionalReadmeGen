// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path')
var util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// function init () {
var entries = [
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
    name: "user_story",
    message: "What is the description of the target user of the app?"
  },
  {
    type: "response",
    name: "usage",
    message: "How is the app used?"
  },     
  {
    type: "response",
    name: "license",
    message: "What is the license badge?"
  },
  {
    type: "response",
    name: "license_link",
    message: "What is the license link?"
  },
  {
    type: "response",
    name: "contributions",
    message: "How can the user make contributions to the app?"
  },
  {
    type: "response",
    name: "concerns",
    message: "How does the user report issues?"
  }
]

function writeToFile(rmeEntries, rmeData) {
  return fs.writeFileSync(path.join(process.cwd(),rmeEntries), rmeData)
  
}
// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(entries)
    .then((inquirerResponse) => {   
        console.log("Generated");
      writeToFile("README.md", generateMarkdown({...inquirerResponse}))
    })
    .catch((err) => {
        console.log(err);
    })
  }
    // writeToFile ()git

// // Function call to initialize app
init() 
