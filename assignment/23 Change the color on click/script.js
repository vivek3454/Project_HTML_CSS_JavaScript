const btn = document.getElementById("btn")
btn.onclick = ()=>{
    var colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];

    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.background = randomColor
}