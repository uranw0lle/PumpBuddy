//Buttons
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const clock = document.getElementById("clock");
const setListTable = document.getElementById("set-list");

const statusTraining = document.getElementById("clock-status");

//Time & Sets
const secondsWatch = document.getElementById("seconds");
const minutesWatch = document.getElementById("minutes");
const sets = document.getElementById("set");

let seconds = 0;
let minutes = 0;
let Interval = 0;

//Counting the Sets
let set = 0;

let doubleClickIntercept = true;

let setList = []
// End of variables //

//Start Button. It starts the intervall and executes stopWatch every 1 second
startButton.addEventListener('click', startCounter);

//Pause Button. Pauser Timer starts
pauseButton.addEventListener('click', pauseCounter);

//Stop and reset everything
resetButton.addEventListener('click', resetCounter);

//Start at touch and stop at second touch / Etwas zu empfindlich

// clock.addEventListener('touchstart', () => {
//     if (doubleClickIntercept === true) {
//         startCounter();
//         doubleClickIntercept = false;
//     } else {
//         pauseCounter();
//     }
// });

//Start the Counter and increment set + 1
function startCounter() {

    clearInterval(Interval);
    Interval = setInterval(stopWatch, 1000)
    statusTraining.innerHTML = "Pump";

    seconds = 0;
    minutes = 0;

    secondsWatch.innerHTML = "0" + 0;
    minutesWatch.innerHTML = "0" + 0;

    set++;
    sets.innerHTML = set;

}

// Pauses counter and starts "Pause" timer
function pauseCounter() {

    addSetsToHTML();
    clearInterval(Interval);
    statusTraining.innerHTML = "Pause";
    seconds = 0;
    minutes = 0;

    secondsWatch.innerHTML = "0" + 0;
    minutesWatch.innerHTML = "0" + 0;

    Interval = setInterval(stopWatch, 1000)
}

// Reset Counter and set all to 0
function resetCounter() {

    clearInterval(Interval);
    seconds = 0;
    minutes = 0;

    statusTraining.innerHTML = "Start";
    secondsWatch.innerHTML = "0" + 0;
    minutesWatch.innerHTML = "0" + 0;

    set = 0;
    sets.innerHTML = set;

    resetList()
}

//Stop Watch Funktion
function stopWatch() {
    seconds++;

    if (seconds <= 9) {
        secondsWatch.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
        secondsWatch.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        minutesWatch.innerHTML = "0" + minutes;
        seconds = 0;
        secondsWatch.innerHTML = "0" + 0;

    }

    if (minutes > 9) {
        minutesWatch.innerHTML = minutes;
    }

}

//Add Set List to the HTML doc
function addSetsToHTML() {
    setList.push(`Set ${setList.length + 1}: ${minutes}:${seconds}`);

    let li = document.createElement('LI');
    li.innerHTML = setList[setList.length - 1];
    setListTable.appendChild(li);
}

//Reset the List if Reset Button was fired
function resetList() {
    setList = [];
    setListTable.innerHTML = '';
}