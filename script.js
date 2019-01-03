const input = document.getElementById("pass");
const div = document.querySelector(".message");
const passwords = ["user", "user2"]
const messages = ["correct password user1", "correct password user2"]
input.addEventListener("keyup", (e) => {
    const text = e.target.value
    passwords.forEach((pass, i) => {
        if (pass === text) {
            div.innerHTML = messages[i]

        }
    })
})

input.addEventListener("focus", (e) => {
    e.target.classList.toggle("active")
})

