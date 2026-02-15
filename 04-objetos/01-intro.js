let user = {
    username: "Temach",
    nickname: "Temach Zunga Loca 666",
    password: "SingaMan69",
    contact: {
        email: "temach.zunga@locas.com",
        phone: "1234567890"
    },
    active: true,
    passwordRecovery: function() {
        console.log("Password recovery email sent to " + this.contact.email);
        alert("Password recovery email sent to " + this.contact.email);
    },
}


const userInfoDiv = document.getElementById("user-info");
const recoveryBtn = document.getElementById("recovery-btn");

passWordHashFunction = (password) => {
    // Simple hash function for demonstration (not secure)
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        hash = (hash << 5) - hash + password.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

passwordHash = passWordHashFunction(user.password);

userInfoDiv.innerHTML = `
    <h2>User Information</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Nickname:</strong> ${user.nickname}</p>
    <p><strong>Email:</strong> ${user.contact.email}</p>
    <p><strong>Phone:</strong> ${user.contact.phone}</p>
    <p><strong>Active:</strong> ${user.active}</p>
    <p><strong>Password simple Hash:</strong> ${passwordHash}</p>
`;

recoveryBtn.addEventListener("click", function(){
    user.passwordRecovery();
})