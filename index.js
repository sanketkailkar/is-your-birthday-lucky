const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-button');
const outputBox = document.querySelector('.output-box');

checkButton.addEventListener('click', checkBirthdayIsLucky);

function compareValues(sum, luckyNumber){
    if (sum%luckyNumber.value===0){
        outputBox.innerHTML = "Your birthday is lucky 😍!";
    }else{
        outputBox.innerHTML = "Your birthday is not lucky 😔!";
    }
}

function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyNumber);
}

function calculateSum(dob){
    dob = dob.replaceAll("-",""); 
    let sum = 0;   

    for(let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}