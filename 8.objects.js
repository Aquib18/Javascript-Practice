// singleton example with object literal

// create a unique symbol
const mySym = Symbol("key1")

// define object literal
const JsUser = {
    name: "aquib",
    "full name":"aquib jawed", 
    [mySym]: "myKey1",   // symbol property
    age: 23,
    location: "jaipur",
    email:"aquib@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"],

    // methods (added before freezing)
    greeting: function(){
        console.log("Hello JS user");
    },
    greetingTwo: function(){
        console.log(`Hello JS user, ${this.name}`);
    }
}

// access properties
console.log(JsUser.email);          // "aquib@gmail.com"
console.log(JsUser["email"]);       // "aquib@gmail.com"
console.log(JsUser["full name"]);   // "aquib jawed"
console.log(JsUser[mySym]);         // "myKey1"

// update property
JsUser.email = "aquib@chatgpt.com"

// freeze the object (no more changes allowed)
Object.freeze(JsUser)

// attempt to modify (ignored due to freeze)
JsUser.email = "aquib@micro.com"

// see the result
console.log(JsUser);

// call methods
JsUser.greeting();       // "Hello JS user"
JsUser.greetingTwo();    // "Hello JS user, aquib"



