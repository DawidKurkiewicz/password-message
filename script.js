const input = document.getElementById("pass");
const div = document.querySelector(".message");
const password = "user";
const message = "correct password!";
input.addEventListener("keyup", (e) => {
    if (password === e.target.value) {
        div.innerHTML = message;
        e.target.value = "";
    } else {
        div.innerHTML = ""
    }
})

input.addEventListener("focus", (e) => {
e.target.classList.toggle("active")
})

