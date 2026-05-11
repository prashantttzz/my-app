function testScope() {

    console.log(a);
    //undefined , hoisted but as undefined
  if (true) {
    var a = 1;
    const b = 2;
    let c = 4;
    c = 5;
    //let can reassign
    console.log(c)
    }

  a = 2;
  // var can also be reassign

  console.log(a);
  //  a will get printed as 2 --- var is function scoped
  console.log(b);
  console.log(c);
  // b and c will throw refrence error because they are blocked scope

  var a = 10;
  console.log(a);
  //will log 10 -- var can be redeclare
}

function testReassignment(){
    if(true){
        const user = {name:"prashant"};
        user.name = "mutation";
        //const allow mutation not reassigment
        const user = {name:"reassignment"};
        console.log(user)
    }
}

testReassignment();
testScope();
