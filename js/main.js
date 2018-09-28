//  Cached Element References

var answer = document.getElementById('answer');
var number = document.getElementById('number');
var add = document.getElementById('add');
var minus = document.getElementById('minus');


//*---- Variables
var beforeDisplay = 0;

//*---- Event Listeners
add.addEventListener('click', addNumber);
minus.addEventListener('click', subtractNumber);

//*---- Functions
function sum(){
    if(beforeDisplay<0){
        answer.style.color = "red";
    }else{
        answer.style.color="black";
    }
    answer.textContent = beforeDisplay; 
}

function addNumber(){
    beforeDisplay += parseFloat(number.value);
    sum();
}

function subtractNumber(){
    beforeDisplay -= parseFloat(number.value);
    sum();
}
