var pcOptions = ["R", "P", "S"];
var wins = 0;
var losses = 0;
var ties = 0;

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

showPrompt();

function showPrompt() {
  var playerChoice = prompt("Enter R, P, or S");
  var playerChoice = playerChoice.toUpperCase();
  var pcChoice = pcOptions[randomNumber()];
  console.log(playerChoice);
  if (
    playerChoice == "R" ||
    playerChoice == "P" ||
    playerChoice == "S" ||
    playerChoice == "CLOSE"
  ) {
    if (playerChoice === pcChoice) {
      window.alert("It's a tie");
      console.log("It's a tie");
      ties++;
      window.alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
    } else if (playerChoice == "R" && pcChoice == "S") {
      window.alert("You Win");
      console.log("You Win");
      wins++;
      window.alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
    } else if (playerChoice == "S" && pcChoice == "P") {
      window.alert("You Win");
      console.log("You Win");
      wins++;
      window.alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
    } else if (playerChoice == "P" && pcChoice == "R") {
      window.alert("You Win");
      console.log("You Win");
      wins++;
      window.alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
    } else {
      window.alert("You Lose");
      console.log("You Lose");
      losses++;
      window.alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
    }
  } else {
    window.alert("Must pick a correct option");
    return showPrompt();
  }
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  console.log("Ties: " + ties);

  if (playerChoice !== "CLOSE") {
    showPrompt();
  } else {
    console.log("Closed");
  }
}
