import inquirer from "inquirer";
let todos = []; // Shooper []
let condition = true;

while(condition){
 let addTask = await inquirer.prompt(
     [
         {
             name: 'firstQuestion',
             message : 'what you want to add in your todos',
             type: 'input',
         },
     {
         name: 'SecondQuestion',
         type : 'confirm', // when type is confirm answer is yes or no
         message :'would you like to add more in your todos ?',
         default : 'false'
     }
    ]
 );
todos.push(addTask.firstQuestion);
// the loop ll be run on base of variables
condition = addTask.addMore
console.log(todos)
}