const elements = ["Rock", "Paper", "Scissors"];


function getRandomElement(){
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
}


function rockPaperScissors(element){
    const randomElement = getRandomElement(element)
    if (element === randomElement){
        alert(`Computers choice ${element}, Draw`);
    }
    else if (element === 'Rock' & randomElement === 'Paper'){
        alert(`Computers choice: Paper, You lose`);
    }
    else if (element === 'Rock' & randomElement === 'Scissors'){
        alert(`Computers choice: Scissors, You win`);
    }
    else if (element === 'Paper' & randomElement === 'Rock'){
        alert('Computers choice: Rock, You win');
    }
    else if (element === 'Paper' & randomElement === 'Scissors'){
        alert(`Computers choice: Scissors, You lose`);
    }
    else if (element === 'Scissors' & randomElement === 'Rock'){
        alert(`Computers choice: Rock, You lose`);
    }
    else if (element === 'Scissors' & randomElement === 'Paper'){
        alert(`Computers choice: Paper, You win`);
    }
}