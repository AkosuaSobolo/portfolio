function hamburger() {
    const dropdownMenu = document.querySelector(".dropdown");
    dropdownMenu.classList.add("active");
}

function cancel() {
    const dropdownMenu = document.querySelector(".dropdown");
    dropdownMenu.classList.remove("active");
}

const texts = [ 
    "Frontend Developer"
]

const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000;

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