let numero = 13;
let texto = "Esto es un texto perritas";
let booleano = true;
let nulo = null;
let indefinido = undefined; 

let vector = ["Olis","perrita","fea"];

let objecto = {
    nombre: "Randall",
    edad: 21,
    sexo: "Obviously"
}

let funcion = function(mensaje = "Hola, soy una función Zorrita") {
    console.log("El mensaje es: " + mensaje);
}

class Momazo {
    constructor(parameters) {
        this.texto = parameters.texto;
        this.img = parameters.img;
    }
}

const content = document.getElementById('content');

let momazo = new Momazo({
    texto: "Esto es un momazo",
    img: "https://i.pinimg.com/736x/78/38/d9/7838d979abaf65cf18a59664c9a6d03c.jpg"
});

content.innerHTML = `
    <h2>Tipos de Datos en JavaScript</h2>

    <p><strong>Número:</strong> ${numero}</p>
    <p><strong>Texto:</strong> ${texto}</p>
    <p><strong>Booleano:</strong> ${booleano}</p>
    <p><strong>Nulo:</strong> ${nulo}</p>
    <p><strong>Indefinido:</strong> ${indefinido}</p>

    <p><strong>Vector:</strong> ${vector.join(" ")}</p>

    <p><strong>Objeto:</strong> 
        Nombre: ${objecto.nombre}, 
        Edad: ${objecto.edad}, 
        Sexo: ${objecto.sexo}
    </p>

    <p><strong>Función:</strong> ${funcion.toString()}</p>
    <p><strong>Clase Momazo:</strong>
        Texto: ${momazo.texto},
        <br>
        Imagen:
        <br> 
        <img src="${momazo.img}" alt="Momazo" width="200">
    </p>
`;