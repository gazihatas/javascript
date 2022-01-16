/* Javascript Fonksiyon Yapısı

function fonksiyonAdi (parametre) {
    yapılması istenen işlem
}

*/

function findX (t, V, fn) {
    let x = t * V;
    return fn(x);
} 

function sum10(param1) {
    return param1 + 10;
}

let yol = findX(4,50);
console.log(yol);

let yol2 = findX(7,63);
console.log(yol2);