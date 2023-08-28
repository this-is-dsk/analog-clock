function show_clock() {
    const hourNeedle = document.querySelector(".needle.hr span");
    const minuteNeedle = document.querySelector(".needle.mn span");
    const secondNeedle = document.querySelector(".needle.ss span");

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hourDeg = (hours % 12) * 30 + (minutes / 2);
        const minuteDeg = minutes * 6;
        const secondDeg = seconds * 6;

        hourNeedle.style.transform = `rotate(${hourDeg}deg)`;
        minuteNeedle.style.transform = `rotate(${minuteDeg}deg)`;
        secondNeedle.style.transform = `rotate(${secondDeg}deg)`;

        playTickSound();
    }

    updateClock();

 
    setInterval(updateClock, 1000);
}
const tickSound = document.getElementById('tickSound');

function playTickSound() {
  tickSound.currentTime = 0; 
  tickSound.play();
}



