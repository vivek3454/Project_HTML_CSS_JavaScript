
let hr = min = sec = ms = '0' + 0
let startTimer


const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")



let Start = () => {
    startBtn.classList.add("active")
    stopBtn.classList.remove("active")
    
    startTimer = setInterval(() => {
        ms++
        ms = ms < 10 ? '0' + ms : ms
        if (ms == 100) {
            sec++
            sec = sec < 10 ? '0' + sec : sec
            ms = '0' + 0
        }
        if (sec == 60) {
            min++
            min = min < 10 ? '0' + min : min
            sec = '0' + 0
        }
        if (min == 60) {
            hr++
            hr = hr < 10 ? '0' + hr : hr
            min = '0' + 0
        }
        putValues()
    }, 10);
    
}
let Stop = ()=> {
    startBtn.classList.remove("active")
    stopBtn.classList.add("active")
    clearInterval(startTimer)
    
}
let Reset = ()=> {
    startBtn.classList.remove("active")
    stopBtn.classList.remove("active")
    clearInterval(startTimer)
    hr = min = sec = ms = '0' + 0
    putValues()    
}

startBtn.addEventListener("click", Start)
stopBtn.addEventListener("click", Stop)
resetBtn.addEventListener("click", Reset)

let putValues = () => {
    document.querySelector(".milisecond").textContent = ms
    document.querySelector(".second").textContent = sec
    document.querySelector(".minute").textContent = min
    document.querySelector(".hour").textContent = hr
}