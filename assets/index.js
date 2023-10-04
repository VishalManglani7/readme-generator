const inquirer = require ("inquirer");
const fs = require ("fs");

const generateReadme = (obj) => {
    const { name, description, installation, usage, contribution, test, license, email, github } = obj;

    return `# ${name}

# Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Tests
${test}

## License
${license}

## Questions
For questions please contact: ${email}
[GitHub](https://github.com/${github})`;}


inquirer
    .prompt([
        {type: "input",
        name: "name",
        message: "What is the project name?",
        },
        {type: "input",
        name: "description",
        message: "Enter description for readme:",
        },
        {type: "input",
        name: "installation",
        message: "Enter installation instructions:",
        },
        {type: "input",
        name: "usage",
        message: "Enter usage info:",
        },
        {type: "input",
        name: "contribution",
        message: "Enter contribution guidelines:",
        },
        {type: "input",
        name: "test",
        message: "Enter test guidelines:",
        },
        {type: "checkbox",
        name: "license",
        message: "Select license",
        choices: [
            "MIT",
            "CC",
            "GPL",
        ]},
        {type: "input",
        name: "email",
        message: "Enter email address:",
        },
        {type: "input",
        name: "github",
        message: "Enter github username:",
        },
    ])
    .then((answers)=>{
        const readMeContent = generateReadme(answers);

    fs.writeFile("README.md", readMeContent, (err)=>
        err ? console.log(err) : console.log ("Successfully created ReadME"));
    });