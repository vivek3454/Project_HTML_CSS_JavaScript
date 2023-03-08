const items = ['HTML and Semantics', 'Starting with CSS', 'Working Template', 'Mobile responsive webpages', 'Grid and Flex-box in CSS', 'Projects using HTML & CSS', 'Version Control and Git', 'Getting Started with JavaScript', 'Advance JavaScript', 'Working with DOM', 'Making Projects using HTML, CSS and JavaScript', 'Understanding Fundamental of Computer Science', 'Getting Started with Database', 'Understanding the Database', 'Starting with NodeJS and Express', 'Understanding React and its Fundamentals', 'Understanding Hooks and Routers', 'Starting and Completing Full Fledge Projects']

let counter = 0
let btn = document.getElementById('btn')
let del = document.getElementById('delete')
let ul = document.getElementById('list')

btn.onclick = () => {
    if (counter < items.length) {
        let listItem = document.createElement('li')
        listItem.innerText = items[counter]
        ul.appendChild(listItem)
        counter++
    }
    else {
        alert('All items have been added!')
        while (list.lastChild) {
            list.removeChild(list.lastChild);
            counter = 0
        }
    }
}

del.onclick = () => {
    list.removeChild(list.lastChild);
    counter--
}
