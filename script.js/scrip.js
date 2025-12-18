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

const SHOW_GREETING = true;

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

// Display greeting (enabled)
if (SHOW_GREETING) {
  document.getElementById("greetingText").textContent = Greeting();
} else {
  document.getElementById("greetingBox").style.display = "none";
}

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
//Countdown

// Set the target date and time for the countdown
const targetDate = new Date("Jan 6, 2026 15:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date/time and the target date/time
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the calculated time in the HTML elements
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Check if the countdown has expired
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "What a day. Life moves forward without asking, taking some and leaving others behind—yet who truly knows? Maybe someone carries you in their thoughts, unseen and unknown..";
  }
}, 1000);
