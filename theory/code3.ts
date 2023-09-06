
//downleveling to es6 syntax let's say.

const [a, b] = [3,"number"];
console.log(a,b);


// tsc code3.ts => downlevel to ES3 (by default) 
// change it using tsc --target es2015(iski jagah ecmascript version daldo) code3.ts (--es2015 or es6)