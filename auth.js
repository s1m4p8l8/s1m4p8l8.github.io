let registerLogin = document.querySelector(".register-login")
let registerPassword = document.querySelector(".register-password")
let registerSubm = document.querySelector(".register-subm")
let registerResult = document.querySelector(".register-result")

let users = JSON.parse(localStorage.getItem('users')) || {};

registerSubm.addEventListener("click", function() {
    if (registerLogin.value in users) {
        if (registerLogin.value == 0) {
            registerResult.style.color = "red";
            registerResult.innerHTML = "Порожнє поле логіну";
        } else {
            registerResult.style.color = "red";
            registerResult.innerHTML = "Такий аккаунт вже є";
        }
    } else {
        if (registerPassword.value == 0) {
            registerResult.style.color = "red";
            registerResult.innerHTML = "Порожнє поле паролю";
        } else {
            registerResult.style.color = "green";
            registerResult.innerHTML = "Успіх";
            users[registerLogin.value] = registerPassword.value;
            localStorage.setItem('users', JSON.stringify(users));
            // alert("Create");
            // window.location.href = "main.html";
        }
    }
})
console.log(users)

// registerSubm.addEventListener("click", function() {
//     alert("Good")
//     window.location.href = "main.html";
// })
