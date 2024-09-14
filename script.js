// Select the display where the results will be shown
const display = document.getElementById('result');

// Function to append value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function for special operations
function squareNumber() {
    display.value = Math.pow(eval(display.value), 2);
}

function sqrtNumber() {
    display.value = Math.sqrt(eval(display.value));
}

function expNumber() {
    display.value = Math.exp(eval(display.value));
}

function logNumber() {
    display.value = Math.log10(eval(display.value));
}

function sinNumber() {
    display.value = Math.sin(eval(display.value));
}

function cosNumber() {
    display.value = Math.cos(eval(display.value));
}

// Add event listener for the clear button
document.querySelector('.clear-button .clear').addEventListener('click', clearDisplay);

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;

    if (/^[0-9]$/.test(key)) { // For number keys (0-9)
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') { // For operator keys
        appendToDisplay(` ${key} `); // Adding spaces for proper formatting
    } else if (key === 'Enter') { // For equal key
        event.preventDefault(); // Prevent default Enter behavior (form submission)
        calculateResult();
    } else if (key === 'Backspace') { // For backspace key
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') { // For escape key
        clearDisplay();
    }
}

document.addEventListener('keydown', handleKeyboardInput);

// Event listeners for special operation buttons
document.getElementById('square').addEventListener('click', squareNumber);
document.getElementById('sqrt').addEventListener('click', sqrtNumber);
document.getElementById('exp').addEventListener('click', expNumber);
document.getElementById('log').addEventListener('click', logNumber);
document.getElementById('sin').addEventListener('click', sinNumber);
document.getElementById('cos').addEventListener('click', cosNumber);

// Event listeners for number and operator buttons
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(value);
        }
    });
});