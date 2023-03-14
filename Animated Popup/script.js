const section = document.querySelector("section")
const hireBtn = section.querySelector("#hireBtn")
const Close = document.querySelectorAll(".close")
console.log(hireBtn)

hireBtn.addEventListener("click", () => {
    section.classList.add("show")
})

Close.forEach(cBtn => {
    console.log(cBtn);
    cBtn.addEventListener("click", () => {
        section.classList.remove("show")
    })
})
