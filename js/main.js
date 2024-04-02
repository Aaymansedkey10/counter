let valueOfNumber = document.querySelector(".container-value");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let minNum = document.querySelector(".minNum");
let maxNum = document.querySelector(".maxNum");
let counter = 0 ;

valueOfNumber.textContent = 0 ;
decrement.addEventListener('click', ()=>{
    if (counter == 30) {
        alert("The maximum Number = 30");
    } else {
        counter++;
        valueOfNumber.textContent = counter ;
        valueOfNumber.style.color = "#0d6efd";
    }
   
});
increment.addEventListener('click', ()=>{
    if (counter == 0) {
        alert("This is Minimum Number");
    }else{
        counter--;
        valueOfNumber.textContent = counter ;
        valueOfNumber.style.color = "red";
    }
});
maxNum.addEventListener('click' , ()=>{
        valueOfNumber.textContent = 30;
        valueOfNumber.style.color = "#0d6efd";  
});
minNum.addEventListener('click',()=>{
        valueOfNumber.textContent = 0 ;
        valueOfNumber.style.color = "red"; 
});