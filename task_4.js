'use strict';
var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'response',
      message: 'Enter your gender',
      choices: [
        'Man',
        'Woman'
        ]
    }
  ]).then(answers => {
    if (answers == 'Man')
    {
        inquirer
         .prompt([
            {
             type: 'checkbox',
             name: 'Procedures',
             message: 'What did you like in our beauty shop?',
             choices: [
                    {
                        name: 'Man haircut'
                    },
                    {
                        name: 'Beard cutting'
                    }
                    ]      
            }
        ])
    }
    if (answers == 'Woman')
    {
        inquirer
         .prompt([
            {
             type: 'checkbox',
             name: 'Procedures',
             message: 'What did you like in our beauty shop?',
             choices: [
                {
                    name: 'Woman haircut'
                },
                {
                    name: 'Shugaring'
                },
                {
                    name: 'Nails'
                }
                      ]      
            }
        ])
    }
    
    }  
  
  )
    .then( answer => {console.log(JSON.stringify(answer, null, '  ') ) });
 






  /*function nestedInquirer(param) {
    if (param == 'Man')
    {
        inquirer
         .prompt([
            {
             type: 'checkbox',
             name: 'Procedures',
             message: 'What did you like in our beauty shop?',
             choices: [
                    {
                        name: 'Man haircut'
                    },
                    {
                        name: 'Beard cutting'
                    }
                    ]      
            }
        ])
    }
    if (param == 'Woman')
    {
        inquirer
         .prompt([
            {
             type: 'checkbox',
             name: 'Procedures',
             message: 'What did you like in our beauty shop?',
             choices: [
                {
                    name: 'Woman haircut'
                },
                {
                    name: 'Shugaring'
                },
                {
                    name: 'Nails'
                }
                      ]      
            }
        ])
    }
  
  }*/


