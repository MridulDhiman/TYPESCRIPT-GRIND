// type check error in TypeScript


//TYPE ANNOTATIONS ON PERSON AND DATE PARAMETER. (parameters with only these types will work......)
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date}!`);
  }

   
  greet("muskan", new Date());

  /*
 1.  TS CODE: compiled using tsc tsfile.ts => using type checking and find and output errors. 
  and transforms given code into *.js (js file with same name as ts).
 2. Jitni baar bhi compile utni bar js main bhi transform hoga and changes show honge.
 3. noEmitonError option flag  => tsc makes the code runs only one time and it does not update the js..


 By default: kya hota hai, agar error hoga to bhi vo change ho jata JS main, but we can change that using noEmitonError flag while compiling the typescript file............



Errors: 
1. Type not matched => maine specify kia code main
  

  */