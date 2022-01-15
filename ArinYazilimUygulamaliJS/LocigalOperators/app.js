/* Locigal Operators */

// AND && önermelerin 2 side doğru olmalı
// OR || önermelerin m1 tanesi doğru olmalı

// NOT: ! true  false  çevrimi yapar



// && AND 
let ages = 23

if(ages >=20 && ages <= 50) {
    console.log("Uye Olabilirsiniz")
} else {
    console.log("Uye olamazsınız")
}

/* && AND Operatoru
dogru && dogru = dogru
yanlış && dogru = yanlış
dogru && yanlış = yanlış
yanlış &6 yanlış = yanlış
*/
// OR || 
let age = 28
let job = 'doktor'
if(job == 'doktor' || age >= 35) {
    console.log("Uye Olabilirsiniz")
} else {
    console.log("Uye olamazsınız")
}

/* && AND Operatoru
dogru && dogru = dogru
yanlış && dogru = doğru
dogru && yanlış = dogru
yanlış &6 yanlış = yanlış
*/

let isMarried = true
if(!isMarried) {
    console.log("Evlisiniz")
} else {
    console.log("Evli Değilsiniz")
}

/* ! NOT Operatoru
!true = false
!false = true
*/