const saludarBtn = document.getElementById("saludarBtn");
const nombreInput = document.getElementById("nombreInput");

function saludar(Nombre){
    alert("Hola buena perra " + Nombre + " :v ");
}

saludarBtn.addEventListener('click', function(){
    const nombreDelZunga = nombreInput.value.trim();
    if(nombreDelZunga === ""){
        alert("Escribi tu nombre bien gran babosa");
    }else{
        saludar(nombreDelZunga);
    }
})