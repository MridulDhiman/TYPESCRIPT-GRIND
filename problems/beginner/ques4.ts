// Create a simple to-do list application with add, remove, and list functionalities.

/*
Todo list: main main item kya hogi 
1. input from user
2. data store krna hoga 
3. data load krna hoga
4. data=> har data pe lagegi id
5. id hogi unique 
*/

/*
NOTES: 
Ques 1: How to take input in TS?
=> stackoverflow solution: using readline module 
*/

import * as readline from "readline/promises";
import {stdin as input, stdout as output } from "process";

interface listItem {
data: string;
id: number;
}

const rl = readline.createInterface({
    input, output
  }); 


  const ans = await rl.question("Input a number: ");
  console.log(ans);
  

   
