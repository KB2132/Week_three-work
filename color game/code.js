// !These are the things you don't want to have changed so the code will not change them.

const guessColor = document.getElementById("colorToGuess")
const NewColBtn = document.getElementById("newColBtn")
const correctMessage = document.getElementById("correctMessage")
const score = document.getElementById("score")
const allboxes = document.querySelectorAll(".box")

let newColor = null;
let currentScore = 0;
let guessing = false;

allboxes.forEach((colorBox) =>{
   colorBox.addEventListener("click", () =>{

    if(guessing === false){
        return;
    }
     
    if( colorBox.style.background === newColor){
         correct();
    } else {
        colorBox.style.opacity ="0";

    }

    })
})

// This just allows the message at const correctMessage to say correct

const correct = () => {
    correctMessage.textContent="Correct";
    currentScore++;
    score.textContent = currentScore;
    guessing = false;

    for (let i = 0; i < allboxes.length; i++){
        allboxes[i].style.opacity = "1";
        allboxes[i].style.background = newColor;
    }

}


// *this is the stuff for the boxes we made in out HTML and it randomizes the color so we can guess stuff see HTML for refrence and live server.

const reset = () =>{
    guessing = true
    for(let i= 0; i < allboxes.length; i++){
     allboxes[i].style.opacity = "1";
     allboxes[i].style.background = `RGB(${Math.round(Math.random() * 255 )} ,${Math.round(Math.random() * 255 )} ,${Math.round(Math.random() * 255 )})`
    }

    let elementToGuess = allboxes[Math.floor(Math.random() *6)];

    newColor = elementToGuess.style.background;
    guessColor.textContent = newColor;
}

reset()

NewColBtn.addEventListener("click", reset)