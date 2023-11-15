function button(){
    let tab = [6, 7, 8, "abc", 9, 10, "cba"];
    console.log("Tablica : "+tab+"\nSuma: "+sumArray(tab));
}

function sumArray(tab){
    let result = 0;
    for(let i=0; i<tab.length; i++){
        if(typeof tab[i] == 'number'){
            result+=tab[i];
        }
    }
    return result;
}