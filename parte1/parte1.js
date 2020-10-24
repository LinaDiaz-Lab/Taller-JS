
const text ='Adios nunca significa el final, aveces significa un nuevo comienzo'
    console.log(text);

function tareas1() {

    const texto = document.querySelector("#texto");
    texto.innerHTML = texto.innerHTML.replace("Adios", "Hasta pronto");

    console.log(text.replace('Adios', 'Hasta luego'))
}


function tareas2() {
    const p1 = document.querySelector("#p1")
    const p2 = document.querySelector("#p2")

    p1.innerHTML = p1.innerHTML.toUpperCase();
    p2.innerHTML = p2.innerHTML.toLowerCase();

    const p22 = 'Mundo Maravilloso'
    const p11 = 'Mundo Espantoso'
    console.log(p11.toUpperCase());
    console.log(p22.toLowerCase());
}




function tareas3() {
    const palabra = document.querySelector("#palabra").value;


    function elPalindromo(cadena) {
        let array = cadena.split("");
        let reverse = array.reverse();

        if (cadena == reverse.join("")) {
            alert(palabra + " si es un palíndromo")
        } else {
            alert(palabra + " no es un palíndromo")
        }
        return cadena == reverse.join("") ? "si es" : "no es";
    }

    if (palabra.length == 0) {
        alert("Colocar una palabra porfavor")
    } else {
        console.log(elPalindromo(palabra))
    }
}

function tareas4() {
    const ordenFrutas = document.querySelector("#frutas");
    let lista = ordenFrutas.getElementsByTagName("li");
    let arrayFruta = Array.from(lista);
    arrayFruta.reverse((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => ordenFrutas.appendChild(li));
    console.log(arrayFruta);

}

function tareas5() {

    const ordenarNombres = document.querySelector("#niños");
    let lista = ordenarNombres.getElementsByTagName("li");

    let arrayNombre = Array.from(lista);

    arrayNombre.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => ordenarNombres.appendChild(li));

    var niños = ['Paola', 'Samy', 'Tomy', 'Andrea', 'Carlos', 'Miguel', 'Jorge']
    console.log(niños);
    console.log(niños.sort());
    
}

function tareas6() {

    const eliminarnombres = document.querySelector("#niñas");
    const a = document.getElementById("a");
    const c = document.getElementById("c");

    //elimina nombres
    garbage = eliminarnombres.removeChild(a)
    garbage = eliminarnombres.removeChild(c)

    //ordena nombres
    let lista = garbage.getElementsByTagName("li");
    let arrayNombre = Array.from(lista);

    arrayNombre.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => garbage.appendChild(li));

    //console
    var niños = ['Paola', 'Samy', 'Tomy', 'Andrea', 'Carlos', 'Miguel', 'Jorge']
    niños.sort();
    niños.splice(0, 1);
    niños.splice(3, 1);

    console.log(niños);
}

function tareas7() {
    const orden = document.querySelector("#orden");
    let lista = orden.getElementsByTagName("li");

    let arrayOrden = Array.from(lista);

    arrayOrden.sort((a, b) => b.textContent.localeCompare(a.textContent)).forEach(li => orden.appendChild(li));

    console.log(arrayOrden)
}















