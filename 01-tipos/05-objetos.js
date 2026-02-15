let Hijueputa = {
    nombre: "Julian",
    edad: 20,
    saludar: function() {
        console.log("Hola, soy un hijueputa, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
};

const nombreHijueputa = document.getElementById("nombreHijueputa");
const edadHijueputa = document.getElementById("edadHijueputa");
const saludarHijueputa = document.getElementById("saludarHijueputa");
const nuevoNombreInput = document.getElementById("nuevoNombre");
const cambiarNombreButton = document.getElementById("cambiarNombre");
const nuevoNombreHijueputa = document.getElementById("nuevoNombreHijueputa");

nombreHijueputa.textContent = Hijueputa.nombre;
edadHijueputa.textContent = Hijueputa.edad;

saludarHijueputa.addEventListener('click', function(){
    Hijueputa.saludar();
    alert("Hola, soy un hijueputa, mi nombre es " + Hijueputa.nombre + " y tengo " + Hijueputa.edad + " años.");
});

if(nuevoNombreHijueputa && nuevoNombreInput && cambiarNombreButton) {
    cambiarNombreButton.addEventListener('click', function(){
        const nuevoNombre = nuevoNombreInput.value.trim();
        if(nuevoNombre) {
            Hijueputa.nombre = nuevoNombre;
            nombreHijueputa.textContent = Hijueputa.nombre;
            nuevoNombreHijueputa.textContent = Hijueputa.nombre;
            alert("El nombre del hijueputa ha sido cambiado a " + Hijueputa.nombre);
        }else{
            alert("Ingresa un valor gran burra.");
        }
    })

};