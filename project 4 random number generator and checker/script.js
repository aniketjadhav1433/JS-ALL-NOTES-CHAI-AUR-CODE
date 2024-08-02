let submit = document.querySelector(".submit");
let userInput = document.querySelector(".guessClass");
let prevGuess = document.querySelector(".prevGuess");
let guessLeft = document.querySelector(".guessesLeft");
let resultPara = document.querySelector(".resultPara");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let message = document.querySelector(".message");
let newgame = document.querySelector(".newGame");
let restartGame = document.querySelector(".restart");

console.log("random", randomNumber);
userInput.focus()

let prevGuessList = [];
let numLeft = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let user = parseInt(userInput.value);
    
    validate(user);
  });
}

let validate = (user) => {
  if (isNaN(user)) {
    userInput.value = "";
    message.innerHTML = `enter a valid number`;
  } else if (user < 1) {
    userInput.value = "";
    message.innerHTML = `enter a number greater than 0`;
  } else if (user > 100) {
    userInput.value = "";
    message.innerHTML = `enter a number less than 100`;
  } else if (numLeft === 10) {
    message.innerHTML = `your changes are over, the number was ${randomNumber} `;
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "");
    playGame = false
    // starnew(user)
  } else {
    prevGuessList.push(user);
    prevGuess.innerHTML = prevGuessList;
    numLeft++;
    guessLeft.innerHTML = `${10 - numLeft}`;
    userInput.value = "";
    check(user);
  }
};

let check = (user) => {
  if (user === randomNumber) {
    message.innerHTML = ` congratulations you won the game <span>start a new game</span>`;
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "");
    playGame = false
    // starnew(user)
  } else if (user > randomNumber) {
    message.innerHTML = "the number is too high";
  } else if (user < randomNumber) {
    message.innerHTML = "the number is too low";
  }

};

let starnew = (user) => {
    newgame.addEventListener("click", (e) => {
    playGame = true
    userInput.value = ""
    randomNumber = Math.floor(Math.random() * 100 + 1);
    userInput.removeAttribute("disabled", "");
    submit.removeAttribute("disabled", "");
    numLeft = 0;
    prevGuessList = [];
    prevGuess.innerHTML = "";
    guessLeft.innerHTML = "";
    message.innerHTML = ""
  });
};

let resart = (user) => {
    restartGame.addEventListener("click", (e) => {
    playGame = true
    userInput.value = ""
    randomNumber = Math.floor(Math.random() * 100 + 1);
    userInput.removeAttribute("disabled", "");
    submit.removeAttribute("disabled", "");
    numLeft = 0;
    prevGuessList = [];
    prevGuess.innerHTML = "";
    guessLeft.innerHTML = "";
    message.innerHTML = ""
  });
};
starnew()
resart()
