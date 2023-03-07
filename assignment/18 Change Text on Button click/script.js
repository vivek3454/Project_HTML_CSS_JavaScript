let heading = document.getElementById("heading")
        let btn = document.getElementById("btn")

        btn.onclick = ()=>{
            if(heading.innerText == "The most affordable learning platform"){
                heading.innerText = "PWSkills"
            }
            else{
                heading.innerText = "The most affordable learning platform"
            }
        }