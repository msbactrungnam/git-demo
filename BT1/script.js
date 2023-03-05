function tb(...a){
var temp = 0;
for (var i=0; i < a.length; i++) {
    temp += a[i];
}
var avg = (temp/a.length);
if (avg < 70) {
    return console.log("Grade : D"); 
} else if (avg <= 80) {
    return console.log("Grade : C"); 
} else if (avg <= 90) {
    return console.log("Grade : B"); 
} else if (avg <= 100) {
    return console.log("Grade : A"); 
}
}
tb(63,87,79,32);