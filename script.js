window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});
