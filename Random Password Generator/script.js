const passwordInput = document.querySelector(".password_input")
const copyIcon = document.querySelector(".copy-icon")
const rangeInput = document.querySelector(".range_input")
const rangeNum = document.querySelector(".range_num")
const btn = document.querySelector(".btn")
console.log(btn)


let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|{}[]():;.,*+-#@<>~"

// function to generate random number
const generatePassword = ()=>{
    let newPassword = ""
    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumber = Math.floor(Math.random() * allCharacters.length)
        newPassword += allCharacters[randomNumber]
        console.log(newPassword)
    }
    passwordInput.value = newPassword
    copyIcon.classList.replace("uil-file-check-alt","uil-copy")

}

// calling function
generatePassword()

// adding EventListener on range input tag
rangeInput.addEventListener("input", ()=>{
    rangeNum.innerText = rangeInput.value
    // generatePassword()
})

// coping text to clipboard on click
copyIcon.onclick = ()=>{
    navigator.clipboard.writeText(passwordInput.value)
    copyIcon.classList.replace("uil-copy","uil-file-check-alt")
}

// generatePassword on button click
btn.onclick = ()=>{
    generatePassword()
}

