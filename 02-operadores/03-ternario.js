/**
 * La estructura ternaria es una forma concisa de escribir una declaración if-else.
 * Se compone de tres partes: una condición, una expresión a ejecutar si la condición es verdadera y otra expresión a ejecutar si la condición es falsa.
 * La sintaxis es la siguiente: condición ? expresión_si_verdadera : expresión_si_falsa;
 */

const edadinput = document.getElementById("edad");
const verificarBtn = document.getElementById("verificar");
const resultado = document.getElementById("resultado");
const imagen = document.getElementById("imagen");

verificarBtn.addEventListener("click", () => {
    const edad = parseInt(edadinput.value);
    if (isNaN(edad) || edadinput.value.trim() === "") {
        resultado.textContent = "Por favor, ingresa un número válido.";
    } else {
        resultado.textContent = edad >= 18 ?  "Felicidades tio, Puedes ver Polnito!" : "Andate de aca zunga, no puedes ver Polnito.";
        imagen.src = edad >= 18 ? "https://i.pinimg.com/736x/8c/83/c8/8c83c8494717f3a277ae5ebf48634385.jpg" : "https://i.pinimg.com/736x/ad/f2/82/adf282e26e8a7ba1e1d5efbc1d9075aa.jpg";
}});