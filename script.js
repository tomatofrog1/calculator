const display = document.querySelector('h1')
const num1 = document.querySelector('#one')
const num2 = document.querySelector('#two')
const num3 = document.querySelector('#three')
const num4 = document.querySelector('#four')
const num5 = document.querySelector('#five')
const num6 = document.querySelector('#six')
const num7 = document.querySelector('#seven')
const num8 = document.querySelector('#eight')
const num9 = document.querySelector('#nine')
const num0 = document.querySelector('#zero')
const div = document.querySelector('#divide')
const multi = document.querySelector('#multiply')
const diff = document.querySelector('#minus')
const add = document.querySelector('#add')
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')

let nums = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9]

for (let i = 0; i < 9; i++) {
    nums[i].addEventListener('click', function(){
        display.textContent += i
        
    })
    
}

clear.addEventListener('click', function(){
    display.textContent = ""
})

