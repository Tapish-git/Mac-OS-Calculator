let display = document.getElementById('display');

function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function delLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculateResult(){
    try {
        display.value = eval(display.value.replace('x', '*').replace('/', '/'));
    } catch (error) {
        display.value = "Error";
    }
}