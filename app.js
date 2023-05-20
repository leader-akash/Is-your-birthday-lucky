const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");

const checkButton = document.querySelector("#check");

const outputBox = document.querySelector("#print-lucky");

function printluck (sum, luckyNumber){
  
    if(sum%luckyNumber === 0){
        outputBox.innerText="Hurray! Your Birthday is Lucky 🥳";
    }else{
        outputBox.innerText="Sorry! Your Birthday is not lucky😔";
    }
}

function checkBirthDayIsLucky (){
    const bdate = dateOfBirth.value;
    const sum = calculateSum(bdate);
    const luck = luckyNumber.value;

    if(!bdate){
        alert('select a date')
        return;
    }
    
    if(!luck){ 
        alert('put your lucky number')
        return;
    }

    // if(sum&&bdate){
    //     printluck(sum,luckyNumber.value);
    // }
    // else
    //     outputBox.innerText="Please Enter both the fields to check";
    printluck(sum,luckyNumber.value);

    
}

function calculateSum(bdate){
    bdate = bdate.replaceAll("-", "");
    let sum =0;

    for(let i=0; i<bdate.length; i++){
        sum += Number(bdate.charAt(i));
    }
    return sum;
}


checkButton.addEventListener('click', checkBirthDayIsLucky );