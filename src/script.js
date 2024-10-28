// hover over the card to see the effect.
// Function to start confetti animation
function startConfetti() {
    const duration = 3 * 1000; // Confetti duration in milliseconds
    const end = Date.now() + duration;

    (function frame() {
        // Launch random confetti bursts every frame
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        // Continue the confetti animation for the set duration
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Add event listener to trigger confetti on card open
document.addEventListener('DOMContentLoaded', function() {
    const cardFront = document.querySelector('.cardFront');
    let confettiTriggered = false;

    cardFront.addEventListener('click', function() {
        document.querySelector('.birthdayCard').classList.add('open');
        if (!confettiTriggered) {
            startConfetti();
            confettiTriggered = true;
        }
    });
});
