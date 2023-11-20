
function multiplyAsync(x, y){
    return myPromise = new Promise((resolve, reject) => {
        if(typeof(x) == 'number' && typeof(y) == 'number'){
            resolve(x*y);
        }else{
            reject("Niepoprawne argumenty");
        }
    });
}
multiplyAsync(2,5)
.then((result) =>{
    console.log("mnożenie: "+result);
})
.catch(console.error);
multiplyAsync(2,'5')
.then((result) =>{
    console.log("mnożenie: "+result);
})
.catch(console.error);