function min(...x){
    var min = x[0]
    for(var i = 0; i < x.length; i++){
        if( x[i] < min) min = x[i];
    }
    return min;
}
function max(...y){
    var max = y[0]
    for(var i = 0; i < y.length; i++){
        if( y[i] > max) max = y[i];
    }
    return max;
}
function canNest(a, b){
    if (min(...a)>min(...b) && max(...a)<max(...b)) return true;
    else return false;
}

console.log(canNest([1, 2, 3, 4], [0, 10])) //➞ true

console.log(canNest([3, 1], [6, 0])) //➞ true

console.log(canNest([1, 2, 3], [2, 3])) //➞ false