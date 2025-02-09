let clickCount = 0;
const messages = ["No", "Please?", "Baby please.", "BABE PLEASE", "PLEASE BABE SAY YES"];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".next-btn").style.display = "block";
});

function nextPage() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

function growYes() {
    let yesBtn = document.getElementById('yesBtn');
    let noBtn = document.getElementById('noBtn');
    noBtn.innerText = messages[Math.min(clickCount, messages.length - 1)];

    let scale = 1 + (clickCount * 0.5);
    yesBtn.style.transform = `scale(${scale})`;

    let randomX = Math.max(10, Math.min(90, Math.random() * 80));
    let randomY = Math.max(10, Math.min(90, Math.random() * 80));
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}%`;
    noBtn.style.top = `${randomY}%`;

    clickCount++;
    if (clickCount >= 5) {
        yesBtn.classList.add("big-button");
        yesBtn.innerHTML = "JUST FORGIVE ME AND TELL ME YOU LOVE ME";
        noBtn.style.display = "none";
    }
}

function redirectToFinalPage() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
}

function nextFinalPage() {
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page4').classList.remove('hidden');
    generateFloatingHearts();
}

function generateFloatingHearts() {
    const heartContainer = document.querySelector('.heart-container');
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setTimeout(generateFloatingHearts, 3000);
}
