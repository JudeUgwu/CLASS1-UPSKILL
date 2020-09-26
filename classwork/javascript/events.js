// our add function
function addition(){
    let input1 =  document.getElementById("number1")
    let input2 = document.getElementById("number2");
    let sum = parseInt(input1.value) + parseInt(input2.value) ;
    let display = document.getElementById("display");
    display.innerHTML = `The sum of the two numbers  is ${sum}`;
}

function subtraction(){
}

function Multiplication(){
}


// addition(1,2);
// addition(100,120);

// addition(40,2);

// addition(50,2);

// addition(1,28);

// Assignment
// Write an advanced calculator program to perform
// 1 : Subtraction
// 2 :Division
// 3 : Multiplication