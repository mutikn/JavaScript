const elements = ["Rock", "Paper", "Scissors"];

const score = {
    win: 0,
    lose: 0,
    draw: 0
};

function getRandomElement() {
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
}

function winScore() {
    score.win += 1;
}

function loseScore() {
    score.lose += 1;
}

function drawScore() {
    score.draw += 1;
}

function resetScore() {
    score.win = 0;
    score.lose = 0;
    score.draw = 0;
    alert(`Your Score Win ${score.win}, Lose ${score.lose}, Draw ${score.draw}`)
}

function rockPaperScissors(element) {
    const randomElement = getRandomElement();
    
    if (element === randomElement) {
        drawScore();
        alert(`Computer's choice: ${randomElement}, Draw.\nYour score: Win ${score.win}, Lose ${score.lose}, Draw ${score.draw}`);
    } else if (element === 'Rock' && randomElement === 'Paper') {
        loseScore();
        alert(`Computer's choice: Paper, You lose.\nYour score: Win ${score.win}, Lose ${score.lose}, Draw ${score.draw}`);
    } else if (element === 'Rock' && randomElement === 'Scissors') {
        winScore();
        alert(`Computer's choice: Scissors, You win!\nYour score: Win ${score.win}, Lose ${score.lose}, Draw ${score.draw}`);
    } else if (element === 'Paper' && randomElement === 'Rock') {
        winScore();
        alert(`Computer's choice: Rock, You win!\nYour score: Win ${score.win}, Lose ${score.lose}, Draw ${score.draw}`);
    } else if (element === 'Paper' && randomElement === 'Scissors') {
        loseScore();
        alert(`Computer's choice: Scissors, You lose.\nYour score: Win ${score.win}, Lose ${score.lose}, Draw ${score.draw}`);
    } else if (element === 'Scissors' && randomElement === 'Rock') {
        loseScore();
        alert(`Computer's choice: Rock, You lose.\nYour score: Win ${score.win}, Lose ${score.lose}, Draw ${score.draw}`);
    } else if (element === 'Scissors' && randomElement === 'Paper') {
        winScore();
        alert(`Computer's choice: Paper, You win!\nYour score: Win ${score.win}, Lose ${score.lose}, Draw ${score.draw}`);
    }
}
