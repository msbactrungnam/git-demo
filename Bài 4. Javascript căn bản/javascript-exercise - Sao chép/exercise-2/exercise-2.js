function reverseString(string) {
  if (!string) return;
  var arr = string.split("");
  var arr1 = arr.reverse();
  var s = arr1.join("");
  return console.log(s);
}
reverseString("hello there");