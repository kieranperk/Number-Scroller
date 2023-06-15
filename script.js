let currentNumber = localStorage.getItem('number') || 1;
let darkMode = localStorage.getItem('darkMode') === 'true';

function updateNumberOnScroll(event) {
    const delta = Math.sign(event.deltaY);

    // Update the number based on scroll direction
    if (delta > 0) {
        currentNumber++;
    } else if (delta < 0) {
        currentNumber = Math.max(1, currentNumber - 1);
    }

    const numberContainer = document.getElementById('number');
    numberContainer.innerText = currentNumber;

    // Save the number to local storage
    localStorage.setItem('number', currentNumber);
}

function toggleTheme() {
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-theme');
    darkMode = !darkMode;

    const themeButton = document.getElementById('themeButton');
    themeButton.classList.toggle('dark');

    const resetButton = document.getElementById('resetButton');
    resetButton.classList.toggle('dark');

    // Save the dark mode state to local storage
    localStorage.setItem('darkMode', darkMode);
}

function resetCounter() {
    if (confirm('Are you sure you want to reset the counter?')) {
        currentNumber = 1;
        const numberContainer = document.getElementById('number');
        numberContainer.innerText = currentNumber;
        localStorage.setItem('number', currentNumber);
    }
}

// Add event listener for scroll wheel
window.addEventListener('wheel', updateNumberOnScroll);

// Get and display the stored number and dark mode state on page load
window.addEventListener('load', function() {
    currentNumber = localStorage.getItem('number') || 1;
    const numberContainer = document.getElementById('number');
    numberContainer.innerText = currentNumber;

    darkMode = localStorage.getItem('darkMode') === 'true';
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-theme', darkMode);

    const themeButton = document.getElementById('themeButton');
    themeButton.classList.toggle('dark', darkMode);

    const resetButton = document.getElementById('resetButton');
    resetButton.classList.toggle('dark', darkMode);
});