
let x= 5;
let y= 10;

function rekurencja(x,y){
    if(x<=y){
        console.log(y);
        rekurencja(x,y-1);
    }
    

}
rekurencja(x,y);

