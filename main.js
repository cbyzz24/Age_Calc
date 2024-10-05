const currentYear = document.getElementById("currentYear");
const birthYear = document.getElementById("birthYear");
const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");

function updateYear(){
    const thisYear = new Date().getFullYear();
    const currentYear = document.getElementById("currentYear").textContent = thisYear;
}

updateYear();

function calculateAge(){
    result.textContent = currentYear.value - birthYear.value;
 
}