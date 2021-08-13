const computerSelection = computerPlay();

function computerPlay(result){
  let rockpaperscissors = ["Rock", "Paper","Scissors"];
return result = rockpaperscissors[Math.floor(Math.random()*rockpaperscissors.length )];
}

let playerCounter = 0;
let computerCounter = 0;


  function playRound(playerSelection,computerSelection){

    if (playerSelection == "rock" || computerSelection == "Paper"){
      computerCounter++;
      return "You lose, Paper beats Rock!";
      
    } else if (playerSelection == "rock" || computerSelection == "Scissors"){
     playerCounter++;
      return "You win! Rocks beats Scissors!";
    } else if (playerSelection == "scissors" || computerSelection == "Paper"){
      playerCounter++;
      return "You win! Scissors beats Paper!";
    } else if (playerSelection == "scissors" || computerSelection == "Rock"){
      computerCounter++;
      return "You lose! Rock beats Scissors!";
    } else if (playerSelection == "paper" || computerSelection == "Scissors"){
      computerCounter++;
      return "You lose! Scissors beats Paper!";
    } else if (playerSelection == "paper" || computerSelection == "Rock"){
      playerCounter++;
      return "You win! Paper beats Rock!";
    } else{
      return "It's a draw! Play again.";
    }
  }

  function game(){
    for (let i = 0; i < 5 ; i++){
      let playerSelection = prompt("Choose Rock, Paper or Scissors!");
      playerSelection = playerSelection.toLowerCase();
   console.log(playRound(playerSelection,computerSelection));
    }
    if (playerCounter>computerCounter){
      return `You win! Final score: ${playerCounter} to ${computerCounter}`;
    }
    else{
      return `You lose! Final score: ${computerCounter} to ${playerCounter}`;
    }
  }
  game();


