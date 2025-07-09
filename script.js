document.addEventListener('DOMContentLoaded', () => {
    const experienceBoxes = document.querySelectorAll('.experience-box');

    experienceBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Check if the box is already open
            const isOpen = box.classList.contains('open');

            // Close all boxes
            experienceBoxes.forEach(b => {
                b.classList.remove('open');
            });

            // If the box was not open, open it
            if (!isOpen) {
                box.classList.add('open');
            }
        });
    });
});
