const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function quast_name(){
    rl.question('Как тебя зовут?',(answer)=>{
        if (answer==''){
            console.log(`IT'S IMPOSSIBLE, try again.\n`);
            quast_name();
        }
        else {
            console.log(`Привет, ${answer}!`);
            ans_n = answer;
            quast_lname();
            function quast_lname(){
                rl.question('А фамилия?',(answer)=>{
                    if (answer==''){
                        console.log(`IT'S IMPOSSIBLE, try again.\n`);
                        quast_lname();
                    }
                    else {
                        console.log(`Добро пожаловать, ${ans_n} ${answer}!`);
                        fs.writeFileSync('mynewfile1.txt', answer);
                        rl.close();
                    }
            
                });
            }
        }

    });
}

quast_name();









