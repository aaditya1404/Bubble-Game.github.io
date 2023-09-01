var timer = 60;
var score = 0;
var hitvalue = 0;

function increasescore() {
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}

function hitval() {
    hitvalue = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").innerHTML = hitvalue;
}

function createBubble() {
    var clutter = "";
    for (var i = 1; i <= 85; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer() {
    var timerinterval = setInterval(function () {
        if (timer >= 0) {
            document.querySelector("#timervalue").innerHTML = timer;
            timer--;
        }
        else {
            clearInterval(timerinterval);
            document.querySelector("#pbtm").innerHTML = `<h2>Your final score is ${score}</h2> <br/> <a href="game.html">Restart</a> <br/> <a href="index.html">Home</a>`
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === hitvalue) {
        increasescore();
        hitval();
        createBubble();
    }
})

runTimer();
createBubble();
hitval();


