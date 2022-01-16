/*
    Object Constructors | Nesne Yapıcıları Kavramı
*/


/*
let player1 = {
    name: "Richardo",
    surname: "Quaresma",
    age: 34
}
console.log(player1)

let player2 = {
    name: "Cenk",
    surname: "Tosun",
    agw: 26
}
console.log(player2)

let player3 = {
    name: "Gokhan",
    surname: "Gonul",
    age: 33
}

console.log(player3)

*/
function Player(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

var players = [
    new Player("Richardo", "Quaresma", 34),
    new Player("Cenk", "Tosun", 26),
    new Player("Gokhan", "Gonul", 33)
]

console.log(players[2].surname);

/*
let player1 = new Player("Richardo", "Quaresma", 34)
let player2 = new Player("Cenk", "Tosun", 26)
let player3 = new Player("Gokhan", "Gonul", 33)
*/