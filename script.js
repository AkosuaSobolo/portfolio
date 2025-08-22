let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let newTextDelay = 2000;
let dropdownMenu = document.querySelector(".js-dropdown");
let closeButton = document.querySelector(".cancel")
let hamburger = document.querySelector(".hamburger")

let isClicked = false


hamburger.addEventListener('click', () => {
    if(!isClicked){
        isClicked = true
        dropdownMenu.classList.toggle("dropdownMenuList")
        console.log("open")
    }
})

closeButton.addEventListener('click', () => {
    if(isClicked){
        isClicked = false
        dropdownMenu.classList.remove("dropdownMenuList")
        console.log("close")
    }
})

const texts = [ 
    "Developer", "Frontend Developer"
]

const textElement = document.querySelector(".typewriter-text");

function type() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed + 500); 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newTextDelay);
});