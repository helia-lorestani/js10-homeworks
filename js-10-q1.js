// Using an example, explain the difference between block,global and function scope in variables.

// block scope
// When we define a variable in a block scope we can only access it in the scope
{
  let variable1 = 2;
  console.log(variable1); //✅
}
// console.log(variable1); ❌

// global scope
// When we define a global variable, we can access it everywhere
let variable2 = 1;
console.log(variable2); //✅
function func() {
  console.log(variable2); //✅
}
func();

// function scope
//  When we define a variable in a function we can only access it in the function
function func2() {
  let variable3 = 8;
  console.log(variable3); //✅
}
func2();
// console.log(variable3) ❌
