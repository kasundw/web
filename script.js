// ----------------- Page 1 -----------------
const clickMeBtn = document.getElementById('clickMe');
if (clickMeBtn) {
    clickMeBtn.addEventListener('click', () => {
        window.location.href = "birthday.html";
    });
}

// ----------------- Page 2 -----------------
const song = document.getElementById('birthdaySong');
function playSong() {
    if (song && song.paused) {
        song.play().catch(() => {
            document.addEventListener('click', () => song.play());
            document.addEventListener('touchstart', () => song.play());
        });
    }
}
window.addEventListener('load', playSong);

// Floating hearts
function createHeart() {
    const heartsContainer = document.getElementById('hearts-container');
    if (!heartsContainer) return;

    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.fontSize = (20 + Math.random() * 30) + 'px';
    const heartEmojis = ['💖', '💙', '💜', '❤️'];
    heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.animationDuration = (3 + Math.random() * 5) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
if (document.getElementById('hearts-container')) setInterval(createHeart, 500);

// Mouse-follow hearts
if (document.getElementById('hearts-container')) {
    document.addEventListener('mousemove', (e) => {
        const mouseHeart = document.createElement('div');
        mouseHeart.className = 'heart';
        mouseHeart.style.left = e.pageX + 'px';
        mouseHeart.style.top = e.pageY + 'px';
        mouseHeart.style.fontSize = (15 + Math.random() * 20) + 'px';
        const heartEmojis = ['💖', '💙', '💜', '❤️'];
        mouseHeart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        document.getElementById('hearts-container').appendChild(mouseHeart);
        setTimeout(() => mouseHeart.remove(), 1000);
    });
}

// Balloons
function createBalloon() {
    const container = document.getElementById('balloons-container');
    if (!container) return;

    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * window.innerWidth + 'px';
    balloon.style.fontSize = (30 + Math.random() * 30) + 'px';
    balloon.innerText = '🎈';
    balloon.style.animationTimingFunction = 'ease-in-out';
    balloon.style.animationDuration = (6 + Math.random() * 4) + 's';
    container.appendChild(balloon);
    setTimeout(() => balloon.remove(), 10000);
}
if (document.getElementById('balloons-container')) setInterval(createBalloon, 800);

// Floating stars & hearts around message
function createFloatingItem() {
    const container = document.getElementById('floating-elements');
    const message = document.getElementById('birthday-message');
    if (!container || !message) return;

    const item = document.createElement('div');
    item.className = 'floating-item';
    const emojis = ['💖','💙','💜','❤️','✨','🌟'];
    item.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    const rect = message.getBoundingClientRect();
    const startX = rect.left + Math.random() * rect.width;
    const startY = rect.top + Math.random() * rect.height;

    item.style.left = startX + 'px';
    item.style.top = startY + 'px';
    item.style.fontSize = (20 + Math.random() * 20) + 'px';
    item.style.animationDuration = (4 + Math.random() * 4) + 's';

    container.appendChild(item);
    setTimeout(() => item.remove(), 8000);
}
if (document.getElementById('floating-elements')) setInterval(createFloatingItem, 300);

// ----------------- Ultimate Romantic Button -----------------
const loveBtnContainer = document.getElementById('loveBtnContainer');
if (loveBtn && loveBtnContainer) {

    // Small floating hearts around the button
    setInterval(() => {
        const smallHeart = document.createElement('div');
        smallHeart.className = 'small-heart';
        smallHeart.innerText = ['💖','💙','💜','❤️'][Math.floor(Math.random()*4)];
        smallHeart.style.left = Math.random() * loveBtn.offsetWidth + 'px';
        smallHeart.style.top = Math.random() * loveBtn.offsetHeight + 'px';
        loveBtnContainer.appendChild(smallHeart);
        setTimeout(() => smallHeart.remove(), 3000);
    }, 500);

    // Click event: big heart flies into button
    loveBtn.addEventListener('click', () => {
        loveBtn.innerText = "I Love You 💖";

        const bigHeart = document.createElement('div');
        bigHeart.className = 'big-flying-heart';
        bigHeart.innerText = '💖';

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        bigHeart.style.left = startX + 'px';
        bigHeart.style.top = startY + 'px';

        document.body.appendChild(bigHeart);

        const btnRect = loveBtn.getBoundingClientRect();
        const heartRect = bigHeart.getBoundingClientRect();
        const deltaX = btnRect.left + btnRect.width/2 - (startX + heartRect.width/2);
        const deltaY = btnRect.top + btnRect.height/2 - (startY + heartRect.height/2);

        requestAnimationFrame(() => {
            bigHeart.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(2)`;
            bigHeart.style.opacity = 0;
        });

        setTimeout(() => bigHeart.remove(), 2000);
    });
}
