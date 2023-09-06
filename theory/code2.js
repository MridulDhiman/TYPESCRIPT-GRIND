/*

TYPE ANNOTATIONS: passing type to particular variable.
1. explicit (e.g. in a function)
2. assigning value to normal variable. (implicit) => ts just "infers" (Figures out ) the type.


GOOD PRACTICE: don't use type system in TS, where it can infer itself what the type is.
const => bkc var bn gya  (DOWNLEVELING (FROM HIGHER ES VERSION TO LOWER VERSION))

*/
var msg1 = "hello world msg1 \n";
var msg2 = "hello world msg2";
console.log(msg1, msg2);


