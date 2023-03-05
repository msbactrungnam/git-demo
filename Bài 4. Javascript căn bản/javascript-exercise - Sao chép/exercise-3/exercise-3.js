function removeFromArray(array, deleteItem) {
  if (!array || !deleteItem) return;
  var m;
  for(var i = 0; i< array.length;i++){
    if(array[i] == deleteItem){
      array.splice((i),1);
    }
  }
  return console.log(array);
}
removeFromArray([1, 2, 3, 4], 3);