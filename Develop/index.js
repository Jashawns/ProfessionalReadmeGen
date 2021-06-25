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
    name: "##Table of Contents",
    message: "What are the names?"
  },
  {
    type: "response",
    name: "##Installation",
    message: "WHow do you install the app?"
  },
  {
    type: "response",
    name: "##User Story",
    message: "What is the description of the target user of the app?"
  },
  {
    type: "response",
    name: "##Usage",
    message: "How is the app used?"
  },     
  {
    type: "response",
    name: "license",
    message: "What is the licensing information?"
  },
  {
    type: "response",
    name: "##Contributions",
    message: "How can the user make contributions to the app?"
  },
  {
    type: "response",
    name: "Concerns",
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
    // writeToFile ()

// // Function call to initialize app
init() 
