// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    let menu = document.querySelector(".nav-list");
    
    // Tambahkan efek animasi
    if (menu.classList.contains("show")) {
        menu.style.transform = "translateY(-10px)";
        menu.style.opacity = "0";
        setTimeout(() => menu.classList.remove("show"), 300); // Delay sebelum disembunyikan
    } else {
        menu.classList.add("show");
        menu.style.transform = "translateY(0)";
        menu.style.opacity = "1";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let notification = document.getElementById("successMessage");
    if (notification) {
        notification.style.display = "block";
        setTimeout(function () {
            notification.style.display = "none";
        }, 2000);
    }
});