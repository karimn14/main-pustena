// Scroll to specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Gallery scroll animation
function scrollGallery() {
    const gallery = document.querySelector('.gallery-container');
    gallery.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
    });
}

// Button hover effect
document.querySelectorAll('.cta-button, .gallery-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#000080'; // Dark blue
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ff6347'; // Tomato color
    });
});
