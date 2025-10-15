document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

//hamburguer menu
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.header-nav ul').classList.toggle('show');
});

const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;
let autoSlide;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
}

function prevTestimonial() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
}

nextBtn.addEventListener('click', () => {
    nextTestimonial();
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevTestimonial();
    resetAutoSlide();
});

// Swipe support
let startX = 0;
document.querySelector('.carousel').addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

document.querySelector('.carousel').addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextTestimonial();
    else if (endX - startX > 50) prevTestimonial();
    resetAutoSlide();
});

// Autoplay every 6 seconds
function startAutoSlide() {
    autoSlide = setInterval(nextTestimonial, 6000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

startAutoSlide();

