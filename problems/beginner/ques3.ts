//Implement a function that reverses a string.


function rev_str(x: string) : string {
  return  x.split("").reverse().join("");
}

console.log(rev_str("hello"));
console.log(rev_str("ramu"));