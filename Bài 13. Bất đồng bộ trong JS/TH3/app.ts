function onlyNumbers(array: any[]) {
    let checkNumber = true;
    array.map((element) => {
    if (typeof element !== 'number') {
        checkNumber = false;
    }
    });
    return checkNumber;
}

function sumNumber_TH3(array: any[]) {
    return new Promise(
    (resolve, reject) => {
        if (onlyNumbers(array)) {
        let sum = 0;
        for (const value of array) {
            sum += value;
        }
        resolve(sum);
        } else {
        reject("Has a non-integer element")
        }
    }
    );
}

const getData_TH3 = async () => {
    const allPromise = Promise.all([
    sumNumber_TH3([1, 2]),
    sumNumber_TH3([3, 4]),
    sumNumber_TH3([0.3, 0.4])
    ]);
    const lists = await allPromise;
    console.log(lists);
}

getData_TH3();