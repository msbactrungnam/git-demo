let doSecond = () => {
    console.log('dodo');
}
let doFirst = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('do');
        resolve()
    },500)
}) 
doFirst.then(doSecond)
function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data fetched!")
        },2000);
    })
}
async function printData(){
    const data = await fetchData()
    console.log(data);
}
printData()

function DogObj(name,age){
    this.name = name;
    this.age = age;
}
DogObj.prototype.speak = function(){
    return "Go Go Go"
}
let john = new DogObj("john",45)

import { Animals } from "./cats.js  ";
class Cats extends Animals {
    constructor(name, age, whiskersColor){
        super(name,age)
        this.whiskersColor = whiskersColor;
    }
    color(){
        return `I have ${this.whiskersColor} whiskers`
    }
}
const meo1 = new Cats("meo tam the",2,"black")
console.log(meo1);
console.log(meo1.color(), meo1.sing());