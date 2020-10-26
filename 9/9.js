const lista = document.querySelector('#lista')
const productos = [
    {
        imagen: './img/saco1.jpg',
        titulo: 'Saco 1',
        clase: 'superior',
        precio: 42000
    },
    {
        imagen: './img/saco2.jpg',
        titulo: 'Saco 2',
        clase: 'superior',
        precio: 43000
    },
    {
        imagen: './img/saco3.jpg',
        titulo: 'Saco 3',
        clase: 'superior',
        precio: 45000
    },
    {
        imagen: './img/buso4.jpg',
        titulo: 'Buso 4',
        clase: 'superior',
        precio: 46000
    },
    {
        imagen: './img/blusa5.jpg',
        titulo: 'Blusa 5',
        clase: 'superior',
        precio: 48000
    },
    {
        imagen: './img/blusa6.jpg',
        titulo: 'Blusa 6',
        clase: 'superior',
        precio: 46000
    },
    {
        imagen: './img/camisa7.jpg',
        titulo: 'Camiseta 7',
        clase: 'superior',
        precio: 43800
    },
    {
        imagen: './img/vestido6.jpg',
        titulo: 'Vestido 1',
        clase: 'completo',
        precio: 60000
    },
    {
        imagen: './img/vestido7.jpg',
        titulo: 'Vestido 2',
        clase: 'completo',
        precio: 63800
    },
    {
        imagen: './img/vestido8.jpg',
        titulo: 'Vestido 3',
        clase: 'completo',
        precio: 55000
    },
    {
        imagen: './img/vestido9.jpg',
        titulo: 'Vestido 4',
        clase: 'completo',
        precio: 58200
    },
    {
        imagen: './img/enterizo3.jpg',
        titulo: 'Enterizo 5',
        clase: 'completo',
        precio: 42000
    },
    {
        imagen: './img/enterizo4.jpg',
        titulo: 'Enterizo 6',
        clase: 'completo',
        precio: 71000
    },
    {
        imagen: './img/enterizo5.jpg',
        titulo: 'Enterizo 7',
        clase: 'completo',
        precio: 63000
    },
    {
        imagen: './img/pantalon1.jpg',
        titulo: 'Pantalon 1',
        clase: 'inferior',
        precio: 58900
    },
    {
        imagen: './img/pantalon2.jpg',
        titulo: 'Pantalon 2',
        clase: 'inferior',
        precio: 70000
    },
    {
        imagen: './img/pantaloneta3.jpg',
        titulo: 'Short 3',
        clase: 'inferior',
        precio: 60900
    },
    {
        imagen: './img/short4.jpg',
        titulo: 'Short 4',
        clase: 'inferior',
        precio: 65000
    },
    {
        imagen: './img/short5.jpg',
        titulo: 'Short 5',
        clase: 'inferior',
        precio: 59900
    },
    {
        imagen: './img/falda6.jpg',
        titulo: 'Falda 6',
        clase: 'inferior',
        precio: 62900
    },
    {
        imagen: './img/falda7.jpg',
        titulo: 'Falda 7',
        clase: 'inferior',
        precio: 71000
    },
];


function put() {
    lista.innerHTML= ""
    
   
    console.log (productos)

    for (let i = 0; i < productos.length; i++) {
        const ss = productos[i];
        
        lista.innerHTML += `
        <div class="card col-md-4 p-2" style="width: 18rem;" category="inferior">
          <img src="${ss.imagen}" class="card-img-top">
          <div class="card-body ">
            <p class="text-light text-center especifica font-weight-bold">${ss.titulo}</p>
            <p class="text-light text-center especifica font-weight-bold">${ss.precio}</p>
          </div>
        </div>
        `
    }
}

function down() {

    lista.innerHTML= ""

    const ecu = productos
        .filter(function (producto) {
            return producto.clase === 'inferior';
        })


    for (let i = 0; i < ecu.length; i++) {
        const uu = ecu[i];

        lista.innerHTML += `
    <div class="card col-md-4 p-2" style="width: 18rem;" category="inferior">
      <img src="${uu.imagen}" class="card-img-top">
      <div class="card-body ">
        <p class="text-light text-center especifica font-weight-bold">${uu.titulo}</p>
        <p class="text-light text-center especifica font-weight-bold">${uu.precio}</p>
      </div>
    </div>
    `
    }
}

function up() {

    lista.innerHTML= ""

    const eca = productos
        .filter(function (producto) {
            return producto.clase === 'superior';
        })

    for (let i = 0; i < eca.length; i++) {
        const aa = eca[i];

        lista.innerHTML += `
        <div class="card col-md-4 p-2" style="width: 18rem;" category="inferior">
          <img src="${aa.imagen}" class="card-img-top">
          <div class="card-body">
            <p class="text-light especifica text-center font-weight-bold">${aa.titulo}</p>
            <p class="text-light text-center especifica font-weight-bold">${aa.precio}</p>
          </div>
        </div>
        `   
    }
}



function complete() {

    lista.innerHTML= ""

    const eco = productos
        .filter(function (producto) {
            return producto.clase === 'completo';
        })

    //el es equivalente al objeto
    console.log(eco)
    for (let i = 0; i < eco.length; i++) {
        const ee = eco[i];

        lista.innerHTML += `
    <div class="card col-md-4 p-2" style="width: 18rem;" category="inferior">
      <img src="${ee.imagen}" class="card-img-top">
      <div class="card-body ">
        <p class="text-light text-center especifica font-weight-bold">${ee.titulo}</p>
        <p class="text-light text-center especifica font-weight-bold">${ee.precio}</p>
      </div>
    </div>
    `
        console.log(ee)
    }

}


