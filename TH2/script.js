function findMaxNumber(a, b){
    let m = (a>b?a:b);
    return m;
}
console.log('2-max-number')
let checkMax1 = findMaxNumber(10, 5);
console.log('Max Number:',checkMax1);
let checkMax2 = findMaxNumber(1, 15);
console.log('Max Number:',checkMax2);
let checkMax3 = findMaxNumber(100, 15);
console.log('Max Number:',checkMax3);