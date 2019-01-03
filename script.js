const input = document.getElementById("pass");
const div = document.querySelector(".message");
const passwords = ["User1", "user2"]
const messages = ["correct password user1", "correct password user2"]
// input.addEventListener("keyup", (e) => {
//     div.innerHTML = ''
//     const text = e.target.value
//     passwords.forEach((pass, i) => {
//         if (pass === text) {
//             div.innerHTML = messages[i]
//             e.target.value = ''
//         }
//     })
// })

input.addEventListener("focus", (e) => {
    e.target.classList.toggle("active")
})


//ForEach

const showMessage = (e) => {
    passwords.forEach((pass, i) => {
        if (pass.toLowerCase() === e.target.value.toLowerCase()) {
            document.querySelector(".message").innerHTML = messages[i];
            e.target.value = ''

        }
    })
}

input.addEventListener("input", showMessage)