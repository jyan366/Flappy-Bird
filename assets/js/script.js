let game = document.getElementById('game-box')
let player = document.getElementById('payer')
let tube = document.getElementById('tube')
let gap = document.getElementById('gap')


gap.addEventListener('animationiteration', function() {
    let random = -((Math.random()*300)+150);
    gap.style.top = random + "px";
});