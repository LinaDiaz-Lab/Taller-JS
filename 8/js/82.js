// nombres aleatorios Console

function nombres() {
    function longitudPalabra(len) {

    let randomPass = '';
    let wordChars = 'abcdefghijklmnopqrstuvwxyz'


    for (let i = 0; i < len; i++) {
        randomPass += wordChars.charAt(Math.floor(Math.random() * wordChars.length));
        console.log(randomPass)
    }
}
longitudPalabra(4);

}