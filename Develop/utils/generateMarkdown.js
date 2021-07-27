// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg "License Badge")` 
  }
  else {"None"}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license_link) {
  if (license_link !== "None") {
    return `(https://opensource.org/licenses/${license})` 
  }
  else {"None"}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    return `${renderLicenseBadge(data.license)}
          ${renderLicenseLink(data.license_link)}     
    ` 
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License](https://img.shields.io/badge/License-${license}-blue.svg 
          
          # Description 
          ${data.description}

          # Table of Contents 
              - Installation
              - Usage
              - License
              - Contributing
              - Tests
              - Questions
              - User Story
              - Contact

          # Installation
          ${data.installation}

          # Usage
          ${data.usage}

          # License if Applicable
          ${renderLicenseSection(data)}

          # Contributions
          ${data.contributions}

          # Tests
          ${data.tests}

          # Questions
          ${data.questions}

          # User Story
          ${data.user_story}

          # Contact

          [Github Profile] (https://github.com/${data.username}/ProfessionalReadmeGen)

          Direct all questions and concerns to:
          [Email] ${data.email}
`
}

module.exports = generateMarkdown;
