const boom = document.getElementById("boom")
const snare = document.getElementById("snare")
const drum = document.getElementById("clap")
const kick = document.getElementById("kick")
const Openhat = document.getElementById("OpenHat")
const tom = document.getElementById("tom")

document.addEventListener("keydown", (event) => {
    if (event.key === 'w') {
        boom.pause()
        boom.currentTime=0
        boom.play()
        animation("boom")
    }else if (event.key === "d"){
        snare.pause()
        snare.currentTime=0
        snare.play()
        animation("snare")
    }else if (event.key === "s"){
        clap.pause()
        clap.currentTime=0
        clap.play()
        animation("clap")
    } else if (event.key === "r"){
        kick.pause()
        kick.currentTime=0
        kick.play()
        animation("kick")
    } else if (event.key === "q"){
        Openhat.pause()
        Openhat.currentTime=0
        Openhat.play()
        animation("OpenHat")
    } else if (event.key === "t"){
        tom.pause()
        tom.currentTime=0
        tom.play()
        animation("tom")
    }

});

function animation (soundType){
const selectedBox = document.querySelector(`.${soundType}`)
selectedBox.classList.add("animationActive")
setTimeout(() => {
selectedBox.classList.remove("animationActive")    
}, 50);
}

