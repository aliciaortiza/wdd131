// Product array
const products = [
    { id: 'p001', name: 'EcoSmart LED Bulb' },
    { id: 'p002', name: 'Smart Thermostat' },
    { id: 'p003', name: 'Wireless Doorbell' },
    { id: 'p004', name: 'Solar Panel Kit' }
];

// Populate select options
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

