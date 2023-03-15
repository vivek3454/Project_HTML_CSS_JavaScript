
const container = document.querySelector(".container");
const textarea = container.querySelector("textarea");
const signal_num = container.querySelector(".signal_num");


textarea.addEventListener("keyup", () => {
    const Val = textarea.value.length;
    signal_num.textContent = Val;
    (Val > 0) ? container.classList.add("active") : container.classList.remove("active");
    (Val > 100) ? container.classList.add("error") : container.classList.remove("error");

});
