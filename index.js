const fieldsElements = document.querySelectorAll(".board__item");

const fields = ["", "", "", "", "", "", "", "", ""];

let activePlayer = "X";

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

fieldsElements.forEach((field) => {
  field.addEventListener("click", (e) => {
    const { pos } = e.target.dataset;

    if (fields[pos] === "") {
      fields[pos] = activePlayer;
      e.target.classList.add(`board__item--filled-${activePlayer}`);
      activePlayer = activePlayer === "X" ? "O" : "X";
    }
  });
});