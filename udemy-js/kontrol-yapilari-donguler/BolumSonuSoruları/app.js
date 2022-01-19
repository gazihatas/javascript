/*
    Math.random() ile rastgele sayı üretebilirsiniz. Bu fonksiyon 0 dahil -1 hariç
    bir değer üretir mesela 0.56 gibi. Sonrasında bu ifadenin sonucunu isrediğiniz
    aralığın üst sınırıyla çarparsanız verilen aralıkta değer üretmiş olursunuz.

    Mesela 0 ile 10 arasında bir sayı için (Math.random() * 10) +1 size 1 ile 10
    arasında ki 10 da dahil sayı üretmiş olur.

    Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli.
    Kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz.

    Eğer kullanıcı sayıyı tam olarak doğru bilirse 10.000₺;
    Eğer kullanıcı sayının basamaklarını bilirse yani 65 yerine 56 yazmışsa 5.000₺;
    Eğer kullanıcı şanslı bumaranın sadece bir basamağını bilirse 1000₺ kazanır.

*/

//alert("APP RUNNED!")

    let uretilenSayi = (Math.random() * 90) + 10
    console.log(`Üretilen ondalıklı sayı ${uretilenSayi}`)
    uretilenSayi = Math.floor(uretilenSayi)

    let kullanicininGirdigiSayi = parseInt(prompt("İki basamaklı bir sayı giriniz", "10"))

    let uretilenSayiBirlerBasamagi = uretilenSayi % 10
    let uretilenSayiOnlarBasamagi = Math.floor(uretilenSayi /10)

    console.log(`Uretilen sayının birler basamagı : ${uretilenSayiBirlerBasamagi}
                 Onlar basamagı: ${uretilenSayiOnlarBasamagi}
                `)
    
    let userBirlerBasamagi = kullanicininGirdigiSayi % 10
    let userOnlarBasamagi = Math.floor(kullanicininGirdigiSayi /10)

    console.log(`Kullanıcı sayının birler basamagı : ${userBirlerBasamagi}
                 Onlar basamagı: ${userOnlarBasamagi}
                `)
    
    console.log(`Sistemin ürettiği sayı : ${uretilenSayi}
                 Kullanicinin girdiği sayı: ${kullanicininGirdigiSayi}
               `)

    if(uretilenSayi === kullanicininGirdigiSayi) {
        console.log(`Tebrikler 10000 TL kazandınız Tahmininiz: ${kullanicininGirdigiSayi}
                    Üretilen : ${uretilenSayi}
        `)
    } else if(uretilenSayiBirlerBasamagi === userBirlerBasamagi && uretilenSayiOnlarBasamagi == userOnlarBasamagi) {
        console.log(`Tebrikler 5000 TL kazandınız Tahmininiz: ${kullanicininGirdigiSayi}
        Üretilen : ${uretilenSayi}
        `)
    } else if (uretilenSayiBirlerBasamagi === userBirlerBasamagi || uretilenSayiOnlarBasamagi === userOnlarBasamagi) {
        console.log(`Tebrikler 1000 TL kazandınız Tahmininiz: ${kullanicininGirdigiSayi}
        Üretilen : ${uretilenSayi}
        `)
    } 