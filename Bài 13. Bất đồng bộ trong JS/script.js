let happyHanding = (message) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (message === 'Yes'){
                resolve('Em đồng ý')
            } else {
                reject( new Error('Không đồng ý'))
            }
        }, 500)
    })
}
happyHanding('Yes').then(result =>{
    console.log(result);
}) 


async function hello(){
    return 'hello'
}
hello().then(
    res => console.log(res)
);

async function f() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('done'),1000)
        setTimeout(()=> reject(new Error('done')),1000)
    });
    let result = await promise;
    let result1 = await promise;
    console.log(result);
    console.log(result1);
}
f();