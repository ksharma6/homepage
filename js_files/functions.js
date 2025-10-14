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

    // Right-aligned container for links and controls
    const right = document.createElement('div');
    right.className = 'navbar-right';

    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url; // Set the link URL
        a.textContent = link.name; // Set the link text
        if (link.name === "Resume") {
            a.target = "_blank";
            a.rel = "noopener";
        }
        // Smooth scroll for same-page anchors
        if (a.href.includes('#')) {
            a.addEventListener('click', (e) => {
                const id = a.getAttribute('href').split('#')[1];
                if (id) {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
        right.appendChild(a);
    });

    // Single theme toggle icon (moon) toggles between light and dark
    const moon = document.createElement('i');
    moon.className = 'fa-solid fa-moon theme-icon';
    moon.title = 'Toggle theme';
    moon.addEventListener('click', () => {
        const next = document.body.classList.contains('theme-light') ? 'dark' : 'light';
        setTheme(next);
    });
    right.appendChild(moon);

    navbar.appendChild(right);

    // Sticky style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 4) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // Active link highlighting using IntersectionObserver
    const sections = [ { id: 'about' }, { id: 'projects' } ];
    const anchorMap = new Map();
    Array.from(right.querySelectorAll('a')).forEach(a => {
        const hash = a.getAttribute('href').split('#')[1];
        if (hash) anchorMap.set(hash, a);
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const a = anchorMap.get(entry.target.id);
            if (!a) return;
            if (entry.isIntersecting) {
                // Clear previous
                right.querySelectorAll('a').forEach(x => x.classList.remove('active'));
                a.classList.add('active');
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0.01 });
    sections.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
    });

    // Init theme from storage (default dark)
    const saved = localStorage.getItem('theme');
    setTheme(saved === 'light' ? 'light' : 'dark');
}

function setTheme(mode) {
    if (mode === 'light') {
        document.body.classList.add('theme-light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('theme-light');
        localStorage.setItem('theme', 'dark');
    }
    // Update icon visual state
    const icon = document.querySelector('.theme-icon');
    if (icon) icon.classList.toggle('is-light', mode === 'light');
}

// Fetch and populate GitHub repo info for the Inbox Zero card
function populateRepoCard() {
    const card = document.getElementById('repo-inboxzero');
    if (!card) return;
    const owner = card.getAttribute('data-owner');
    const repo = card.getAttribute('data-repo');
    const descEl = document.getElementById('repo-inboxzero-desc');
    const linkEl = document.getElementById('repo-inboxzero-link');

    // Ensure link points to the correct repo
    if (linkEl && owner && repo) {
        linkEl.href = `https://github.com/${owner}/${repo}`;
    }

    fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then(r => r.ok ? r.json() : Promise.reject(r))
        .then(data => {
            if (descEl && data && typeof data.description === 'string') {
                descEl.textContent = data.description || 'No description provided.';
            }
        })
        .catch(() => {
            if (descEl) descEl.textContent = 'Unable to load repository details.';
        });
}

// Call after navbar is created so DOM is ready
(function(){
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', populateRepoCard);
    } else {
        populateRepoCard();
    }
})();