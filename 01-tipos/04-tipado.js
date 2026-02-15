let numero = 42;
let texto = "Hola, mundo!";
let verdadero = true;
let nulo = null;
let indefinido = undefined;

const numeroHtml = document.getElementById('numero');
const textoHtml = document.getElementById('texto');
const verdaderoHtml = document.getElementById('verdadero');
const nuloHtml = document.getElementById('nulo');
const indefinidoHtml = document.getElementById('indefinido');

const inputMensajeHtml = document.getElementById('inputMensaje');
const mostrarMensajeHtml = document.getElementById('mostrarMensaje');
const mostrarMensajeVariableHtml = document.getElementById('mostrarMensajeVariable');


numeroHtml.textContent = `Número: ${numero}`;
textoHtml.textContent = `Texto: ${texto}`;
verdaderoHtml.textContent = `Booleano: ${verdadero}`;
nuloHtml.textContent = `Nulo: ${nulo}`;
indefinidoHtml.textContent = `Indefinido: ${indefinido}`;

if (inputMensajeHtml && mostrarMensajeHtml && mostrarMensajeVariableHtml) {
    const nuevoMensaje = inputMensajeHtml.value.trim();
    mostrarMensajeHtml.addEventListener('click', () => {
        if (nuevoMensaje === "") {
            return;
        }
        numero = inputMensajeHtml.value;
        const mensaje = numero;
        mostrarMensajeVariableHtml.textContent = `${mensaje}`;
    })
}
