const content = document.getElementById('content');

let i = 0;

while (i <= 10){
    console.log(i);
    content.innerHTML += `<p>Estos son los numeros iterando perrita:  <strong>${i}</strong></p>`;
    i++;
}