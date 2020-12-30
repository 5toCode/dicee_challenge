let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDice1 = "images/dice" + randomNumber1 + ".png";
let randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDice1);
document.querySelector(".img2").setAttribute("src", randomDice2);

function determineWinner() {
  let winner = "";
  if (randomNumber1 > randomNumber2) {
    winner = "Player 1";
    document.querySelector("h1").textContent = winner + " wins!"
  } else if (randomNumber1 < randomNumber2) {
    winner = "Player 2";
    document.querySelector("h1").textContent = winner + " wins!"
  } else {
    winner = "Draw";
    document.querySelector("h1").textContent = "Draw!"
  }
  return winner;
}

determineWinner();
