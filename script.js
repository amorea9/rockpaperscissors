window.addEventListener("load", start);
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
let computer = "";
let player = "";

function start() {
  console.log("game is started");

  playerChoice();
}

// event.target.removeEventListener("click", function); -> to remove event listener important to remember

function playerChoice() {
  console.log("player has made a choice");
  document.querySelector(".rock").addEventListener("click", playerRock);
  document.querySelector(".paper").addEventListener("click", playerPaper);
  document.querySelector(".scissors").addEventListener("click", playerScissors);
}
function playerRock() {
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  player = "rock";
  player1.classList.value = "";
  player1.classList.add("player");
  player1.classList.add("rock");
  computerChoice();
  console.log(player + "player");
  //if player rock remove other classes
}
function playerPaper() {
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  player = "paper";
  player1.classList.value = "";
  player1.classList.add("player");
  player1.classList.add("paper");
  computerChoice();
  console.log(player + "player");
}
function playerScissors() {
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  player = "scissors";
  player1.classList.value = "";
  player1.classList.add("player");
  player1.classList.add("scissors");
  computerChoice();
  console.log(player + "player");
}

function computerChoice() {
  console.log("computer has made a choice");
  console.log("generate random number");
  let rndNo = Math.floor(Math.random() * 3 + 1);
  console.log(rndNo);

  if (rndNo === 1) {
    computer = "rock";
    player2.classList.value = "";
    player2.classList.add("player");
    player2.classList.add("rock");
    showAnimation();
    console.log(computer + "computer");
  }
  if (rndNo === 2) {
    computer = "paper";
    player2.classList.value = "";
    player2.classList.add("player");
    player2.classList.add("paper");
    showAnimation();
    console.log(computer + "computer");
  }
  if (rndNo === 3) {
    computer = "scissors";
    player2.classList.value = "";
    player2.classList.add("player");
    player2.classList.add("scissors");
    showAnimation();
    console.log(computer + "computer");
  }
  console.log(computer);
}

function showAnimation() {
  console.log("animation underway");
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", determineWinner);
}

function determineWinner() {
  console.log("winner has been determined");

  player1.classList.remove("shake");
  player2.classList.remove("shake");

  if ((computer === "paper" && player === "scissors") || (computer === "rock" && player === "paper") || (computer === "scissors" && player === "rock")) {
    //player wins
    showWin();
  }
  if ((computer === "paper" && player === "rock") || (computer === "rock" && player === "scissors") || (computer === "scissors" && player === "paper")) {
    //player loses
    showLose();
  }
  if (computer === player) {
    //(computer === "paper" && player === "paper") || (computer === "rock" && player === "rock") || (computer === "scissors" && player === "scissors")
    //player tie
    showTie();
  }
}

function showWin() {
  console.log("you win");
  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  console.log("you lose");
  document.querySelector("#lose").classList.remove("hidden");
}

function showTie() {
  console.log("it's a tie");
  document.querySelector("#draw").classList.remove("hidden");
}
