/*
    Javascript Döngüler
*/


let x = 1;
//WHİLE DÖNGÜSÜ
while(x<10) {
    console.log(x)
    x++;
}

//DO WHİLE DÖNGÜSÜ
//şart ne olursa olsun do while döngüsü 1 kere çalışır
do {
    console.log(x)
    x++;
} while(x > 10)

//FOR DÖNGÜSÜ
//break
for (let y = 1; y < 10; y++) {
    //Değer 5'e eşitlenince break sayesinde döngüden çıkar
    if(y==5){
        break;
    }
    console.log(y)
}
//continue
for (let y = 1; y < 10; y++) {
    //Değer 5'e eşitlenince continue olduğundan dolayı 5 i yazmaz devam eder.
    if(y==5){
        break;
    }
    console.log(y)
}