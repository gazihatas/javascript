/* Switch Case Yapısı

switch (kontrol edilecel durum) {
    case 1 :
        kod çalıştır;
        break;
    case 2 :
        kod çalıştır;
        break;
    .....

    default :
        kod çalıştır;

}
*/

let job = "doktor";


switch(job) {
    case "Öğretmen" :
        console.log("Ben bir öğretmenim");
        break;
    
    case "asker" :
        console.log("Ben bir askerim");
        break;

    case "doktor" :
        console.log("Ben bir doktorum")
        break;
    
        default :
            console.log("Ben bir işsizim");

}