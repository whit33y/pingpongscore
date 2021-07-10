let first = 0;
let second = 0;
let isGameOver = false;
let winningScore = 3;
const winner = document.querySelector("#winner");
const one = document.querySelector("#one");
const addOne = document.querySelector("#playerOne");
const two = document.querySelector("#two");
const addTwo = document.querySelector("#playerTwo");
let winningScoreSelect = document.querySelector("#playTo");
const resetButton = document.querySelector("#reset");

addOne.addEventListener("click", function () {
    if (!isGameOver) {
        first++;
        if (first === winningScore) {
            isGameOver = true;
            addOne.style.display = "none";
            addTwo.style.display = "none";
            winner.style.display = "block";
            winner.textContent = "Player one win!"
        }
        one.textContent = first;
    }
})
addTwo.addEventListener("click", function () {
    if (!isGameOver) {
        second++;
    }
    if (second === winningScore) {
        isGameOver = true;
        addOne.style.display = "none";
        addTwo.style.display = "none";
        winner.style.display = "block";
        winner.textContent = "Player two win!"
    }
    two.textContent = second;
})
winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    resetb();
})
resetButton.addEventListener("click", resetb);

function resetb() {
    first = 0;
    second = 0;
    isGameOver = false;
    one.textContent = first;
    two.textContent = second;
    addOne.style.display = "inline-block";
    addTwo.style.display = "inline-block";
    winner.style.display = "none";
}