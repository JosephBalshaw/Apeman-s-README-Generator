// the file has the following dependences 
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');
const fs = require('fs');
// the questions to be asked
const questions = [
    {
        //creates an input 
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the discription of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'useage',
        message: 'What is the useage of the Project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution information?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions (email)?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions (github)?'
    },
    {
        //create a list of items that the user can choose from using the arrow keys
        type: 'list',
        name: 'licence',
        message: 'Licence?',
        choices: ['MIT', 'ISC', 'GMUGPLv3','N/A'],
        filter(val) {
            return val.toLowerCase();
        }
    }
]
// created a function to write the answers to the readme file
function writeToFile(mark) {
    fs.writeFile('Readme.md', mark, err => {
        if(err){
            console.log('Something went wrong. Please Try again', err);        
        } else{
            console.log('file saved');
        }
    })
}


//create function to ask the questions
function askQuestions() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        const mark = markDown(answers);
        writeToFile(mark);        

    }) 
    .catch((error)=>{
        console.log(error)
    })
}
// Function call to initialize app
askQuestions();