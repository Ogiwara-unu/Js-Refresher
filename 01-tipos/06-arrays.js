let hijueputas = [
    "Julian",
    "Santiago",
    "Villa",
    "Tu madre"
]

const primerHijueputa = document.getElementById("primerHp");
const segundoHijueputa = document.getElementById("segundoHp");
const tercerHijueputa = document.getElementById("tercerHp");

primerHijueputa.textContent = hijueputas[0];
segundoHijueputa.textContent = hijueputas[1];
tercerHijueputa.textContent = hijueputas[2];

const hijueputasList = document.getElementById("hijueputas-lista");

hijueputasList.innerHTML = hijueputas
    .map(elemento => `<li>${elemento}</li>`)
    .join("");
