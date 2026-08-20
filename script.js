const words = [
    "Programmer",
    "Worldbuilder",
    "Systems Thinker",
    "Security Enthusiast",
    "Full-Stack Developer",
    "CyberSecurity Enthusiast",
    "Software Engineer",
    "Generalist"
];

let index = 0;

const text = document.getElementById("rotating-text");

setInterval(() => {

    index++;

    if(index >= words.length)
        index = 0;

    text.style.opacity = 0;

    setTimeout(() => {
        text.textContent = words[index];
        text.style.opacity = 1;
    },250);

},2500);