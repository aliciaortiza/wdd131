document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temp = 28;
const wind = 5.2;

function calculateWindChill(t, s) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

const windchillSpan = document.getElementById("windchill");
if (temp <= 10 && wind > 4.8) {
    windchillSpan.textContent = `${calculateWindChill(temp, wind).toFixed(1)} °C`;
} else {
    windchillSpan.textContent = "N/A";
}
