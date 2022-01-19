/*
Soru1: Klavyeden girilen 3 sayının ortalamasını alan bir Uygulama yazınız
*/

let sayi1 = parseInt(prompt("Sayi1 değerini giriniz","60"))
let sayi2 = parseInt(prompt("Sayi2 değerini giriniz", "40"))
let sayi3 = parseInt(prompt("Sayi3 değerini giriniz","40"))

let ortalama = (sayi1 + sayi2 + sayi3) / 3

alert(`
             Sayi1: ${sayi1}, 
             Sayi2: ${sayi2}, 
             Sayi3: ${sayi3}
             Ortalama: ${ortalama}
`)  