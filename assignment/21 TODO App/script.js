const inputTask = document.getElementById('input-task')
const addTaskBtn = document.getElementById('add-task-btn')
const taskList = document.getElementById('task-list')

addTaskBtn.onclick = () => {
    const taskText = inputTask.value
    if (taskText === '') {
        alert('Please enter a task.')
        return
    }

    const li = document.createElement('li')
    li.innerText = taskText
    taskList.appendChild(li)
    inputTask.value = ''
}
