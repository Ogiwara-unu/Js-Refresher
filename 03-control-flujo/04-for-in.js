const content = document.getElementById("content");

let Zunga = {
    id: 1,
    nombre: "Jafeth",
    edad: 21,
    profesion: "Prostituta"
}

for (let prop in Zunga) {
    console.log(`${prop}: ${Zunga[prop]}`);
    content.innerHTML += `<p>Propiedad: ${prop} Valor: ${Zunga[prop]}</p>
    `;
}
