// Main Variables
let currentNumber = localStorage.getItem("number") || 1;
let scrollsPerScroll = localStorage.getItem("sps") || 1;
let scrollsPerScrollLevel = localStorage.getItem("spsl") || 0; // index in upgades array
let darkMode = localStorage.getItem("darkMode") || "true";

// Scrolling

function updateNumberOnScroll(event) {
    if (event != null) {
        const delta = Math.sign(event.deltaY);
        // Update the number based on scroll direction
        if (delta > 0) {
            currentNumber = parseInt(currentNumber) + parseInt(scrollsPerScroll);
        } else if (delta < 0) {
            currentNumber = Math.max(1, parseInt(currentNumber) - parseInt(scrollsPerScroll));
        }
    }
    const numberContainer = document.getElementById("number");
    numberContainer.innerText = currentNumber;
    numberContainer.className = "numberscrolling";
    setTimeout(() => {
        numberContainer.className = "number";
    }, 500);
    localStorage.setItem("number", currentNumber);
}

// Upgrade Shop
upgrades = [5000, 10000, 20000, 50000];
changes = [1, 2, 4, 8];
function upgradeButtonClick() {
    if (currentNumber >= upgrades[scrollsPerScrollLevel]) {
        currentNumber = parseInt(currentNumber); // Convert to integer
        scrollsPerScroll += changes[scrollsPerScrollLevel];
        scrollsPerScrollLevel += 1;
        localStorage.setItem("spsl", scrollsPerScrollLevel.toString()); // Convert to string before saving
        localStorage.setItem("sps", scrollsPerScroll.toString()); // Convert to string before saving
        currentNumber -= upgrades[scrollsPerScrollLevel - 1]; // Subtract the upgrade cost
        updateNumberOnScroll(); // Update the displayed number
        updateUpgradeCost(); // Update the displayed upgrade cost
    } else {
        alert("You don't have enough scrolls to upgrade. Keep scrolling to earn more!");
    }
}

function updateUpgradeCost() {
    const upgradeCostElement = document.getElementById("upgradeCost");
    if (scrollsPerScrollLevel < upgrades.length) {
        upgradeCostElement.innerText = `Next Upgrade Cost: ${upgrades[scrollsPerScrollLevel]}`;
    } else {
        upgradeCostElement.innerText = "Max Level Reached";
    }
}

// Buttons

function toggleTheme() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-theme");
    darkMode = !darkMode;
    localStorage.setItem("darkMode", darkMode);
    updateButtonStyles();
}

function updateButtonStyles() {
    const buttonIds = [
      "fullscreenButton",
      "themeButton",
      "resetButton",
      "upgradeButton",
    ];
    buttonIds.forEach((id) => {
      const button = document.getElementById(id);
      if (button) {
        button.style.color = darkMode ? "white" : "black";
        if (id === "themeButton") {
          button.classList.toggle("flip", darkMode);
        }
      }
    });
}

function fullscreenButtonClick() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(); /* Safari */
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen(); /* IE11 */ 
    }
}

function resetCounter() {
    if (confirm("Are you sure you want to reset the counter?")) {
        currentNumber = 1;
        scrollsPerScroll = 1
        scrollsPerScrollLevel = 0

        const numberContainer = document.getElementById("number");
        numberContainer.innerText = currentNumber;

        localStorage.setItem("number", currentNumber);
        localStorage.setItem("sps", 1);
        localStorage.setItem("spsl", 0);

        updateNumberOnScroll(); // Update the displayed number
        updateUpgradeCost(); // Update the displayed upgrade cost
    }
}

// Event Listeners

// On-Load
window.addEventListener("load", function () {
    // Load variables
    currentNumber = parseInt(localStorage.getItem("number")) || 1;
    scrollsPerScroll = parseInt(localStorage.getItem("sps")) || 1;
    scrollsPerScrollLevel = parseInt(localStorage.getItem("spsl")) || 0;
    darkMode = localStorage.getItem("darkMode") === "true";
    // Load number
    const numberContainer = document.getElementById("number");
    numberContainer.innerText = currentNumber;
    // Load dark mode
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-theme", darkMode);
    updateButtonStyles();
    updateUpgradeCost();
});
// Scroll
window.addEventListener("wheel", updateNumberOnScroll);
window.addEventListener('scroll', handleScroll);