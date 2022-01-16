let library = [
    {
        title: 'İnce Memed',
        author: 'Yaşar Kemal',
        status: true
    },
    {
        title: 'Kuyucaklı Yusuf',
        author: 'Sabahattin Ali',
        status: true
    },
    {
        title: 'Memleketimden İnsan Manzaraları',
        author: 'Nazım Hikmet Ran',
        status: false
    }
]

for(let i=0; i<library.length; i++) {
    let book = `
    ${library[i].title} yazarı ${library[i].author}.`

    if(library[i].status){
        console.log(`${book} Okundu!`)
    } else {
        console.log(`${book} Okunmadı!`)
    }
}