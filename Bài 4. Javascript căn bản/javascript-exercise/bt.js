function countWords(input) {
    if(!input.length) return
    return input.reduce(function(preV,curV){
        if(preV[curV]){
            ++preV[curV];
        }else {
            preV[curV] = 1;
        }
        return preV;
    }, {});
}
var inputWords = ['Apple', 'Banana', "Apple", 'Durian', 'Durian', 'Durian']
console.log(countWords(inputWords));
// =>
// {
//    Apple: 2,
//    Banana: 1,
//    Durian:3
// }
