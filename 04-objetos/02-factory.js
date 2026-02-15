let users = [];

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const contactEmailInput = document.getElementById("contact-email");
const registerBtn = document.getElementById("register-btn");
const userList = document.getElementById("user-list");


function renderUsers() {
    userList.innerHTML =
        "<h2>Registered Users:</h2>" +
        users.map(user => `<p>${user.username}</p>`).join("");
}


registerBtn.addEventListener("click", function() {
    if (
        usernameInput.value.trim() === "" ||
        passwordInput.value.trim() === "" ||
        contactEmailInput.value.trim() === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    const newUser = {
        username: usernameInput.value.trim(),
        password: passwordInput.value.trim(),
        contact: {
            email: contactEmailInput.value.trim()
        },
        active: true
    };

    storeUser(newUser);
});


function storeUser(user) {
    users.push(user);
    renderUsers();
    alert("User " + user.username + " registered successfully!");
}