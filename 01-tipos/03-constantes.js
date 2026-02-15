const constanteVariable = "Esta es una constante";
console.log(constanteVariable);

const mensajeFijo = "Este mensaje no se cambiara ni aunque quieras malparida";

const input = document.getElementById('inputMensaje');
const boton = document.getElementById('mostrarMensaje');
const mensajeFijoElement = document.getElementById('mensajeFijo');
const mostrarmensaje = document.getElementById('mostrarMensajeVariable');

if (boton && input && mensajeFijoElement && mostrarmensaje) {
    boton.addEventListener('click', () => {
        const nuevoMensaje = input.value.trim();

        if (nuevoMensaje === "") {
            return;
        }

        mensajeFijoElement.textContent = mensajeFijo;
        mostrarmensaje.textContent = `Mensaje variable: ${nuevoMensaje}`;
    });
} else {
    console.error("No se encontraron los elementos necesarios en el DOM.");
}
