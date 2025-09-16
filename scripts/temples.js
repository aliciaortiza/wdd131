document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

document.getElementById("menu").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("open");
});