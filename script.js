// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// Navbar scroll and hide/show logic
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Show/Hide logic
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        header.classList.add("nav-hidden");
    } else {
        // Scrolling up
        header.classList.remove("nav-hidden");
    }

    // Background and padding logic
    if (currentScrollY > 50) {
        header.style.padding = "0.5rem 0";
        header.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
        header.style.padding = "1rem 0";
        header.style.background = "rgba(255, 255, 255, 0.8)";
    }

    lastScrollY = currentScrollY;
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(".section-title, .contact-section").forEach(el => {
    el.style.opacity = "0";
    observer.observe(el);
});
