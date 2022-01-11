/*

Bir değişken oluşturun ve bu değişkende saniye değerini tutun.
Sonra bu saniye değerinin kaç dakika ve saniyeye denk geldiğini yazdırın
Ornek 1200değeri için  20 dakika 0 saniye yazmalıdır.



let saniyeString = prompt("Lütfen saniyeyi giriniz");
let saniye = parseInt(saniyeString)

let dakika = parseInt((saniye / 60),10)
let kalanSaniye = saniye % 60;

console.warn(typeof saniye)
console.log(`
Girilen Saniye Değeri : ${saniye} sn.
Dakika olarak çıktı : ${dakika} dk. ${kalanSaniye} sn.           
`);
*/

/*
Bir değişken oluşturun ve bu değişkende fahrenheit cinsinden sıcaklığı saklayın.
Sonrasında bu değerin kaç Celcius olduğunu hesaplayın.
100 değeri için 37.7777778 gibi bir değer elde etmelisiniz.
Hesaplama Formülü : celcius = 5/9 * (fahrenheit -32)




let girilenDerece = parseInt(prompt("Fahrenheit giriniz", "100"));
let celciusDerece = (5/9) * (girilenDerece - 32);

console.log("Girdiğiniz " + girilenDerece + " fahrenheit sıcaklık" + celciusDerece.toFixed(2) + " derecedir")
*/


/*
Bir yıl değerinin artık yıl olup olmadığını hesaplayın.
Bir yılın artık olması için ya 400 ile modu 0 olamlı ya da 4 ile modu 0 olmalı
100 ile modu 0 olmamalı
4100 false değeri vermeli
*/


let girilenYil = parseInt(prompt("Yıl değerini giriniz", "2020"));
let artikYilMi = ( (girilenYil % 400) == 0 || (girilenYil % 4 == 0 && girilenYil % 100 != 0)); 
console.log("Girilen " + girilenYil + " artık yıl mı? : " + artikYilMi)