

function login() {
    var eposta = document.getElementById("eposta").value;
    var sifre = document.getElementById("sifre").value;

    if(eposta == "gazi@me.com" && sifre == "123456") {
        document.getElementById("container").innerHTML = "Giriş başarılı!!!";
    } else {
        document.getElementById("container").innerHTML = "Lütfen giriş bilgilerinzi kontrol ediniz";
    }

}