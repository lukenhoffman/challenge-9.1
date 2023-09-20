function generateReadme(data) {
    let licenseBadge = '';

    switch (data.license) {
        case 'MIT':
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        // Handle other licenses similarly
    }

    return `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
// Add installation details

## Usage
// Add usage details

## License
This project is licensed under the ${data.license} license.

## Contributing
// Add contributing details

## Tests
// Add tests details

## Questions
For any questions, please reach out to [${data.github}](https://github.com/${data.github}) or send an email to ${data.email}.
    `;
}

export default generateReadme;
