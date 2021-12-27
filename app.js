console.log("Its working");
var heightFt = document.getElementById('height-ft');
var heightInch = document.getElementById('height-inch');
var weight = document.getElementById('weight');
var calculate = document.getElementById('calculate');
var bmiContainer = document.getElementById('bmi');

calculate.addEventListener('click', ()=>{


 const heightFtValue = parseInt(heightFt.value);
 const heightInchValue = parseInt(heightInch.value);
 const weightValue = parseInt(weight.value);

  const height = (((heightFtValue*12 + heightInchValue) * 2.54 )/100).toFixed(2); 
  console.log(height,heightFtValue,heightInchValue,weightValue); 

  const BMI = (weightValue/(height * height) ).toFixed(2);
  console.log(BMI);
  bmiContainer.innerHTML = BMI;
})
