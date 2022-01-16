/*
    FONKSİYONLAR UYGULAMA

Daire'nin alan formülü
Cevre = 2 Pi r
Alan = Pi * r * r

*/

let yaricap = prompt("Lütfen Yarıçapı giriniz.")

function daireCevreAlan (yaricap) {
    let cevre = parseInt(2 * Math.PI * yaricap);
    alert(`Daire'nin çevresi : ${cevre}`)
    let alan = parseInt(Math.PI * yaricap * yaricap);
    alert(`Dairenin Alanı : ${alan}`)
}


daireCevreAlan(yaricap)