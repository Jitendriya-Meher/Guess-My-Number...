
const hints = document.querySelector(".hint");
const noOfGuessesRef = document.querySelector(".no-of-gusses");
const guessedNumber = document.querySelector(".guessed-nums");
const restartBtn = document.querySelector("#restart");
const game = document.querySelector("#game");
const guessInput = document.querySelector("#guess");
const checkBtn = document.querySelector("#checkBtn");

let answer , noOfGuesses , gussedNumerArr;


const play = () => {

    const userGuess = guessInput.value;

    // check the number is valid or not
    if( userGuess < 1 || userGuess > 100 || isNaN(userGuess) ){
        alert( "Please enter a valid number between 1 and 100." );
        return;
    }

    gussedNumerArr.push( userGuess);
    noOfGuesses++;

    if( userGuess != answer){
        if( userGuess < answer){
            hints.innerHTML = "Too Low. Try Again!";
        }
        else{
            hints.innerHTML = "Too High. Try Again!";
        }

        noOfGuessesRef.innerHTML = `<span>No. of Guesses:</span> ${noOfGuesses}`;

        guessedNumber.innerHTML = `<span>Guessed numbers are:</span> ${gussedNumerArr.join(",")}`;

        hints.classList.remove("error");
        setTimeout( ()=>{
            hints.classList.add("error");
        },15);
    }
    else{
        hints.innerHTML = `Congratulations! <br/> The number was <span>${answer}</span>.<br/>You gussed the number in <span>${noOfGuesses}</span> tries.<br/> They are ( ${gussedNumerArr.join(",")})`;
        hints.classList.add("success");
        game.style.display = "none";
        restartBtn.style.display = "block";
    }
    guessInput.value="";
}

checkBtn.addEventListener("click",play);

guessInput.addEventListener("keydown",(event)=>{
    if( event.keyCode === 13){
        event.preventDefault();
        play();
    }
})


const init = () => {
    answer = Math.floor(Math.random() *100) +1;
    noOfGuesses = 0;
    gussedNumerArr = [];
    noOfGuessesRef.innerHTML = "No. Of Guesses are: 0";
    guessedNumber.innerHTML = "Guessed Number are: None";
    guessInput.value = "";
    hints.classList.remove("success","error");
};

document.addEventListener("DOMContentLoaded",init);

restartBtn.addEventListener("click",()=>{
    game.style.display = "grid";
    restartBtn.style.display = "none";
    hints.innerHTML = "";
    hints.classList.remove("success","error");
    init();
});