
/* File containing scripts */

function animateButtonClick() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
    setTimeout(function() {
        overlay.style.display = 'none';
        overlay.classList.remove('animate-overlay');
    }, 3000);
}