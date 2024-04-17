import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            message: 'what you want to add in your todos',
            type: 'input',
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'Do you want to add more ?',
            default: 'false'
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
