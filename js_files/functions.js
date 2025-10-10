// Builds nav bar
const DOMAIN = 'https://www.kishensharma.com';
const links = [
    { name: "Home", url: `${DOMAIN}/`},
    { name: "Resume", url: `${DOMAIN}/assets/Kishen%20Sharma%20Resume.pdf` },
    { name: "Projects", url: `${DOMAIN}/#projects` },
];

// Function to create and append links to the navbar
function createNavbar() {
    const navbar = document.getElementById("navbar");
    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url; // Set the link URL
        a.textContent = link.name; // Set the link text
        if (link.name === "Resume") {
            a.target = "_blank";
            a.rel = "noopener";
        }
        navbar.appendChild(a); // Append the link to the navbar
    });

    // Add simple theme toggle button
    const toggle = document.createElement('button');
    toggle.textContent = document.body.classList.contains('theme-light') ? 'Dark' : 'Light';
    toggle.style.marginLeft = 'auto';
    toggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('theme-light');
        toggle.textContent = isLight ? 'Dark' : 'Light';
    });
    navbar.appendChild(toggle);
}