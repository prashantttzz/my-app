const user = {name:"prashant",count:2};

user.count = 4;
//never mutate real object directly
const user2 = {...user,count:3}
//shallow copy then update 
console.log("user2",user2)
console.log("user",user)


//object destructuring
const {name,count } = user;
console.log("name",name)