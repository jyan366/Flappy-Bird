// declare variables

let game = document.getElementById('game-box')
let player = document.getElementById('player')
let tube = document.getElementById('tube')
let gap = document.getElementById('gap')
var jumping = 0;
var counter = 0;
let best = document.getElementById('best')
let score = document.getElementById('score')
let startScreen = document.getElementById('start-screen')
let endScreen = document.getElementById('end-screen')
let endScore = document.getElementById('end-score')
let scoreValue = score.innerHTML
const jumpSound = new Audio("assets/audio/jump-sound.wav");
const scoreUp = new Audio("assets/audio/score-up.mp3");
const gameOverSound = new Audio("assets/audio/sad-trombone.mp3");
const highScoreSound = new Audio("assets/audio/highscore-sound.mp3");
let welcomeText= document.getElementById('welcome-text')


// iterate animation

gap.addEventListener('animationiteration', function() {
    let random = -((Math.random()*300)+150);
    gap.style.top = random + "px";
    counter++;
    ScoreBoard();
    if (counter == best.innerText) {
        highScoreSound.play();
        score.style.color='gold';
        score.style.fontSize="250%";
        score.style.position='';
    }
    if (counter > best.innerText) {
        updateHighScore();
    }
    scoreUp.play();
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
        player.style.top = 100 + "px";
        jumping=1
        gameOverSound.play()
        removeAnimation()
        showEndScreen()
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
        addAnimation(); 
        jumpSound.play(); 

        
    },10);
}

// game over






// Stop animation and gravity
function stopAll() {
    removeAnimation();
    playerTop = 100;
}


// hide start Screen

function hideStartScreen() {
startScreen.style.display ='none';
jumping=1
player.style.top = 100 + "px";
endScreen.style.display ='none';
removeAnimation()
resetScoreBoard()
}

// show start Screen

function showStartScreen() {
    startScreen.style.display ='block';
    endScreen.style.display ='none'
    counter=0;
    score.style.color='';
    score.style.fontSize="";
    }


// show end Screen

function showEndScreen() {
    removeAnimation()
    endScreen.style.display ='block';
    endScore.innerText = `Game over. Score: ${score.innerHTML}`;
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
    tube.style.animation='none';
    gap.style.animation='none';
}

//add animation normal
function addAnimation() {
    tube.style.animation="";
    gap.style.animation="";
}


// increase speed
function level2() {
    tube.style.left='1000px';
    tube.style.left='1000px';
    removeAnimation();
    tube.style.animation='tube-move 1500ms infinite linear';
    gap.style.animation='tube-move 1500ms infinite linear';
}

function playJumpSound() {
jumpSound.play()
}
