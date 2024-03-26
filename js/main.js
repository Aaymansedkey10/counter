let valueOfNumber = document.querySelector(".container-value");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let counter = 0 ;

valueOfNumber.textContent = 0 ;
decrement.addEventListener('click', ()=>{
    if (counter == 20) {
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