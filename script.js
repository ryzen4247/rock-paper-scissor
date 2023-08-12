const choices = ["rock", "paper", "scissors"];
let player1Score = 0;
let player2Score = 0;

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return "It's a tie!";
    } else if (
        (player1Choice === "rock" && player2Choice === "scissors") ||
        (player1Choice === "paper" && player2Choice === "rock") ||
        (player1Choice === "scissors" && player2Choice === "paper")
    ) {
        player1Score++;
        return "Player 1 wins!";
    } else {
        player2Score++;
        return "Player 2 wins!";
    }
}

function updateScore() {
    document.getElementById("player1-score").textContent = player1Score;
    document.getElementById("player2-score").textContent = player2Score;
}

document.querySelectorAll(".choice").forEach(choiceButton => {
    choiceButton.addEventListener("click", () => {
        const player1Choice = choiceButton.id;
        const player2Choice = getRandomChoice();
        const resultMessage = playRound(player1Choice, player2Choice);
        
        document.getElementById("result-message").textContent = resultMessage;
        updateScore();
    });
});
