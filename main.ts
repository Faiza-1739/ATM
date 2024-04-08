#! /usr/bin/env node
import inquirer from "inquirer";

//initialing
let myBalance = 1200000;
let myPin = 12345;

//print welcome message
console.log("Welcome to your ATM Machine Access");

let pinanswer = await inquirer.prompt([
  {
    message: "Enter Your Atm Pin number",
    type: "number",
    name: "pin",
  }
])
if (pinanswer.pin === myPin) {
    console.log("Correct Pincode!!! \n  Login Succcessfully");
    
 
    let operationAnswer = await inquirer.prompt([
    {
      message: " which action you want to perform",
      name: "operation",
      type: "list",
      choices: ["witdraw", "check Balance"]
    }
  ])

 if(operationAnswer.operation ==="witdraw"){
  let witdrawAns = await inquirer.prompt([
    {
      name:"witdrawMethod",
      type:"list",
      message:"select a witdrawl method",
      choices:["fastCash","EnterAmount"]
    }
  ])
  if(witdrawAns.witdrawMethod === "fastCash"){
    let fastcashAns = await inquirer.prompt([
      {
        name:"fastcash",
        type:"list",
        message:"Enter amount",
        choices:[1000,2000,3000,5000,10000]
      }
    ])
    if (fastcashAns.fastcash > myBalance){
      console.log("insufficient balance");
    }
    else{
      myBalance -= fastcashAns.fastcash;
      console.log(`${fastcashAns.fastcash} witdraw Successfully`);
      console.log(`your remaining balance is ${myBalance}`);
    }
  }
  else if(witdrawAns.witdrawMethod ==="EnterAmount"){
    let amountAns = await inquirer.prompt([
      {
        name:"amount",
        type:"number",
        message:" Enter Amount to witdraw"
      }
    ])
   if(amountAns.amount > myBalance){
    console.log("Insufficient Balance");
   }
    else{
      myBalance -= amountAns.amount;
      console.log(`${amountAns.amount}witdraw Successfully`);
      console.log(`your remainimg balance is ${ myBalance}`);
    }
  }
  
}
else if(operationAnswer.operation ==="check Balance"){
  console.log(`your account balance is ${myBalance}`);
}
}
else{
 console.log("incorrect pincode") ;
}