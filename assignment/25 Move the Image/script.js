let image = document.getElementById("image")
let up = document.getElementById("up")
let down = document.getElementById("down")
let left = document.getElementById("left")
let right = document.getElementById("right")

up.onclick = () => {
    image.style.top = "30%"
}

down.onclick = () => {
    image.style.bottom = "30%"
}

left.onclick = () => {
    image.style.left = "30%"
}

right.onclick = () => {
    image.style.right = "30%"
}

// let x = 0;
// let y = 0;

// const moveImage = (direction) => {
//     switch (direction) {
//         case "ArrowUp":
//             y -= 10;
//             break;
//         case "ArrowDown":
//             y += 10;
//             break;
//         case "ArrowLeft":
//             x -= 10;
//             break;
//         case "ArrowRight":
//             x += 10;
//             break;
//     }
// }
// let direction = "ArrowUp"
// moveImage(direction)