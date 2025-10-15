//footer

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

//hamburguer menu
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.header-nav ul').classList.toggle('show');
});

///////

document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("donationAmount");
    const impactDisplay = document.getElementById("impactDisplay");
    const form = document.getElementById("donationForm");
    const confirmation = document.getElementById("confirmationMessage");

    amountInput.addEventListener("input", () => {
        const amount = parseFloat(amountInput.value);
        const turtles = isNaN(amount) ? 0 : Math.floor(amount * 3);
        impactDisplay.innerHTML = `Your donation will help rescue <strong>${turtles} turtles</strong>.`;
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.name.value;
        const amount = form.amount.value;
        confirmation.style.display = "block";
        confirmation.textContent = `Thank you, ${name}! Your donation of $${amount} has been received. 🐢`;
        form.reset();
        impactDisplay.innerHTML = `Your donation will help rescue <strong>0 turtles</strong>.`;
    });
});

///////////////FORMS
document.addEventListener("DOMContentLoaded", function () {
    const form1 = document.querySelector(".wf1");
    const form2 = document.querySelector(".wf2");

    function handleSubmit(event) {
        event.preventDefault(); // Evita el envío real del formulario
        alert("¡Thank you, turtle lover! The submission was successfull. You will receive a response within 24 hours.");
        event.target.submit(); // Envía el formulario después de mostrar el mensaje
    }

    form1.addEventListener("submit", handleSubmit);
    form2.addEventListener("submit", handleSubmit);
});

//Testimonios

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

function startAutoSlide() {
    autoSlide = setInterval(nextTestimonial, 6000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

startAutoSlide();

////////////////////


