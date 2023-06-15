let currentNumber = localStorage.getItem('number') || 1;

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

    const themeButton = document.getElementById('themeButton');
    themeButton.classList.toggle('dark');
}

// Add event listener for scroll wheel
window.addEventListener('wheel', updateNumberOnScroll);

// Get and display the stored number on page load
window.addEventListener('load', function() {
    currentNumber = localStorage.getItem('number') || 1;
    const numberContainer = document.getElementById('number');
    numberContainer.innerText = currentNumber;
});