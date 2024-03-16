let calculation = localStorage.getItem('calculation') || '';

display();

function addCalculation(value) {
    calculation += value;
    display();
    localStorage.setItem('calculation', calculation);
}

function display() {
    document.querySelector('.js-display').innerHTML = calculation;
}

function endResult() {
    calculation = eval(calculation);
    
    display();

    localStorage.setItem('calculation', calculation);
}

function clearResult() {
    calculation = '';

    display();

    localStorage.setItem('calculation', calculation);
}

