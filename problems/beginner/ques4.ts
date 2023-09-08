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




  
  
// array of objects
let todoList: listItem[] = [
  {data:"Learn Typescript", id :0}, 
  {data: "Making Todo List in TS", id: 1},
];


// view list  => make function type 
type viewListSign = (list: listItem[]) => void;
type addListSign = (list: listItem[], item: string) => void;
type deleteListSign = (list: listItem[], id: number) => void;


const viewList : viewListSign = (list) => {
  list.forEach((item) => {
    console.log(item.data, item.id);
  })
}


const addToList : addListSign = (list, str) => {
  const obj: listItem = {
    data: str,
    id: list.length,
  }

  list.push(obj);
}

const removeFromList : deleteListSign = (list, id) => {
  if(list.length<0) {
    console.log("No element found in the list, Enter some value first....");
    return;
  }
  const ind = list.findIndex((el) => el.id === id);
  if(ind!= -1) {
    todoList = list.filter((el)=> el.id !== id);
  }
  else {
         console.log(`ID ${id} not found. Enter valid id.....`);
  }
}






  while(true) {
    const ans = await rl.question(`Input a number: 
                              1. to view list
                              2. add data to list
                              3. remove data from list
                              4. Exit
                              Choose an option: `);
    console.log(ans);
    if(Number(ans) === 1) {
      viewList(todoList);
    }
    if(Number(ans) === 2) {
      const enteredData = await rl.question("Enter data: ");
      addToList(todoList, enteredData);
     
    }
   if(Number(ans) === 3) {
    const id = await rl.question("Enter id: ");
    removeFromList(todoList, Number(id));
   }
    if(Number(ans) === 4) {
      break;
    }
  }
  
  rl.close();



   
