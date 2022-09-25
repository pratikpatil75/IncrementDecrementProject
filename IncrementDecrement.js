
var counterPlaceHolder = document.getElementById("counter-placeholder");
var number = 0 ;

function Increment(){
    number++;
    counterPlaceHolder.innerHTML = number;
    // console.log(number);
}

function Decrement(){
    number--;
    counterPlaceHolder.innerHTML = number;
    // console.log(number);
}

function Reset(){
    number = 0;
    counterPlaceHolder.innerHTML = number;
    // console.log(number);
}