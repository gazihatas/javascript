/*
    FONKSİYONLAR UYGULAMA | VİZE FİNAL HESAPLAMA
*/

let vize = prompt("Lütfen Vize Notunuzu Giriniz");
let final = prompt("Lütfen Final Notunuzu Giriniz");

function dersSonucu(vize, final){
    let dersNotu = parseInt(vize * 0.4 + final * 0.6)
    if(dersNotu >= 50){
        alert(`Dersi Geçtiniz, Notunuz: ${dersNotu}`)
    } else{
        alert(`Dersi Geçemediniz, Notunuz: ${dersNotu}`)
    }
}

dersSonucu(vize, final)