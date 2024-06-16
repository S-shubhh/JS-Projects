const form = document.querySelector("form");
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const results = document.querySelector("#result")

   const bmi  = ( weight / ((height * height ) / 10000)).toFixed(2);
   if(bmi >= 25){
    results.innerHTML = `<span style= "background-color: #7a101e; color: white ; padding : 15px  "> You are Overweight. BMI : ${bmi}</span>`
   }
    if(bmi <= 18.5 ){
        results.innerHTML = `<span style= "background-color: yellow; color: black; padding : 20px"> You are underweight! Your BMI : ${bmi}</span>`
    }
    else if(bmi >= 18.5 &&  bmi <= 25 ) {
        results.innerHTML = `<span style= "background-color: green ;color: black;padding : 20px">You ar healthy BMI : ${bmi}</span>`

    }
   
    
})