const names = ["Hope","Suga","RM","Chan","Luna","SpearB","AgustD","Pupi","Rosia","Roma", "Dormilon", "Baldomero", "Nata", "Felix", "Baltasar", "Barry", "Bartolo","Bartolomé", "Baruc", "Baruj", "Candelaria", "Cándida", "Canela", "Caridad", "Carina", "Carisa","Violeta","Lisa","Carl","Sacha","Coco","Fiona","Canela","Rex","Kayla","Rene","Walker","Shawn","Tommy","Peter","Flopi","Ojotes","Chocolate"];

//Realizacion de la operacion para colocar un nombre aleatoriamente

const aleatorioNombres = () => `${names[Math.floor(Math.random() * names.length)]}`;
//mensaje console
console.log(aleatorioNombres());

// colocar los nombres dentro del DIV
function cajitaNombres() {
    document.getElementById('nombres').innerText = aleatorioNombres()
};

//boton
document.getElementById('generador').addEventListener('click', cajitaNombres)
cajitaNombres();

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

