const content = document.getElementById('content');
let hijueputas = ['Carlos', 'David', 'Yo', 'Villa'];

for (let hijueputa of hijueputas) {
    content.innerHTML += `
    <li style="margin: 10px 0; padding: 5px; border: 1px solid #ccc; border-radius: 5px; justify-content: space-between; display: flex; align-items: center;">${hijueputa}<img style="width:50px;height:50px;vertical-align:middle;" src="https://i.pinimg.com/736x/59/e1/9e/59e19e78e5b862bd06029e27e93ff961.jpg" alt="Icono de hijueputa"></li>
    `;
} 