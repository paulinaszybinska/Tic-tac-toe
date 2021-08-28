const fieldsElements = document.querySelectorAll(".board__item");
const panel = document.querySelector(".panel");
const button = document.querySelector(".reset-button");

let fields;
let activePlayer;
let gameActive;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const displayWinMessage = () => {
  panel.innerText = `Congratulations ${activePlayer}. You won!`;
};

const displayTieMessage = () => {
  panel.innerText = `A tie in the game!`;
};

const clearMessage = () => {
  panel.innerText = "";
};

const validateGame = () => {
  let gameWon = false;
  for (let i = 0; i <= 7; i++) {
    const [posA, posB, posC] = winningConditions[i];
    const value1 = fields[posA];
    const value2 = fields[posB];
    const value3 = fields[posC];

    if (value1 !== "" && value1 === value2 && value1 === value3) {
      gameWon = true;
      break;
    }
  }

  if (gameWon) {
    gameActive = false;
    displayWinMessage();
  } else if (isBoardFull()) {
    gameActive = false;
    displayTieMessage();
  }
};

const isBoardFull = () => {
  return fields.find((field) => field === "") === undefined;
};

const resetBoardClasses = () => {
  fieldsElements.forEach((field) => {
    field.classList.remove("board__item--filled-X", "board__item--filled-O");
  });
};

const handleButtonClick = () => {
  setDefaults();
  resetBoardClasses();
  clearMessage();
};

const handleItemClick = (e) => {
  const { pos } = e.target.dataset;

  if (gameActive && fields[pos] === "") {
    fields[pos] = activePlayer;
    e.target.classList.add(`board__item--filled-${activePlayer}`);
    validateGame();
    activePlayer = activePlayer === "X" ? "O" : "X";
  }
};

const setDefaults = () => {
  fields = ["", "", "", "", "", "", "", "", ""];
  activePlayer = "X";
  gameActive = true;
};

button.addEventListener("click", handleButtonClick);

fieldsElements.forEach((field) => {
  field.addEventListener("click", handleItemClick);
});

setDefaults();
