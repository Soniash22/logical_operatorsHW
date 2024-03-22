// const box = document.querySelector('.box');
// let leftPosition = box.offsetLeft;
// let topPosition = box.offsetTop;
// function translatePosition(event) {
//     if(event.key === 'ArrowRight') {
//         // leftPosition = leftPosition + 10
//         leftPosition += 10
//         box.style.left = leftPosition + 'px';
        
//     }
//     else if(event.key === 'ArrowLeft') {
//         leftPosition -= 10
//         box.style.left = leftPosition + 'px';
        
//     }


//     if(event.key === 'ArrowUp') {
        
//         topPosition -= 10
//         box.style.top = topPosition + 'px';
        
//     }
//     else if(event.key === 'ArrowDown') {
//         topPosition += 10
//         box.style.top = topPosition + 'px';
        
//     }
// }
// document.addEventListener('keydown', translatePosition)

const inputMy = document.getElementById('validation-input')
const text = document.querySelector('.error')
const lengthNeed = inputMy.getAttribute('data-length')
inputMy.addEventListener('blur', () => {
    if(inputMy.value.length < lengthNeed) {
        text.textContent = 'Введи 6 символів'
        inputMy.style.border = '3px solid red'
    }
    else {
        text.textContent = ''
        inputMy.style.border = '3px solid green'
    }
})

//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const inputRoll = document.getElementById('font-size-control')
const changeSize = document.getElementById('text')


inputRoll.addEventListener('input', () => {
    const fontSizeValue = inputRoll.value + 'px';
    changeSize.style.fontSize = fontSizeValue;
  });