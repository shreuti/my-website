window.onload = function () {
    const cat = document.getElementById("cat");

    if (window.location.href.includes("page2")) {
        cat.src = "https://media.giphy.com/media/MlhIi4DoxeUjC/giphy.gif";
    }
    else if (window.location.href.includes("page3")) {
        cat.src = "https://media.giphy.com/media/13borq7Zo2kulo/giphy.gif";
    }
    else {
        cat.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
    }
};
let step = 0;

// ❌ NO BUTTON CLICK
function noclick() {
    step++;

    const cat = document.getElementById("cat");
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const noBtn = document.getElementById("noBtn");

    if (step === 1) {
        cat.src = "https://media.giphy.com/media/MlhIi4DoxeUjC/giphy.gif";
        title.innerText = "Please think again! 😢";
        subtitle.innerText = "itni jaldi nahi bolo 😭";
    }
    else if (step === 2) {
        cat.src = "https://media.giphy.com/media/13borq7Zo2kulo/giphy.gif";
        title.innerText = "Baby maan jao na! 🥺";
        subtitle.innerText = "kitna bhav khaogi 💔";
    }
    else {
        cat.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
        title.innerText = "Ab toh YES hi bolo 😤";
        subtitle.innerText = "No allowed nahi hai 😡";

        // 👇 button bhaagega
        noBtn.onmouseover = moveButton;
    }
}

// 🏃 BUTTON MOVE
function moveButton() {
    const noBtn = document.getElementById("noBtn");

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// ✅ YES BUTTON CLICK (FINAL ANIMATION)
function yesClick() {
    const container = document.querySelector(".container");

    const images = [
        "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
        "https://media.giphy.com/media/MlhIi4DoxeUjC/giphy.gif",
        "https://media.giphy.com/media/13borq7Zo2kulo/giphy.gif",
        "https://media.giphy.com/media/1JnoBCvQVp7nq/giphy.gif",
        "https://media.giphy.com/media/IC0gUNjpv0OPC/giphy.gif"
    ];

    let i = 0;

    // ⚠️ BACKTICKS USE KIYE HAI (IMPORTANT)
    container.innerHTML = `
        <img id="finalImg" src="${images[0]}" style="width:200px;">
        <h1 style="margin-top:10px;">Yayyyy ❤️</h1>
    `;

    const img = document.getElementById("finalImg");

    function showNext() {
        if (i < images.length) {
            img.src = images[i];
            i++;
            setTimeout(showNext, 800);
        }
    }

    showNext();
}
