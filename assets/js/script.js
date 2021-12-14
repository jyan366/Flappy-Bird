let game = document.getElementById('game-box')
let player = document.getElementById('player')
let tube = document.getElementById('tube')
let gap = document.getElementById('gap')


gap.addEventListener('animationiteration', function() {
    let random = -((Math.random()*300)+150);
    gap.style.top = random + "px";
});

setInterval (function() {
    var playerTop = 
    parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    {
        player.style.top = (playerTop+4)+"px";
    }
},10);