/* =====================================================
   STUDENT PORTFOLIO — script.js
   Burger menu toggle only (the animation lives in style.css)
   ===================================================== */

const burger = document.getElementById("burger");
const nav = document.getElementById("site-nav");

// Open or close the menu and keep aria-expanded in sync
function setMenu(open) {
  nav.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
}

// Click the burger: open if closed, close if open
burger.addEventListener("click", function () {
  setMenu(!nav.classList.contains("open"));
});

// Click any link: close the menu
nav.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    setMenu(false);
  }
});

// If the window is widened to desktop, reset the menu state
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    setMenu(false);
  }
});
