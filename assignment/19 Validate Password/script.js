const form = document.querySelector('form')
const email = document.getElementById("email")
const password = document.getElementById("password")
const display = document.getElementById("display")

form.onsubmit = (e) => {
    e.preventDefault()
    const emailValue = email.value
    const passwordValue = password.value
    if (emailValue.includes("@gmail.com") && passwordValue.length >= 8) {
        display.innerText = "Valid email and password!"
        display.style.color = 'green'
    } else {
        display.innerText = "Invalid email or password!"
        display.style.color = 'red'
    }
}