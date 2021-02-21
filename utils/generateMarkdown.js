// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== [1]) {
    return `![MIT](https://img.shields.io/badge/license-MIT-blue.svg)`;
    console.log(license);
  } else {
      return '';
  }
  
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== [1] ) {
    return `
This project is covered under the license License [MIT](https://opensource.org/licenses/MIT)
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
function generateMarkdown(data) {
  return `# ${data.title}
  
#### Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Credits](#credits)
5. [License](#license)
6. [Questions](#questions)
## Description
* ${data.description}
## Installation 
* ${data.installation}
## Usage 
* ${data.usage}
## Credits
* ${data.credits}
${renderLicenseSection()}
${renderLicenseBadge()}
${renderLicenseLink()}

## Questions
* For additional help or if you would like to contribute to this project reach out to me at ${data.email}
* Follow me on Github at [${data.github}](http://github.com/${data.github})`;

}

module.exports = generateMarkdown;
