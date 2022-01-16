let i = 0;
var images = [
    'http://placeimg.com/400/200/animals',
    'http://placeimg.com/400/200/animals?t=1642315143458',
    'http://placeimg.com/400/200/animals?t=1642315169362'
]

let duration = 2000;

function slideImg() {
    document.slide.src = images[i]
    
    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("slideImg()", duration);
}

window.onload = slideImg;
