let str1 = 'My name is:'  
let name1 = 'Dylan';

let str2 = `${str1} ${name1}`
console.log(str2);
let information1 = { firstName1: 'Dylan', lastName: 'Israel'};

let { firstName1, lastName } = information1;
console.log(firstName1);
console.log(lastName); 

let [ firstName2 ] = ['Dylan', 'Israel'];
console.log(firstName2)

let firstName3 = 'Dylan';  
let information = { firstName3 };

let str = 'hello';
for (let char of str) {  console.log(char);}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];

function findLength(...args) {  console.log(args.length);}
findLength();  // 0
findLength(1); // 1
findLength(2, 3, 4); // 3

const square = num => num * num;
square(2); // 4

let str3 = 'Hello World';
console.log(str3.includes('hello')); // true

class Car {
    constructor(wheels, doors) {
        this.wheels = wheels;
        this.doors = doors;
    }
    describeMe() {
        console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
    }}
const car1 = new Car(4, 2);  
car1.describeMe(); // Doors: 2 and Wheels: 4

function takeLongTimeAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}
async function test() {
    const v = await takeLongTimeAsync();
    console.log(v);
}
test();