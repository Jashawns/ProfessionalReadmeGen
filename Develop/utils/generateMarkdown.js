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
  return `# ${data.title} 
        ![License Badge](https://img.shields.io/badge/License-${data.license}-blue.svg 
          
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

          # License if Applicable:
          ${renderLicenseSection(data)}

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
          ${data.questions}

          # User Story
          ${data.user_story}

          # Contact
          Respository can be found at:
          [GitHub Profile] (https://github.com/${data.username}/ProfessionalReadmeGen)

          Developer Email:
          [Email] ${data.email}
`
}

module.exports = generateMarkdown;
