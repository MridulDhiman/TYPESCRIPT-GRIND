//strictness
var array = function (a) {
    console.log(a);
};
// no checking for null and undefined (by default in TS).
array(null);
array(undefined);
/*

strictness settings => static type checking (switch to dial(more you turn on the dial, more the checking in TS))

Multiple strictness flags are available in TS:
To enable all the strictness flags: add "strict": true to tsconfig.json file

2 important flags:
1. noImplicitAny => (emits error on variables with type "any");
2. strictNullChecks

*/ 
