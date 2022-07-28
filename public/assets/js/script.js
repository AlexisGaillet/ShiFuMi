const playerChoice = document.getElementById('playerChoice');
let paragraphResult = document.getElementById('paragraphResult');
let paragraphIaChoice = document.getElementById('paragraphIaChoice');
let paragraphPlayerValue = document.getElementById('paragraphPlayerValue');

Calc = (x) => {
    let playerScore = document.getElementById('playerScore');
    let iaScore = document.getElementById('iaScore');

    if (x == 1) {
        paragraphPlayerValue.innerHTML = ('👊')
    } else if (x == 2) {
        paragraphPlayerValue.innerHTML = ('✋')
    } else {
        paragraphPlayerValue.innerHTML = ('✌️')
    }
    
    const iaChoice = Math.floor(Math.random() * 3) + 1;
    if (iaChoice == 1) {
        paragraphIaChoice.innerHTML = ('👊');
        
        if (x == 2) {
            paragraphResult.innerHTML = ('Victoire !');
            playerScore.innerHTML++;
            playerScore = playerScore.innerHTML;
        } else if (x == 3) {
            paragraphResult.innerHTML = ('Defaite :(');
            iaScore.innerHTML++;
            iaScore = iaScore.innerHTML;
        } else {
            paragraphResult.innerHTML = ('Egalité :/');
        }



    } else if (iaChoice == 2) {
    paragraphIaChoice.innerHTML = ('✋');

        if (x == 3) {
            paragraphResult.innerHTML = ('Victoire !');
            playerScore.innerHTML++;
            playerScore = playerScore.innerHTML;
        } else if (x == 1) {
            paragraphResult.innerHTML = ('Defaite :(');
            iaScore.innerHTML++;
            iaScore = iaScore.innerHTML;
        } else {
            paragraphResult.innerHTML = ('Egalité :/');
        }



    } else {
    paragraphIaChoice.innerHTML = ('✌️');

        if (x == 1) {
            paragraphResult.innerHTML = ('Victoire !');
            playerScore.innerHTML++;
            playerScore = playerScore.innerHTML;
        } else if (x == 2) {
            paragraphResult.innerHTML = ('Defaite :(');
            iaScore.innerHTML++;
            iaScore = iaScore.innerHTML;
        } else {
            paragraphResult.innerHTML = ('Egalité :/');
        }
    }
}



document.getElementById('Pierre').addEventListener('click', () => {
    Calc(1);
})

document.getElementById('Feuille').addEventListener('click', () => {
    Calc(2);
})

document.getElementById('Ciseaux').addEventListener('click', () => {
    Calc(3);
})