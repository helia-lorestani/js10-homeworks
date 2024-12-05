// According to your js10 session, write a code that shows why we shouldn't use var?
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log("i:", i);

//variable i only should be access in own scope but when we define variable with var we can access it everywhere (var only works correctly in functions)
