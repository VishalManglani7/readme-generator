const inquirer = require ("inquirer");
const fs = require ("fs");

const generateReadme = (obj) =>{
    const { name, description, installation, usage, contribution, test, license, email} = obj;

    return ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name}</title>
    </head>
    
    <body>
        <h1>${name}</h1>
    
        <h2>Description</h2>
        <p>${description}</p>
    
        <h2>Installation</h2>
        <p>${installation}</p>
    
        <h2>Usage</h2>
        <p>${usage}</p>
    
        <h2>Contribution</h2>
        <p>${contribution}</p>
    
        <h2>Tests</h2>
        <p>${test}</p>
    
        <h2>License</h2>
        <p>${license}</p>
    
        <p>For questions please contact: ${email}</p>
    
    </body>
    
    </html>`;}


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
        name: "usage",
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