// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    return `License Info: ${license}` 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "") {
    return `License Link ${license}` 
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return ` ${renderLicenseBadge(data.license)}` 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          # ${data.description}
          # ${data.tableofcontents}
          # ${data.installation}
          # ${data.userstory}
          # ${data.usage}
          # ${data.concerns}
          # ${renderLicenseBadge(data.license)}

  

`;
}

module.exports = generateMarkdown;
