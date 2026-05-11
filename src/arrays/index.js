const items = [11,23,45,5,34,34,2,76,45,3];

const newItems = items.map((item)=> item+10);
console.log("newitems",newItems)
//return a new array with +10 on each element

const filterItems  = items.filter((item)=>item > 20)
console.log("filteritems",filterItems)
//return new array containing element that pass the function 

const reduceItems = items.reduce((sum,item)=> sum + item,0);
console.log("reduceitems",reduceItems);
// cobine all element into a single value

const findItems = items.find((item)=>item===11);
console.log("finditems",findItems)

//find return the first matching element and filter return new array that pass the provided function

const[one,two] = items;
console.log("array destructuring",one)