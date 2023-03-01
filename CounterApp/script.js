const display = document.getElementById("display");
const Decrement_btn = document.getElementById("Decrement-btn");
const Increment_btn = document.getElementById("Increment-btn");
const reset_btn = document.getElementById("Reset-btn");


Decrement_btn.onclick = ()=>{
    const value = Number(display.innerText);
    display.innerText = value - 1;
}

Increment_btn.onclick = ()=>{
    const value = Number(display.innerText);
    display.innerText = value + 1;
}
reset_btn.onclick = ()=>{
    display.innerText = 0;
}