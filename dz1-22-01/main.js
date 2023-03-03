const email = document.querySelector('.email')
const password = document.querySelector('.password')
const checkBtn = document.querySelector('.check')

let emailReg = /@/i
let passReg = /\d{5,}/g

function check () {
    if(emailReg.test(email.value) && passReg.test(password.value)) {
        alert('Пользователь успешно зарегестрирован!')
    } else {
        alert ('Вводите корректные данные!!!')
    }
}

checkBtn.onclick = check
const moveBlock = document.querySelector('.move__block')
let x = 0
let isRepeat = false

function move () {
    setTimeout(() => {
        if(x < 1030 && !isRepeat) {
            x += 20
            moveBlock.style.left = `${x}px`
        } else if(x > 0) {
            isRepeat = true
            x -= 20
            moveBlock.style.left = `${x}px`
        } else {
            isRepeat = false
        }
        move ()
    }, 50)
}
move()