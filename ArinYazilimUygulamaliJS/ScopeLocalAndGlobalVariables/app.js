/* Javascript Fonksiyon Yapısı

SCOPE

*/

let x; // Global Variable

//local değişkenler sadece fonksiyonun içinden erişilebilir
function sampleFunction () {
    let x = 55; // Local Variable
    console.log(x)
}

sampleFunction();

console.log(x);

//
function fok1() {
    //kodlar...
}

//Geriye dönüş olmadığı zaman statement
if(x>7) {
    //......
}


//Geri Dönüşlü olduğu zaman Expression
let fonk2 = function() {
    //kodlar ....
}