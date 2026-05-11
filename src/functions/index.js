hoistedFunction();
function hoistedFunction(){
    console.log("this is a hoisted function")
}

testfunction();
//will throw error 
const testfunction = function(){
    console.log("not hoisted")
}

//allow us to provide default value for parameter
const arrowFunction = (name="prashant")=>{
    console.log(`introduce in es6 , easier to write and has no this binding ${name}`)
}
arrowFunction()


