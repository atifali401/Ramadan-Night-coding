import inquirer from "inquirer";
let myBalance = 12000; // Dollar
let myPin = 54321;
let pinAswer = await inquirer.prompt([
    {
        name: 'Q1',
        message: 'enter your pin',
        type: 'number',
    }
]);
if (pinAswer.pin === myPin) {
    console.log('Correct');
}
let operationAns = await inquirer.prompt([
    {
        name: 'operation',
        message: 'please select option',
        type: 'list',
        choices: ['withdraw', 'check balance']
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: 'amount',
            message: 'enter your amount',
            type: 'number'
        }
    ]);
    // =. -= , +=
    myBalance -= amountAns.amount;
    console.log('Your remining balance is:' + myBalance);
}
else if (operationAns.operation === "check balance") {
    console.log('Your balace is:' + myBalance);
}
else {
    console.log('Incorrect pin');
}
