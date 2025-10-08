document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const menuButton = document.getElementById("menu");
const navList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");

    if (navList.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "≡";
    }
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Puebla Mexico",
        location: "Puebla, Mexico",
        dedicated: "2024, May, 19",
        area: 28000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46346-thumb.jpg"
    },
    {
        templeName: "Indianapolis Indiana",
        location: "Indiana, United States",
        dedicated: "2015, August, 23",
        area: 73000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/indianapolis-indiana-temple/indianapolis-indiana-temple-57304-main.jpg"
    },
    {
        templeName: "Fort Lauderdale Florida",
        location: "Florida, United States",
        dedicated: "2014, May, 4",
        area: 68000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/fort-lauderdale-florida-temple/fort-lauderdale-florida-temple-3792-main.jpg"
    },
];

const templeContainer = document.querySelector("#temples");

function displayTemples(templesArray) {
    templeContainer.innerHTML = "";

    templesArray.forEach((temple) => {
        const card = document.createElement("section");

        card.style.backgroundColor = "var(--accent1-color)";
        card.style.border = "2px solid var(--primary-color)";
        card.style.borderRadius = "10px";
        card.style.padding = "1rem";
        card.style.margin = "1rem auto";
        card.style.maxWidth = "1000px";
        card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        card.style.textAlign = "left";


        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.style.borderRadius = "8px";
        image.style.marginTop = "1rem";
        image.style.width = "100%";

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}

displayTemples(temples);

function filterTemples(criteria) {
    let filtered = [];

    switch (criteria) {
        case "Old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "New":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "Large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "Small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }

    displayTemples(filtered);
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const category = link.textContent;

        document.querySelector("h2").textContent = category;

        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");

        filterTemples(category);
    });
});
