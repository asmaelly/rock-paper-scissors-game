// Function to get a random choice for the computer
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length); // Get a random index
    return options[randomIndex]; // Return the computer's choice
  }
  
  // Function to check if the player won the round
  function hasPlayerWonTheRound(player, computer) {
    // Player wins under these conditions:
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }
  
  // Variables to store the scores
  let playerScore = 0;
  let computerScore = 0;
  
  // Function to determine the result of a round
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult(); // Get computer's choice
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      // Player wins
      playerScore++; // Increment player's score
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      // Tie condition
      return `It's a tie! Both chose ${userOption}`;
    } else {
      // Computer wins
      computerScore++; // Increment computer's score
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  // DOM elements for updating scores and messages
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  // Function to display the results and update the scores
  function showResults(userOption) {
    // Display the round results
    roundResultsMsg.innerText = getRoundResults(userOption);
  
    // Update the scores 
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    // Check if either player or computer has reached the winning score
    if (playerScore === 3 || computerScore === 3) {
      // Display the winner message
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } has won the game!`;
  
      // Show the reset button and hide the options
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  }
  
  // Function to reset the game to its initial state
  function resetGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
  
    // Reset scores 
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
  
    // Hide the reset button and show the options for playing
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
  
    // Clear the messages
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
  }
  
  // Event listener for the reset button
  resetGameBtn.addEventListener("click", resetGame);
  
  // Event listeners for the Rock, Paper, and Scissors buttons
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  

  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });
  