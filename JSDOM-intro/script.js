console.log(document)

const button = document.getElementById(`Hide`);
const photo = document.getElementById(`Photo`);

button.addEventListener(`click`, (event)=>{
   if (photo.style.display==`none`) {
    photo.style.display=`block`;
    button.textContent="Hide";
   } else {
    photo.style.display=`none`;
    button.textContent="Show";
   } ;
})

function displayImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    const imageElement = document.getElementById('imageDisplay');

    if (imageUrl) {
        imageElement.src = imageUrl;
        imageElement.style.display = 'block'; 
    }
}
        

function displayText() {
    const userText = document.getElementById('userText').value;
    const textColor = document.getElementById('textColor').value;
    const textDisplay = document.getElementById('textDisplay');

    if (userText) {
        textDisplay.textContent = userText;
        textDisplay.style.color = textColor;  
    }
}


