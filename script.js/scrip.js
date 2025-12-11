document.addEventListener('DOMContentLoaded', () => {

    /* ========== DARK MODE BUTTON ========== */
    const darkModeButton = document.querySelector('.hello1');
    const darkThemeLink = document.getElementById('dark-theme-link');

    darkModeButton.addEventListener('click', () => {
        darkThemeLink.disabled = !darkThemeLink.disabled;
        darkModeButton.textContent = darkThemeLink.disabled ? "🌑" : "☀️";
    });

    /* ========== COOKIE POPUP ========== */
    const DEMO_MODE = true;  // true to yes and false to no (demo for the demonstration) othgerwise cookies dosent work because of localStorage

    const popup = document.getElementById("cookiePopup");
    const acceptBtn = document.getElementById("acceptCookies");

    // Show popup
    if (DEMO_MODE) {
        popup.style.display = "block";   // always show for demo
    } else {
        if (!localStorage.getItem("cookiesAccepted")) {
            popup.style.display = "block";  // real cookie 
        }
    }

    // Accept button
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "yes");
        popup.style.display = "none";
    });

});