let currentNumber = localStorage.getItem('number') || 1;
let scrollsPerScroll = 1
let scrollsPerScrollLevel = 0 // index in upgades array
let autoScrollerLevel = 0
let darkMode = localStorage.getItem('darkMode') === 'true';
let bgColor = '#ffffff'
if (darkMode){
    bgColor = '#121212';
}else{
    bgColor = '#ffffff';
}

// Stats:
// Scrolls per scroll - Change in number in every scroll
// Scrolls per second - Change in number per second of automatic scrolls

// Possible Shop Prices
// 5000 -> +1 Scrolls per scroll (2 scrolls per scroll)
// 10,000 -> +2 Scrolls per scroll (4 scrolls per scroll)
// 20,000 -> Autoscroller (5 Scroll /second)
// 20,000 -> +4 Scrolls per scroll (8 scrolls per scroll)
// 50,000 -> +8 Scrolls per scroll (16 scrolls per scroll)

function upgradeButtonClick() {
    upgrades = [5000, 10000, 20000, 50000]
    changes = [1, 2, 4, 8]
    if (currentNumber >= upgrades[scrollsPerScrollLevel]) {
        currentNumber -= upgrades[scrollsPerScrollLevel]
        scrollsPerScroll += changes[scrollsPerScrollLevel]
        scrollsPerScrollLevel +=1
        updateNumberOnScroll()
    }
}

function updateNumberOnScroll(event) {
    if (event != null) {
        const delta = Math.sign(event.deltaY);
        // Update the number based on scroll direction
        if (delta > 0) {
            currentNumber = parseInt(currentNumber)+scrollsPerScroll;
        } else if (delta < 0) {
            currentNumber = Math.max(1, currentNumber - scrollsPerScroll);
        }
    }    
    const numberContainer = document.getElementById('number');
    numberContainer.innerText = currentNumber;
    numberContainer.className = 'numberscrolling';
    setTimeout(() => {
        numberContainer.className = 'number';
    }, 500);
    updateBgColor()
    // Save the number to local storage
    localStorage.setItem('number', currentNumber);
    localStorage.setItem('levels', levelsCompleted);
}

function toggleTheme() {
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-theme');
    darkMode = !darkMode;
    bgColor = document.body.style.backgroundColor
    if (darkMode){
    document.getElementById('fullscreenButton').style.color = 'white';

    const themeButton = document.getElementById('themeButton');
    themeButton.style.color = 'white';
    themeButton.classList.toggle('flip');

    document.getElementById('resetButton').style.color = 'white';

    document.getElementById('upgradeButton').style.color = 'white';
    }else{
        document.getElementById('fullscreenButton').style.color = 'black';

        const themeButton = document.getElementById('themeButton');
        themeButton.style.color = 'black';
        themeButton.classList.toggle('flip');
    
        document.getElementById('resetButton').style.color = 'black';
    
        document.getElementById('upgradeButton').style.color = 'black';
    }
    // Save the dark mode state to local storage
    localStorage.setItem('darkMode', darkMode);
    updateBgColor()
}

function fullscreenButtonClick() {
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
            elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
      }
}

function resetCounter() {
    if (confirm('Are you sure you want to reset the counter?')) {
        if (darkMode){
            bgColor = '#121212';
        }else{
            bgColor = '#ffffff';
        }
        currentNumber = 1;
        const numberContainer = document.getElementById('number');
        numberContainer.innerText = currentNumber;
        localStorage.setItem('number', currentNumber);
        levelsCompleted = [];
        localStorage.setItem('levels', levelsCompleted);
        updateBgColor();
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
    themeButton.classList.toggle('flip', darkMode);

    const resetButton = document.getElementById('resetButton');
    resetButton.classList.toggle('dark', darkMode);

    const upgradeButton = document.getElementById('upgradeButton');
    upgradeButton.classList.toggle('dark', darkMode);

    const fullscreenButton = document.getElementById('fullscreenButton');
    fullscreenButton.classList.toggle('dark', darkMode);
});

// Check if the device is a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Display warning message if the device is a mobile device
document.addEventListener('DOMContentLoaded', function() {
    const warningMessage = document.getElementById('warningMessage');
    
    if (isMobileDevice()) {
        warningMessage.style.display = 'flex';
    } else {
        warningMessage.style.display = 'none';
    }
})