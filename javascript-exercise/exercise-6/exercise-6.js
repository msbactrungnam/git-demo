function reverseString(string) {
  if (!string) return;
  var arr = string.split("");
  var arr1 = arr.reverse();
  var s = arr1.join("");
  return s;
}
function convertNumber(number) {
  var s = "";
  while(number>0){
    s += number%2;
    number = (number - number%2)/2 ;
  }
  return console.log(reverseString(s));
}
convertNumber(47); // => 101111