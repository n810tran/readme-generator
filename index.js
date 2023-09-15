// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter a project title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Select a license for your project',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'Other', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README has been successfully created.');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const {
                title,
                description,
                installation,
                usage,
                contributing,
                tests,
                license,
                githubUsername,
                email,
            } = answers;

            // Generate the license badge and notice
            let Badge = '';
            let licenseNotice = '';

            if (license === 'MIT') {
                Badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                licenseNotice = 'This application is licensed under the [MIT](https://opensource.org/licenses/MIT) license.';
            } else if (license === 'GNU GPLv3') {
                Badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                licenseNotice = 'This application is licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0) license.';
            } else if (license === 'Apache 2.0') {
                Badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                licenseNotice = 'This application is licensed under the [Apache 2.0](https://opensource.org/licenses/Apache-2.0) license.';
            } else {
                licenseNotice = 'This application is not covered by any specific license.';
            }

            // Generate the content for the README.md
            const readmeContent = 
`
# ${title}

${Badge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${licenseNotice}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, you can reach me at [GitHub](https://github.com/${githubUsername}) or by email at ${email}.
`;

            // Write the content to README.md
            writeToFile('README.md', readmeContent);
        });
}

// Function call to initialize app
init();