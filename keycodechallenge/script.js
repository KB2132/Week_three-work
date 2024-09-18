// !Do not change these since they are linked with the HTML refer back to HTML for refrence. :)
const intro = document.getElementById("Intro")
const key = document.getElementById("key")
const Code = document.getElementById("Code")
const CharCode = document.getElementById("CharCode")


// This is what the code will look for aka when a key is pressed it looks/listens for that key.
document.addEventListener("keydown", (event) => {
key.textContent = event.key
Code.textContent = event.code
CharCode.textContent = event.keyCode
intro.textContent = `Key pressed ${event.key}`
})

//? This is basically what we need in the script.js this meets the requirements that tells the HTML to show what key has been pressed