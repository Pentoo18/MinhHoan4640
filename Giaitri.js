const choices = ["Kéo", "Búa", "Bao"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playgame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  console.log(computerChoice);

  if (playerChoice === computerChoice) {
    result = " Huề Nhau Rùi Nhen !";
  } else {
    switch (playerChoice) {
      case "Búa":
        result = computerChoice === "Kéo" ? "BẠN THẮNG !" : "BẠN THUA !";
        break;

      case "Bao":
        result = computerChoice === "Búa" ? "BẠN THẮNG !" : "BẠN THUA !";
        break;

      case "Kéo":
        result = computerChoice === "Bao" ? "BẠN THẮNG !" : "BẠN THUA !";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greentext", "redtext");

  switch (result) {
    case "BẠN THẮNG !":
      resultDisplay.classList.add("greentext");
      break;
    case "BẠN THUA !":
      resultDisplay.classList.add("redtext");
      break;
  }
}
