let firstName, secondName, fullName;

firstName = prompt("Adınız Nedir?")
secondName = prompt("Soyadınız Nedir?")

fullName = firstName + " " + secondName

//Uyarı şeklinde çıktı alabiliriz
alert(`Merhaba, ${fullName}`)
//dökümanada yazabiliriz
document.write(`Merhaba, ${fullName}`);


let number1, number2, sum

number1 = prompt("İlk Rakamı Giriniz")
number2 = prompt("İkinci Rakamı Giriniz")

sum = parseInt(number1) + parseInt(number2)
alert(`Toplam = ${sum}`)
document.write(`Toplam = ${sum}`)