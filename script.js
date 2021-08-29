let userScore = 0;
let computerScore = 0
const smallUserWord = "user".fontsize(3).sub();
const smallComputerWord = "computer".fontsize(3).sub();

// get dom elements
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissor_div = document.getElementById('scissor');

function getComputerChoice() {
 const choices = ['rock', 'paper', 'scissor'];
 const randomNumber = Math.floor( Math.random() * 3);
 return choices[randomNumber];
}



function win(user,computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${user}${smallUserWord} covers  ${computer}${smallComputerWord} . You Wins!! 🔥`;
}

function lose(user,computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML =`${computer}${smallComputerWord} covers ${user}${smallUserWord} . You Lose!! 🥺`
}

function tied(user,computer) {
    result_div.innerHTML = `${user}${smallUserWord} equals  ${computer}${smallComputerWord} . It's a Draw!! 🤝`;
}

function game(user_choice) {
    const computerChoice = getComputerChoice();
    const choices = {
        'rock' : 0,
        'paper' : 1,
        'scissor' : 2
    };
    const result = (3 + choices[computerChoice] - choices[user_choice]) % 3 ;
    switch(result) {
        case 0:
            tied(user_choice,computerChoice);
            break;
            case 1:
                lose(user_choice,computerChoice);
                break;
                case 2:
                    win(user_choice,computerChoice);
                    break;
    }
  
}

function main() {
    rock_div.addEventListener('click', ()=>{
        game('rock');
    })
    
    paper_div.addEventListener('click', ()=>{
        game('paper');
    })
    
    scissor_div.addEventListener('click', ()=>{
        game('scissor');
    })
}

function resetScore(){
 userScore_span.innerHTML = 0;
 computerScore_span.innerHTML = 0;
 userScore=0;
 computerScore=0;
 result_div.innerHTML = "Let's start the game!!";
}

main();
