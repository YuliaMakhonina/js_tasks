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
    
    if (answers.response == 'Man')
    {
        
       return inquirer
         .prompt([
            {
             type: 'checkbox',
             name: 'Procedures',
             message: 'What of procedures did you try?',
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
    if (answers.response == 'Woman')
    {
        return inquirer
         .prompt([
            {
             type: 'checkbox',
             name: 'Procedures',
             message: 'What of procedures did you try?',
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
    .then(answers1=>{
        
        var arrayvalue = [];
       
         
        for (const value of answers1.Procedures){
           inquirer
                    .prompt([
                        {       type: 'list',
                                name: 'you_liked',
                                message: `Did you like ${value}?`,
                                choices: ['Yes', 'No']
                        }])
            .then(answer2 => { if (answer2.you_liked == 'Yes'){arrayvalue.push(value);
              console.log(JSON.stringify(arrayvalue, null, '  ') );}});
        
      }
        console.log('You liked that procedures: ');
        console.log(JSON.stringify(arrayvalue, null, '  ') );
    }
    );
   // .then( answer => { console.log(JSON.stringify(answer, null, '  ') ); });
 