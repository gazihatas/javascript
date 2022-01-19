/*
    Soru 2: Klavyeden kenarları girilen bir üçgenin çeşidini veren uygulamayı yazın.
*/

let kenar1 = parseInt(prompt("1. Kenar uzunluğu girin: ", "40"))
let kenar2 = parseInt(prompt("2. Kenar uzunluğu girin: ", "60"))
let kenar3 = parseInt(prompt("3. Kenar uzunluğu girin: ", "80"))

if(kenar1 == kenar2 && kenar2 == kenar3){
    alert(`Eşitkenar Üçgen`)  
} else if(kenar1 == kenar2 || kenar1 == kenar3 || kenar2 == kenar3) {
    alert(`İkizkenar Üçgen`)
} else {
    alert(`Çeşitkenar Üçgen`)
}