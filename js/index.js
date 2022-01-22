let randNumber = Math.floor(Math.random() * 100 + 1);
let count = 1;
document.getElementById("submit").onclick = () => {
    let guessNumber = document.getElementById("guessNumber");
    let errorGuess = document.getElementById("errorGuess");
    if (guessNumber.value == randNumber) {
        errorGuess.innerHTML = `<span class="text-success">Congrulation! You have guessed the number in ${count} attempt.</span>`;
    }
    else if (guessNumber.value > randNumber) {
        errorGuess.innerHTML = `<span class="text-danger">Opps! please enter smaller number</span>`;
        count++;
    }
    else {
        errorGuess.innerHTML = `<span class="text-danger">Opps! please enter greater number</span>`;
        count++;
    }
}