document.addEventListener('DOMContentLoaded', () => {

    /* ========== DARK MODE BUTTON ========== */
    const darkModeButton = document.querySelector('.hello1');
    const darkThemeLink = document.getElementById('dark-theme-link');

    darkModeButton.addEventListener('click', () => {
        darkThemeLink.disabled = !darkThemeLink.disabled;
        darkModeButton.textContent = darkThemeLink.disabled ? "🌑" : "☀️";
    });

    /* ========== COOKIE POPUP ========== */
    const DEMO_MODE = true;  // true to yes and false to no (demo for the demonstration) otherwise cookies dosent work because of localStorage

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
// Toon begroeting
//hallo ik ben Mervan ik ben cool//
function Greeting() {
        const now = new Date();
        const hour = now.getHours();

        if (hour >= 5 && hour < 12) {
            return "Good Morning!";
        } else if (hour >= 12 && hour < 18) {
            return "Good Afternoon!";
        } else {
            return "Good Evening!";
        }
    }

    // Display greeting
    document.getElementById("greetingText").textContent = Greeting();

    // Close greeting box
    function closeGreeting() {
        const box = document.getElementById("greetingBox");
        box.style.display = "none";
    }
        // sidebar
        function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
