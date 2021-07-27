// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[License: MIT](https://img.shields.io/badge/License-MIT-yellow)` 
  }
  else if (license === "Mozilla") {
    return `[License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen)` 
  }
  else if (license === "Apache") {
    return `[License](https://img.shields.io/badge/License-Apache%202.0-blue)`
  }
  else if (license === "Zlib") {
    return `[License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey)`
}
  else if (license === "None") {
  return `` 
};
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[(https://opensource.org/licenses/MIT)]` 
  }
  else if (license === "Mozilla") {
    return `[(https://opensource.org/licenses/MPL-2.0)]` 
  }
  else if (license === "Apache") {
    return `[(https://opensource.org/licenses/Apache-2.0)]`
  }
  else if (license === "Zlib") {
    return `[(https://opensource.org/licenses/Zlib)]`
}
  else if (license === "None") {
  return `` 
};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `${renderLicenseBadge(license)}
          ${renderLicenseLink(license)}     
    ` 
  }
  else {"None"}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title} 
  
          ${renderLicenseBadge(data.license)}
          
          #Description 
          ${data.description}

          #Table of Contents 
              - [Installation](#installation)
              - [Usage](#usage)
              - [License](#license)
              - [Contributing](#contributing)
              - [Tests](#tests)
              - [Questions](#questions)
              - [User Story](#user_story)
              - [Contact](#contact)

          #Installation
          ${data.installation}

          #Usage
          ${data.usage}

          #License if Applicable:
          ${renderLicenseSection(data.license)}

          #Contributions
          Contributions to the app can be made to:
          ${data.contributions}

          #Tests
          The following tests were run from the original version to catch errors:
          - Random value
          - DIV comparison
          - OR comparison
          - ${data.tests}

          #Questions
          Questions and concerns may be sent to:
          ${data.questions}

          #User Story
          ${data.user_story}

          #Contact
          Respository can be found at:
          [GitHub Profile](https://github.com/${data.username}/ProfessionalReadmeGen)

          Developer Email:
          [(${data.email}]
`;
}

module.exports = generateMarkdown;
