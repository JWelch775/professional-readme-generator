// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![MIT](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
      return '';
  }
  
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None' ) {
    return `
This project is covered under the MIT License ![MIT](https://opensource.org/licenses/MIT)
    `;
  }

  return '';
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return `
## License
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const license = answers.license;
  const badge = renderLicenseBadge();
  const link = renderLicenseLink();
  const licenseSection = renderLicenseSection();

  return `# ${answers.title}
  
#### Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Credits](#credits)
5. [License](#license)
6. [Questions](#questions)
## Description
* ${answers.description}
## Installation 
* ${answers.installation}
## Usage 
* ${answers.usage}
## Credits
* ${answers.credits}
${licenseSection}
${badge}
${link}

## Questions
* For additional help or if you would like to contribute to this project reach out to me at ${answers.email}
* Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;

}

module.exports = generateMarkdown;
