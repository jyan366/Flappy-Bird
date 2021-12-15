let game = document.getElementById('game-box')
let player = document.getElementById('player')
let tube = document.getElementById('tube')
let gap = document.getElementById('gap')
var jumping = 0;
let counter = 0;


gap.addEventListener('animationiteration', function() {
    let random = -((Math.random()*300)+150);
    gap.style.top = random + "px";
    counter++;
    ScoreBoard();
    
});




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
        tube.style.animation=0;
        gap.style.animation=0;
        
    }
},5);

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
        tube.style.animation="";
        gap.style.animation="";
    },10);
}

function ScoreBoard () {
    let score = document.getElementById('score')
    score.innerText = counter;
}

function HighScore () {
    let highscore = document.getElementById('high-score')
    highscore.innerText = counter.best;
}


