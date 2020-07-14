let lettersArray1 = Array.from(document.getElementsByClassName("letter"));
let delay = 1;
let i;
for (i = 0; i < lettersArray1.length; i++) {
    lettersArray1[i].style.animationDelay = `${delay}s`;
    delay += 0.17;
}