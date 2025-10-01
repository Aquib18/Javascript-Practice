const myArr =  [0,1,2,3,4,5]
const myHeros = ["spidy", "thor"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array Method

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr)

const newArr = myArr.join()
console.log(myArr); 

// slice, splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B" ,myArr);

const myn2 = myArr.splice(1,5)
console.log("C", myArr);
console.log(myn2);

const marvel_heros = ["thor" , "Ironman", "spider"]
const dc_heros = ["superman" , "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],[7,8,9,[3,4]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))   // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

