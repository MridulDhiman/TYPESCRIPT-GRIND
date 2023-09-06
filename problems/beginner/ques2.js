// Write a function to check if a number is even or odd.
let evenOrOdd = (x) => {
    if (x % 2 === 0) {
        return true;
    }
    return false;
};
// Method 2
function evenOrOdd2(x) {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}
let evenOrOdd3 = (x) => {
    if (x % 2 === 0) {
        return true;
    }
    else
        return false;
};
// Method 4
let evenOrOdd4 = (x) => {
    return x % 2 === 0;
};
let num = {
    x: Math.random(),
    evenOrOdd5: (x) => {
        // reinitialising the input 
        this.x = x;
        return this.x === 0;
    }
};
function print_something(x) {
    if (x) {
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
// console.log(evenOrOdd(3));
// console.log(evenOrOdd2(24));
