const inquirer = require ("inquirer");
const fs = require ("fs");

//cont generateReadme

inquirer
    .prompt([
        {type: "input",
        name: "name",
        message: "What is the project name?",
        },
        {type: "input",
        name: "description",
        message: "Enter description for readme",
        },
        {type: "input",
        name: "installation",
        message: "Enter installation instructions",
        },
        {type: "input",
        name: "useage",
        message: "Enter useage info",
        },
        {type: "input",
        name: "contribution",
        message: "Enter contribution guidelnes",
        },
        {type: "input",
        name: "test",
        message: "Enter test guidelines",
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
        message: "email",
        message: "Enter email address",
        },
    ])
    .then((answers)=>{
        const readMeContent = generateReadme(answers);

    fs.writeFile("README.md", readMeContent, (err)=>
        err ? console.log(err) : console.log ("Successfully created ReadME"));
    });