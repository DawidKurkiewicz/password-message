const h1 = document.createElement("h1")
h1.innerHTML = "Password"
document.body.appendChild(h1)
const inputField = document.createElement("input");
inputField.type = "password";
inputField.setAttribute('id','pass')
document.body.appendChild(inputField)
const divMessage = document.createElement("div")
divMessage.classList.add("message")
document.body.appendChild(divMessage)

const input = document.getElementById("pass");
const div = document.querySelector(".message");
const passwords = ["User1", "user2"]
const messages = ["correct password user1", "correct password user2"]
input.addEventListener("focus", (e) => {
    e.target.classList.toggle("active")
})

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

//                  ForEach
// passwords.forEach((pass, i) => {
//     passwords[i]=pass.toLowerCase()
// })
// const showMessage = (e) => {
//     const input = e.target.value.toLowerCase()
//     passwords.forEach((pass, i) => {
//         if (pass === input) {
//             document.querySelector(".message").innerHTML = messages[i];
//             e.target.value = ''
//         }
//     })
// }
// input.addEventListener("input", showMessage)

//                  Map

const lowerCasePass = passwords.map(pass => pass.toLocaleLowerCase())
const showMessage = (e) => {
    const input = e.target.value.toLocaleLowerCase()
    for (let i = 0; i < lowerCasePass.length; i++)
        if (input == lowerCasePass[i]) {
            div.innerHTML = messages[i]
            e.target.value = ''

        }
}

input.addEventListener("input", showMessage)
