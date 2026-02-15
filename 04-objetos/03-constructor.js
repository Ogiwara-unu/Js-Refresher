const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("register-btn");
const userList = document.getElementById("user-list");
const users = [];

function User(username, password) {
    this.username = username;
    this.password = password;
    this.sayHi = function() {
        alert("Hola zungas hediondas, mi username es: " + this.username);
    }
}

submitButton.addEventListener("click",function(){
    if(usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }else{
    const newUser = new User(usernameInput.value, passwordInput.value);
    users.push(newUser);
    displayUsers();
    }
    console.log(users);
    usernameInput.value = "";
    passwordInput.value = "";
});



function displayUsers() {
    userList.innerHTML = "";
    users.forEach(user => {
        const userItem = document.createElement("p");
        userItem.textContent = `Username: ${user.username}`;
        userList.appendChild(userItem);
    });
}
