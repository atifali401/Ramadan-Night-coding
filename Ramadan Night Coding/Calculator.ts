#!/usr/bin/env node

import inquirer from "inquirer";

const answers : {
 numberOne : number,
 numberTwo : number,
 Operator : string,
}
 = await inquirer.prompt([
{
    type : 'number',
name : 'numberOne',
 message : 'Kindly insert a first number'
}
{
    type : 'number',
name : 'numberTwo',
 message : 'Kindly insert a second number'
}
{
    type : 'list',
name : 'Operator',
choices : ['+', '-', '*', '/'],
 message : 'Select Operators'
}
 ]);
const {numberOne, numberTwo, Operator} = answers
if(numberOne && numberTwo && Operator){
let result : number = 0 ; 
   if(Operator === '+'){
   result = numberOne + numberTwo 
   }else  if(Operator === '-'){
    result = numberOne - numberTwo 
    }
    if(Operator === '*'){
        result = numberOne * numberTwo 
        }
        if(Operator === '/'){
            result = numberOne / numberTwo 
            }
            console.log('Your result is :', result)
}else{
    console.log('Kindly inser a valid number')
}

