const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const btnEl = document.querySelector('#btn')
const password1El = document.querySelector('#password1')
const password2El = document.querySelector('#password2')
const lengthInputEl = document.querySelector('#length-input')

let pass1 = ''
let pass2 = ''

btnEl.addEventListener("click", () => {
    let passLen = lengthInputEl.value
    console.log(`passLen=${passLen}`)
    pass1 = ''
    pass2 = ''
    let rand = 0
    for (let i = 0; i < passLen; i++) {
        rand = Math.floor( Math.random() * characters.length )
        pass1 += characters[rand]
        rand = Math.floor( Math.random() * characters.length )
        pass2 +=  characters[rand]
    }
    password1El.textContent = pass1
    password2El.textContent = pass2
})
/*
password1El.addEventListener("click", () => {
    console.log("password1El")
    let sel = password1El.setSelectionRange(0, password1El.value.length);
    console.log(sel)
})*/



