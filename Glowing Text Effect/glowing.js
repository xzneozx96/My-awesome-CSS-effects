let spanArr = Array.from(document.getElementsByClassName("letter2"));
let delay1 = 1;
let delay2 = 2;
let delay3 = 3;
let delay4 = 4;
let x,y,z,t;
let a,b,c,d;

let groupLetters1 = ["I","L","U","M","T","a","E","y","t","g","i"];
let groupLetters2 = ["o","v","r"];
let groupLetters3 = ["h","n","e"];
let groupLetters4 = "-"

let groupSpan1 = [];
for ( x = 0; x < groupLetters1.length; x++) {
    spanArr.forEach((span => {
        if (span.innerHTML == groupLetters1[x]) {
            groupSpan1.push(span)
        }
    }))
}
let groupSpan2 = [];
for ( y = 0; y < groupLetters2.length; y++) {
    spanArr.forEach((span => {
        if (span.innerHTML == groupLetters2[y]) {
            groupSpan2.push(span)
        }
    }))
}
let groupSpan3 = [];
for ( z = 0; z < groupLetters3.length; z++) {
    spanArr.forEach((span => {
        if (span.innerHTML == groupLetters3[z]) {
            groupSpan3.push(span)
        }
    }))
}
let groupSpan4 = [];
for ( t = 0; t < groupLetters4.length; t++) {
    spanArr.forEach((span => {
        if (span.innerHTML == groupLetters4[t]) {
            groupSpan4.push(span)
        }
    }))
}

for (a = 0; a < groupSpan1.length; a++) {
    groupSpan1[a].style.animationDelay = `${delay1}s`;
    delay1 += 0.3;
}
for (b = 0; b < groupSpan2.length; b++) {
    groupSpan2[b].style.animationDelay = `${delay2}s`;
    delay2 += 0.3;
}
for (c = 0; c < groupSpan3.length; c++) {
    groupSpan3[c].style.animationDelay = `${delay3}s`;
    delay3 += 0.3;
}
for (d = 0; d < groupSpan4.length; d++) {
    groupSpan4[d].style.animationDelay = `${delay4}s`;
    delay4 += 0.3;
}

setTimeout(() => {
    let stopTimer = 0;
    let twinkling = setInterval(() => {
        stopTimer++;
        spanArr.forEach(span => {
            span.classList.toggle("disappear")
        })
        if ( stopTimer == 4) {
            clearInterval(twinkling)
        }
    },250)
}, 5300)