const button = document.querySelectorAll('.color')
const body = document.querySelector('body')
button.forEach(button => {
   button.addEventListener('mouseover', function(e){
    body.style.backgroundColor = e.target.id 
    })
})
