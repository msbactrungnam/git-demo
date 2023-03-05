function repeatString(string, num) {
  if (!string || !num) return;
  var s = "";
  for(var i = 0; i<num;i++){
    s+=string;
  }
  return console.log(s);;
}
repeatString("hey",3)