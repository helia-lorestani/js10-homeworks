/*
 ? look at the code below:
 todo: 1. create an object which has three properties. 
 todo: 2. use "for in" to show below result: 
 -Mike is tall, 
 -Jake is kind, 
 -Lilly is young 
 structure: ({key} is {value})
*/

/**Write your code below  */

const persons = {
  Mike: "tall",
  Jake: "kind",
  Lilly: "young",
};
for (const person in persons) {
  console.log(`${person} is ${persons[person]}`);
}
