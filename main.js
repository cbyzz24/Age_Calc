const currentYear = document.getElementById("currentYear");
const birthYear = document.getElementById("birthYear");
const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");



function calculateAge(){
    result.textContent = currentYear.value - birthYear.value;
 
}