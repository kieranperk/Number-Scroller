// Main Variables
let currentNumber = localStorage.getItem("number") || 1;
let scrollsPerScroll = localStorage.getItem("sps") || 1;
let scrollsPerScrollLevel = localStorage.getItem("spsl") || 0; // index in upgades array
let autoScrollerSPS = localStorage.getItem("assps") || 0;
let autoScrollerLevel = localStorage.getItem("asl") || 0;
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
upgrades = [1000, 5000, 10000, 20000, 40000, 80000]
changes = [2, 4, 8, 15, 30, 50];
function upgradeButtonClick() {
    if (currentNumber >= upgrades[scrollsPerScrollLevel]) {
        currentNumber = parseInt(currentNumber);
        scrollsPerScroll = changes[scrollsPerScrollLevel];
        scrollsPerScrollLevel += 1;
        localStorage.setItem("spsl", scrollsPerScrollLevel.toString());
        localStorage.setItem("sps", scrollsPerScroll.toString());
        currentNumber -= upgrades[scrollsPerScrollLevel - 1];
        updateNumberOnScroll();
        updateUpgradeCost();
        showUpgradeConfirmation("Scrolls per scroll upgraded!");
    } else if (scrollsPerScrollLevel >= upgrades.length) {
        alert("You've already hit the max level of upgrades!")
    } else {
        alert(`You need ${upgrades[scrollsPerScrollLevel]} scrolls to upgrade. Keep scrolling to earn more!`);
    }
}

autoScrollerUpgrades = [1000, 5000, 10000, 20000, 40000, 80000]
autoScrollerChanges = [10, 20, 40, 80, 150, 300]
function upgradeAutoscroller() {
    if (currentNumber >= autoScrollerUpgrades[autoScrollerLevel]) {
        currentNumber = parseInt(currentNumber);
        autoScrollerSPS = autoScrollerChanges[autoScrollerLevel];
        autoScrollerLevel += 1;
        localStorage.setItem("asl", autoScrollerLevel.toString());
        localStorage.setItem("assps", autoScrollerSPS.toString());
        currentNumber -= autoScrollerUpgrades[autoScrollerLevel - 1];
        updateNumberOnScroll();
        showUpgradeConfirmation("AutoScroller upgraded!");
    } else if (autoScrollerLevel >= autoScrollerUpgrades.length) {
        alert("You've already hit the max level of upgrades!")
    } else {
        alert(`You need ${autoScrollerUpgrades[autoScrollerLevel]} scrolls to upgrade the autoscroller. Keep scrolling to earn more!`);
    }
}

function updateUpgradeCost() {
    const upgradeCostElement = document.getElementById("upgradeCostText");
    spsamounttext = `🖱️ Scrolls per Scroll: ${scrollsPerScroll}`
    if (scrollsPerScrollLevel >= upgrades.length) {
        spsamounttext = `🖱️ SPS Amount: ${scrollsPerScroll} (MAX)`
    }
    asamounttext = `🤖 AutoScroller: ${autoScrollerSPS}`
    if (autoScrollerLevel >= autoScrollerUpgrades.length) {
        asamounttext = `🤖 AutoScroller: ${autoScrollerSPS} (MAX)`
    }
    upgradeCostElement.innerText = `${spsamounttext}\n${asamounttext}`;
}

function showUpgradeConfirmation(message) {
    const upgradeCostElement = document.getElementById("upgradeCostText");
    upgradeCostElement.innerText = message;
    setTimeout(() => {
        updateUpgradeCost();
    }, 2000);
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
      "autoscrollerButton",
      "upgradeCostText",
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
        autoScrollerSPS = 0
        autoScrollerLevel = 0

        clearInterval(autoscrollerInterval);

        const numberContainer = document.getElementById("number");
        numberContainer.innerText = currentNumber;

        localStorage.setItem("number", currentNumber);
        localStorage.setItem("sps", 1);
        localStorage.setItem("spsl", 0);
        localStorage.setItem("asl", 0);
        localStorage.setItem("assps", 0);

        updateNumberOnScroll();
        updateUpgradeCost();

        setTimeout(function() {
            autoscrollerInterval = setInterval(handleAutoscroller, 1000);
        }, 2000);
    }
}

// Event Listeners

// On-Load
window.addEventListener("load", function () {
    // Load variables
    currentNumber = parseInt(localStorage.getItem("number")) || 1;
    scrollsPerScroll = parseInt(localStorage.getItem("sps")) || 1;
    scrollsPerScrollLevel = parseInt(localStorage.getItem("spsl")) || 0;
    autoScrollerSPS = parseInt(localStorage.getItem("assps")) || 0;
    autoScrollerLevel = parseInt(localStorage.getItem("asl")) || 0;
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

// Loops

// Autoscroller logic
function handleAutoscroller() {
    if (autoScrollerLevel > 0) {
        currentNumber += autoScrollerSPS;
        updateNumberOnScroll()
        localStorage.setItem("number", currentNumber);
    }
}

// Set up the autoscroller loop
let autoscrollerInterval = setInterval(handleAutoscroller, 1000);

document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        clearInterval(autoscrollerInterval);
    } else {
        autoscrollerInterval = setInterval(handleAutoscroller, 1000);
    }
});
