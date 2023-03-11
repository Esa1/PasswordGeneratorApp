const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const btnEl = document.querySelector('#btn')
const password1El = document.querySelector('#password1')
const password2El = document.querySelector('#password2')
let pass1 = ''
let pass2 = ''
let passLen = 15

btnEl.addEventListener("click", () => {
    console.log(characters.length)
    let rand = 0
    for (let i = 0; i < passLen; i++) {
        rand = Math.floor( Math.random() * characters.length )
        console.log('rand1= ' + rand)
        pass1 += characters[rand]
        rand = Math.floor( Math.random() * characters.length )
        console.log('rand2= ' + rand)
        pass2 +=  characters[rand]
    }
    password1El.textContent = pass1
    password2El.textContent = pass2
})




