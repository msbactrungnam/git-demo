function sumNumber_TH5(a: any, b: any) {
    return new Promise(
    (resolve, reject) => {
        if (typeof a === "number" && typeof b === "number") {
        let sum = a + b;
        resolve(sum);
        } else {
        reject("Not number");
        
        }
    }
    );
}
const getData_TH5 = async (a: any, b: any) => {
    sumNumber_TH5(a, b)
    .then(val => {
        console.log(val)
    })
    .catch(err => {
        console.log(err)
    })
}
getData_TH5(1, "a");
getData_TH5(1, 2);