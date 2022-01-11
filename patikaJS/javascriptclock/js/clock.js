
let name = prompt("Enter the name")
document.getElementById('myName').innerHTML = `${name}`

function verSaat()
{
    var simdi = new Date();
    return simdi.toLocaleTimeString();    // return 23:59:59
}

function saatGoster() {
	var saat = document.getElementById("myClock");
	saat.innerHTML = verSaat();
}

saatGoster();




const day = new Date();
const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
document.querySelector("#myDays").innerHTML = days[day.getDay()];

setInterval("saatGoster()", 1000);



