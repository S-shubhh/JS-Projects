const startBtn = document.querySelector('.start')
const stopBtn  = document.querySelector('.stop');
const body = document.querySelector('body');

let interval;
const randomColor = function () {
const hex = '0123456789ABCDEF';
let color = '#';
for (let index = 0; index < 6; index++) {
     color += hex[Math.floor(Math.random() * 16)];
}
return color;
};

const  colorChange = () => {
    if(!interval){
interval = setInterval(changebgcol, 1000);
}
function  changebgcol()
{
    body.style.backgroundColor = randomColor();
}};

const stopColorChange = function () {
    clearInterval(interval);
    interval = null;
}


startBtn.addEventListener('click', colorChange);
stopBtn.addEventListener('click', stopColorChange);

