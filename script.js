let currentNumber = localStorage.getItem('number') || 1;
let darkMode = localStorage.getItem('darkMode') === 'true';
let bgColor = '#ffffff'
if (darkMode){
    bgColor = '#121212';
}else{
    bgColor = '#ffffff';
}
let levelsCompleted = localStorage.getItem('levels') || [];
//fade the colour of the background depending on the score
//Levels are as follows:
//  1000 = Bronze
//  2500 = Silver
//  5000 = Gold
//  10000 = Sapphire
//  25000 = Ruby
//  50000 = Emerald
//  100000 = Diamond
function updateBgColor(){
    //bgColor is where the fade starts depending (eg. if the current level is gold and dark mode is on, the fade starts at silver (dark))
    // wantedRed, wantedGreen and wantedBlue are the rgb values at the end of the level
    // startRed, startGreen and startBlue are the rgb values of the start of the level
    // newRed, newGreen and newBlue are the new rgb values after calculations

    //bronze
    if (currentNumber <= 1000){
        percent = currentNumber/1000;
        if (darkMode){
            bgColor = '#121212';
            wantedRed = 120;
            wantedGreen = 62;
            wantedBlue = 4;
        }else{
            bgColor = '#ffffff';
            wantedRed = 205;
            wantedGreen = 127;
            wantedBlue = 50;
        }
        startRed = parseInt(bgColor.slice(1,3),16);
        startGreen = parseInt(bgColor.slice(3,5),16);
        startBlue = parseInt(bgColor.slice(5),16);
        newRed = Math.round(startRed+(percent*(wantedRed-startRed)));
        newGreen = Math.round(startGreen+(percent*(wantedGreen-startGreen)));
        newBlue = Math.round(startBlue+(percent*(wantedBlue-startBlue)));
        newRGB = 'rgb('+newRed.toString()+','+newGreen.toString()+','+newBlue.toString()+')';
        document.body.style.backgroundColor = newRGB;
        bgColor = newRGB;
    //silver
    }else if (currentNumber <= 2500 && currentNumber > 1000){
        percent = (currentNumber-1000)/1500;
        bgColor = '#CD7F32';
        if (darkMode){
            bgColor = '#783E04';
            wantedRed = 148;
            wantedGreen = 148;
            wantedBlue = 148;
        }else{
            wantedRed = 192;
            wantedGreen = 192;
            wantedBlue = 192;
        }
        startRed = parseInt(bgColor.slice(1,3),16);
        startGreen = parseInt(bgColor.slice(3,5),16);
        startBlue = parseInt(bgColor.slice(5),16);
        newRed = Math.round(startRed+(percent*(wantedRed-startRed)));
        newGreen = Math.round(startGreen+(percent*(wantedGreen-startGreen)));
        newBlue = Math.round(startBlue+(percent*(wantedBlue-startBlue)));
        newRGB = 'rgb('+newRed.toString()+','+newGreen.toString()+','+newBlue.toString()+')';
        document.body.style.backgroundColor = newRGB;
        bgColor = newRGB;
    //gold
    }else if (currentNumber <= 5000 && currentNumber > 2500){
        percent = (currentNumber-2500)/2500;
        bgColor = '#C0C0C0';
        if (darkMode){
            bgColor = '#949494';
            wantedRed = 161;
            wantedGreen = 116;
            wantedBlue = 2;
        }else{
            wantedRed = 218;
            wantedGreen = 165;
            wantedBlue = 32;
        }
        startRed = parseInt(bgColor.slice(1,3),16);
        startGreen = parseInt(bgColor.slice(3,5),16);
        startBlue = parseInt(bgColor.slice(5),16);
        newRed = Math.round(startRed+(percent*(wantedRed-startRed)));
        newGreen = Math.round(startGreen+(percent*(wantedGreen-startGreen)));
        newBlue = Math.round(startBlue+(percent*(wantedBlue-startBlue)));
        newRGB = 'rgb('+newRed.toString()+','+newGreen.toString()+','+newBlue.toString()+')';
        document.body.style.backgroundColor = newRGB;
        bgColor = newRGB;
    //sapphire
    }else if (currentNumber <= 10000 && currentNumber > 5000){
        percent = (currentNumber-5000)/5000;
        bgColor = '#DAA520';
        if (darkMode){
            bgColor = '#A17402';
            wantedRed = 7;
            wantedGreen = 55;
            wantedBlue = 122;
        }else{
            wantedRed = 15;
            wantedGreen = 86;
            wantedBlue = 186;
        }
        startRed = parseInt(bgColor.slice(1,3),16);
        startGreen = parseInt(bgColor.slice(3,5),16);
        startBlue = parseInt(bgColor.slice(5),16);
        newRed = Math.round(startRed+(percent*(wantedRed-startRed)));
        newGreen = Math.round(startGreen+(percent*(wantedGreen-startGreen)));
        newBlue = Math.round(startBlue+(percent*(wantedBlue-startBlue)));
        newRGB = 'rgb('+newRed.toString()+','+newGreen.toString()+','+newBlue.toString()+')';
        document.body.style.backgroundColor = newRGB;
        bgColor = newRGB;
    //ruby
    }else if (currentNumber <= 25000 && currentNumber > 10000){
        percent = (currentNumber-10000)/15000;
        bgColor = '#0F56BA';
        if (darkMode){
            bgColor = '#07377A';
            
            wantedRed = 92;
            wantedGreen = 3;
            wantedBlue = 13;
        }else{
            wantedRed = 133;
            wantedGreen = 7;
            wantedBlue = 21;
        }
        startRed = parseInt(bgColor.slice(1,3),16);
        startGreen = parseInt(bgColor.slice(3,5),16);
        startBlue = parseInt(bgColor.slice(5),16);
        newRed = Math.round(startRed+(percent*(wantedRed-startRed)));
        newGreen = Math.round(startGreen+(percent*(wantedGreen-startGreen)));
        newBlue = Math.round(startBlue+(percent*(wantedBlue-startBlue)));
        newRGB = 'rgb('+newRed.toString()+','+newGreen.toString()+','+newBlue.toString()+')';
        document.body.style.backgroundColor = newRGB;
        bgColor = newRGB;
    //emerald
    }else if (currentNumber <= 50000 && currentNumber > 25000){
        percent = (currentNumber-25000)/25000;
        bgColor = '#850716';
        if (darkMode){
            bgColor = '#5C030D';
            wantedRed = 25;
            wantedGreen = 112;
            wantedBlue = 52;
        }else{
            wantedRed = 80;
            wantedGreen = 200;
            wantedBlue = 120;
        }
        startRed = parseInt(bgColor.slice(1,3),16);
        startGreen = parseInt(bgColor.slice(3,5),16);
        startBlue = parseInt(bgColor.slice(5),16);
        newRed = Math.round(startRed+(percent*(wantedRed-startRed)));
        newGreen = Math.round(startGreen+(percent*(wantedGreen-startGreen)));
        newBlue = Math.round(startBlue+(percent*(wantedBlue-startBlue)));
        newRGB = 'rgb('+newRed.toString()+','+newGreen.toString()+','+newBlue.toString()+')';
        document.body.style.backgroundColor = newRGB;
        bgColor = newRGB;
    //diamond
    }else if (currentNumber <= 100000 && currentNumber > 50000){
        percent = (currentNumber-25000)/25000;
        bgColor = '#50C878';
        if (darkMode){
            bgColor = '#197035';
            wantedRed = 185;
            wantedGreen = 242;
            wantedBlue = 255;
        }else{
            wantedRed = 185;
            wantedGreen = 242;
            wantedBlue = 255;
        }
        startRed = parseInt(bgColor.slice(1,3),16);
        startGreen = parseInt(bgColor.slice(3,5),16);
        startBlue = parseInt(bgColor.slice(5),16);
        newRed = Math.round(startRed+(percent*(wantedRed-startRed)));
        newGreen = Math.round(startGreen+(percent*(wantedGreen-startGreen)));
        newBlue = Math.round(startBlue+(percent*(wantedBlue-startBlue)));
        newRGB = 'rgb('+newRed.toString()+','+newGreen.toString()+','+newBlue.toString()+')';
        document.body.style.backgroundColor = newRGB;
        bgColor = newRGB;
    }
}

function updateNumberOnScroll(event) {
    const delta = Math.sign(event.deltaY);
    //this change variable can be edited for testing purposes to make you scroll quicker
    change = 1;
    // Update the number based on scroll direction
    if (delta > 0) {
        currentNumber = parseInt(currentNumber)+change;
    } else if (delta < 0) {
        currentNumber = Math.max(1, currentNumber - change);
    }
    if (currentNumber == 1000 && !(levelsCompleted.includes('bronze'))){alert('Bronze!');levelsCompleted.push('bronze');
    }else if (currentNumber == 2500 && !(levelsCompleted.includes('silver'))){alert('Silver!');levelsCompleted.push('silver');
    }else if (currentNumber == 5000 && !(levelsCompleted.includes('gold'))){alert('Gold!');levelsCompleted.push('gold');
    }else if (currentNumber == 10000 && !(levelsCompleted.includes('sapphire'))){alert('Sapphire!');levelsCompleted.push('sapphire');
    }else if (currentNumber == 25000 && !(levelsCompleted.includes('ruby'))){alert('Ruby!');levelsCompleted.push('ruby');
    }else if (currentNumber == 50000 && !(levelsCompleted.includes('emerald'))){alert('Emerald!');levelsCompleted.push('emerald');
    }else if (currentNumber == 100000 && !(levelsCompleted.includes('diamond'))){alert('Diamond!');levelsCompleted.push('diamond')}
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

    document.getElementById('prestigeButton').style.color = 'white';
    }else{
        document.getElementById('fullscreenButton').style.color = 'black';

        const themeButton = document.getElementById('themeButton');
        themeButton.style.color = 'black';
        themeButton.classList.toggle('flip');
    
        document.getElementById('resetButton').style.color = 'black';
    
        document.getElementById('prestigeButton').style.color = 'black';
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

function prestigeButtonClick() {
    confirm('Prestiges are coming very soon!')
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

    const prestigeButton = document.getElementById('prestigeButton');
    prestigeButton.classList.toggle('dark', darkMode);

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