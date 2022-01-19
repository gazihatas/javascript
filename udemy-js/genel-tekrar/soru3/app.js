/*
    Soru 3: Kalvyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçemediğini söyleyen bir uygulama yazın.
    Geçme Notu: 50, vizenin %40'ı, finalin %60'ı, geçerlidir
*/

let vize = parseInt(prompt("Vize notunuzu giriniz", "60"))
let final = parseInt(prompt("Final notunuzu giriniz", "30"))

let ortalama = (vize*0.4)+(final*0.6);

if(ortalama>=50) {
    alert(`Geçtiniz! Ortalamanız ${ortalama}`)
} else {
    alert(`Kaldınız! Ortalamanız 50'nin altında : ${ortalama}`)
}