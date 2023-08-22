const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Dis')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Dis')  
}

const resetButton = document.querySelector('#reset');
const select = document.querySelector('#select');
let winning = 3;
let gameOver = false;

function updateScore(player, opponent){
    if(!gameOver){
        player.score += 1;
        if(player.score === winning){
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    player.display.textContent = player.score;
}
}

p1.button.addEventListener('click', function (){
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function (){
    updateScore(p2, p1);
})

select.addEventListener('change', function(){
   winning = parseInt(this.value);
   reset();
})

resetButton.addEventListener('click', reset)

    function reset(){
    gameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
