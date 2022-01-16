/*
    Javascript Array Yapısı
*/

let names = ['Fabri', 'Pepe', 'Cenk']

console.log(names)

let names2 = new Array('Fabir', 'Pepe', 'Cenk')

console.log(names2)

let quaresma = ['Ricardo', 'Quaresma', '34', 'Player', false]

console.log(quaresma)

//Dizinin sonuna eleman ekler
quaresma.push('Besiktas')
console.log(quaresma)

//Dizinin Yeni eklenen değeri dizinin en başına ekler
quaresma.unshift('Mr')
console.log(quaresma)

//Dizinin sonunda bulunan elamanı siler
quaresma.pop()

//Dizinin baslangıcındaki elemanı siler
quaresma.shift()

//Dizinin içerisinde belirtilen elamanı arar ve sırasını bize verir
console.log(quaresma.indexOf('Ricardo'));