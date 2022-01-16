
let  player1 = {
    name: 'Ricardo',
    lastname: 'Quaresma',
    age: 33,
    goal: 7
}

console.log(player1.name)
console.log(player1.age)

let variable1 = 'name'
console.log(player1[variable1])

player1.age = 34
console.log(player1)

player1['goal'] = 15;
console.log(player1)

let player2 = new Object();

player2.name = 'Cenk';
player2.lastName = 'Tosun';
player2.age = 26;
player2.goal = 28;

console.log(player1);
console.log(player2);