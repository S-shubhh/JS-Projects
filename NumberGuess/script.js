document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('guessForm');
const numberGuess = document.getElementById('numberGuess');
const pguess = document.getElementById('pguess');
const gRemaining = document.getElementById('gRemaining');

const randomNumber = Math.floor(Math.random() * 10 + 1);
let rGuess  = 10;

form.addEventListener('submit', (e)=> {
 e.preventDefault();
const userGuess= parseInt(numberGuess.value);
rGuess--;

console.log(userGuess);
if( userGuess === randomNumber ){
    pguess.textContent = `Congrats! You guessed the right word  ${randomNumber} `
    form.remove();
}
else {
    pguess.textContent = `Previous Guess : ${userGuess}`;
    gRemaining.textContent = `Remaining Attempt : ${rGuess}`;
}

if(rGuess <=0 ){
    pguess.textContent = `Game OVer!`
    form.remove();
}

numberGuess.value = '';
numberGuess.focus();

})
 gRemaining.textContent = `Remaining Guess : ${rGuess}`;
})
