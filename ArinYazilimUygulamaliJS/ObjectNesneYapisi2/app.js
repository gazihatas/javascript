let player1 = {
    name: 'Richardo',
    lastName: 'Quaresma',
    age: 33,
    childs: ['Alex', 'Sara', 'Pablo'],
    fullName: function(){
        return `${this.name}  ${this.lastName}`
    }
}

console.log(player1.fullName())