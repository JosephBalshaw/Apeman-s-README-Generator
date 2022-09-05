// This function is used to generate a markdown for README
function generateMarkdown(answers) {
  //this part sets a switch statment so that the badge for the licences that are used in for the readme
  let input = answers.licence;
  switch (input){
    case 'mit':
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case 'isc':
      badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case 'gmugplv3':
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      badge = '';
      return badge;
  }
  // returns the following data as an object
  return `# ${answers.title} 
   ## Table of Contents 
   - [Project Discription](#Discription)
   - [Useage](#Useage)
   - [Installation](#Installation)
   - [Contributions](#Constributions)
   - [Licence](#Licence)
   - [Email](#Questions)
   - [github](#Questions)
   

   ## Discription
   ${answers.description}

   ## Useage
   ${answers.useage}

   ## Installation
   ${answers.installation}

   ## Contributions
   ${answers.contribution}

   ## Licence
   ${answers.licence}
   ${badge}
   

   ## Questions
   ${answers.email}   
   ${answers.github}


`;
}
//exports the generateMarkdown function
module.exports = generateMarkdown;
