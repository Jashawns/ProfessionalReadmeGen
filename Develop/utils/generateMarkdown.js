// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[MIT License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)`

  }
  else if (license === "Mozilla") {
    return `[MPL 2.0 License Badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`

  }
  else if (license === "Apache") {
    return `[Apache License Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`

  }
  else if (license === "Zlib") {
    return `[Zlib License Badge](https://img.shields.io/badge/License-Zlib-lightgrey.svg)`

  }
  else if (license === "None") {

    return ``

  };
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`

  }
  else if (license === "Mozilla") {
    return `[Mozilla](https://opensource.org/licenses/MPL-2.0)`


  }
  else if (license === "Apache") {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`

  }
  else if (license === "Zlib") {
    return `[Zlib](https://opensource.org/licenses/Zlib)`

  }
  else if (license === "None") {

    return ``

  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
    `
  }
  else { "None" }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  
  
# ${data.title}

  ${renderLicenseBadge(data.license)}


# Description 

  ${data.description}


# Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  - [User_Story](#user_story)
  - [Contact](#contact)

# Installation

  ${data.installation}


# Usage

  ${data.usage}


# License

  ${renderLicenseSection(data.license)}
 

# Contributions

  Contributions to the app can be made to:

  ${data.contributions}


# Tests

  The following tests were run from the original version to catch errors:

  - Random value
  - DIV comparison
  - OR comparison
  - ${data.tests}


# Questions

  Questions and concerns may be sent to:

  [Questions](mailto:${data.questions})


# User_Story

  ${data.user_story}


# Contact

  Respository can be found at:

  [GitHub](https://github.com/${data.username}/ProfessionalReadmeGen)


  Developer Email:

  [Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
