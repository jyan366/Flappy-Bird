// declare variables

let game = document.getElementById('game-box')
let player = document.getElementById('player')
let tube = document.getElementById('tube')
let gap = document.getElementById('gap')
var jumping = 0;
let counter = 0;
let best = document.getElementById('best')
let score = document.getElementById('score')


// iterate animation

gap.addEventListener('animationiteration', function() {
    let random = -((Math.random()*300)+150);
    gap.style.top = random + "px";
    counter++;
    ScoreBoard();
    if (counter > best.innerText) {
        updateHighScore();
    }
    if (counter >= 2) {
        level2();
        console.log('greater than 2')
    }
});


// gravity interal

setInterval (function() {
    var playerTop = 
    parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if(jumping==0) {
        player.style.top = (playerTop+2)+"px";
    }
    var tubeLeft = parseInt(window.getComputedStyle(tube).getPropertyValue("left"));
    var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
    var pTop = -(500-playerTop);
    if((playerTop>475)||((tubeLeft<80)&&(tubeLeft>-5)&&((pTop<gapTop)||(pTop>gapTop+125)))){
        alert("Game over. Score: "+score.innerText);
        player.style.top = 100 + "px";
        counter=0;
        removeAnimation()
        resetScoreBoard ()
    }
},5);

// jump function

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top")); 
        if((playerTop>5)&&(jumpCount<18)){
            player.style.top = (playerTop-4)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
        if (counter < 2) {
            addAnimation() }
            else {
                removeAnimation ()
                level2() }

    },10);
}


// increment scoreboard

function ScoreBoard () {

    score.innerText = counter;
}

// reset scoreboard 
function resetScoreBoard () { 
    score.innerText = 0;
}


// update high score
function updateHighScore () {
    best.innerText = counter;
}


// remove animation
function removeAnimation() {
    tube.style.animation=0;
    gap.style.animation=0;
}

//add animation normal
function addAnimation() {
    tube.style.animation="";
    gap.style.animation="";
}

// increase speed
function level2() {
tube.style.position="";
gap.style.position="";
tube.style.left="";
gap.style.left="";

tube.style.animation="tube-move 5s infinite linear";
gap.style.animation="tube-move 5s infinite linear";

}

