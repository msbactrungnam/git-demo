function leapYears(year) {
  if(!year) return;
  if(year%100 ==0){
    if(year%400 == 0) return console.log(true);
    else return console.log(false);
  } else if(year%4 == 0) return console.log(true);
  else return console.log(false);
}
leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false
leapYears(1900);
leapYears(1600);
