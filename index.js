// Use ES module imports
import inquirer from 'inquirer';
import fs from 'fs/promises';  // Use promises version for better async/await compatibility in the future
import generateReadme from './generateReadme.js'; 

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
    },
    // Add similar questions for installation, usage, contributing, tests
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }
];

inquirer.prompt(questions).then(async answers => {
    const readmeContent = generateReadme(answers);
    await fs.writeFile('README.md', readmeContent);  // Using promises version of fs
});
