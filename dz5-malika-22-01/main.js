const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('p')
        const removeToDo = document.createElement('button')
        removeToDo.innerHTML="delete"
        const changeInfo= document.createElement("button")
        changeInfo.innerHTML='edit'
        removeToDo.setAttribute('class' , 'delete_button')
        changeInfo.setAttribute('class' , 'edit_button')
        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')

        text.innerText = input.value

        div.append(text)
        div.append(removeToDo)
        div.append(changeInfo)
        todoList.prepend(div)

        changeInfo.addEventListener('click' , ()=>{
            let changeValue = prompt("edit word")
            text.innerHTML=changeValue
        })
        removeToDo.addEventListener('click', ()=>{
            todoList.removeChild(div)
        })



    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', event => event.code === 'Enter' ? createTodo() : false)