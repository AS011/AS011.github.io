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
    const card = document.querySelector('.birthdayCard');
    
    // Add hover event listener
    card.addEventListener('mouseenter', function() {
        console.log('Card hovered!'); // Debug log
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});
