// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `${license}` 
  }
  else {"None"}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license_link) {
  if (license_link !== "None") {
    return `${license_link}` 
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
  return `# Title
          ${data.title}

          # Description 
          ${data.description}

          # Table of Contents 
              - Title
              - Description
              - Installation
              - User Story
              - Usage
              - Concerns
              - License

          # Installation
          ${data.installation}

          # Usage
          ${data.usage}

          # License if Applicable
          ${renderLicenseSection(data)}

          # Contributions
          ${data.user_story}

          # Tests
          ${data.user_story}

          # Contact
          ${data.concerns}
`
}

module.exports = generateMarkdown;
