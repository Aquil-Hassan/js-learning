// primitive - call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// datatype is not defined in variable name: therefore javascript is dynamically typed language


// if value is not given then undefined value is given to it automatically

const id=Symbol('123'); //symbol same value pr bhi different hota h
const anotherId=Symbol('123');
console.log(id==anotherId);


const bigNumber=34453245624352354n //n at last convert it into big int




// Reference type (Non primitive)
// Arrays, Objects, Functions


const heros=["shaktiman","naagraj", "doga"];


let myObj={
    name:"aquil",age:"22",
}

const myFunction=function(){
    console.log("hello world");
}

console.log( typeof myFunction);


//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non-Primitive)


let myYoutubename="aquilhassan.com";

let anothername=myYoutubename;
console.log(anothername);

let user={
    email: "user@google.com",
    upi: "user@ybl",
}
let anotheruser=user;
anotheruser.email="aquil@google.com"
console.log(user);