let user1 = {name:"alice"};
// store reference -- non premitive
const a = 10;
//store value  primitive
let user2 = user1;

user2.name = "prashant";
// both variable point to same address and object;
console.log(user1);