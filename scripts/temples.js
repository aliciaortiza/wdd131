document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const menuButton = document.getElementById("menu");
const navList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");

    // Cambia el ícono del botón entre ≡ y ✖
    if (navList.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "≡";
    }
});