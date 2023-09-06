
// Write a function to check if a number is even or odd.

// Method 1: using function type signature and arrow functions 

/*
NOTES: 
print() => aise krne par ho rha tha bakchodi(overloading in function)
evenOrOdd, evenOrOdd2,... and so on pe duplicate function declaratioan tha error
*/
type fxnSignature = (x: number) => boolean;

let evenOrOdd: fxnSignature = (x) => {
if(x%2===0) {
    return true;
}
return false;
}


// Method 2
function evenOrOdd2(x: number) : boolean {
    if(x%2 === 0) {
        return true;
    }
    return false;
}

//Method 3 using interface function signature 
interface fxnSign2 {
    (x:number): boolean;
}

let evenOrOdd3: fxnSign2 = (x) => {
    if(x%2 === 0) {
        return true;
    }
    else return false;
}


// Method 4
let evenOrOdd4 = (x: number) => {
    return x%2 === 0;
}


// Method 5 : using object types and method

interface fxnSign3 {
    x: number,
    evenOrOdd5: (x:number) => boolean
}

let num : fxnSign3 = {
// initialising to be random number 
    x: Math.random(),
    evenOrOdd5:  (x: number) => {
        this.x = x;
        return this.x === 0;
    }
}



function print_something(x: boolean)  {
    if(x) {
    console.log("Even no.");
    }
    else 
        console.log("Odd no.");
}



print_something(evenOrOdd(3));
print_something(evenOrOdd2(56));
print_something(evenOrOdd3(789));
print_something(evenOrOdd4(234));
print_something(num.evenOrOdd5(345));

