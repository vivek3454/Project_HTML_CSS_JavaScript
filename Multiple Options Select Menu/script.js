let selectBtn = document.querySelector(".select-btn");
let languagesBox = document.querySelector(".languages-box");
let languages = document.querySelectorAll(".language");

selectBtn.addEventListener("click", ()=>{
    selectBtn.classList.toggle("open")
})
// console.log(languages);

languages.forEach(language =>{
    language.addEventListener("click", ()=>{
        language.classList.toggle("selected")
        
        let selected = document.querySelectorAll(".selected")
        let btnText = document.querySelector(".btn-text");
        if (selected.length > 0) {
            btnText.textContent = `${selected.length} Selected`
        }
        else{
            btnText.textContent = "Select Language"
        }
    });
});