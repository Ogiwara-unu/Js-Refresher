const edadinput = document.getElementById("edad");
const verificarBtn = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

verificarBtn.addEventListener("click", () => {
    const edad = parseInt(edadinput.value);
    if (isNaN(edad) || edadinput.value.trim() === "") {
        resultado.textContent = "Por favor, ingresa un número válido.";
    } else if (edad >= 18) {
        resultado.textContent = "¡Felicidades tio, Puedes ver Polnito!";
    } else {
        resultado.textContent = "Andate de aca zunga, no puedes ver Polnito.";
    }
});