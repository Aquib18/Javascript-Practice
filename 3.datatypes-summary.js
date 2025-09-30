// primitive

// 7 types : string , Number , Boolean , null, undefined, symbol, BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 21346587451278578451n

// Reference (Non Primitive)

//Array , Objects , Functions

const heros = ["shaktiman", "naagraj" , "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);


// ************* Stack (Primitive), heap (Non-Primitive)******

let myYoutubename = "hiteshchoudhary.com"


let anothername = myYoutubename
anothername = "chai"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail",
    upi: "abc@ybl"
}

let userTwo = userOne
userTwo.email = "aquib@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);