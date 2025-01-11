// Array of links
const links = [
    { name: "Projects", url: "https://kishensharma.com/projects" },
    { name: "Blogs", url: "https://kishensharma.com/blogs" },
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