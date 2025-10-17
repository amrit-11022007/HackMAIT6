// --- Sidebar Toggle for Mobile ---
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const aside = document.querySelector('aside');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        aside.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        aside.style.display = 'none';
    });
}

// --- Theme Toggle (Dark Mode) ---
const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    // Toggle active icon
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active'); // Sun
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active'); // Moon
});