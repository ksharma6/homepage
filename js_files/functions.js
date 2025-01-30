// Builds nav bar
const links = [
    { name: "Kishen Sharma", url: "http://127.0.0.1:5500/html_files/index.html"},
    { name: "Projects", url: "http://127.0.0.1:5500/html_files/index.html" },
    { name: "Resume", url: "http://127.0.0.1:5500/html_files/index.html" },
];

// Function to create and append links to the navbar
function createNavbar() {
    const navbar = document.getElementById("navbar");
    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url; // Set the link URL
        a.textContent = link.name; // Set the link text
        navbar.appendChild(a); // Append the link to the navbar
    });
}