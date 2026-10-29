// ============================================================
// Footer year: updates automatically, nothing to change here.
// ============================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================================
// Dark mode toggle (the ◐ button in the nav).
// Remembers your choice so it sticks after a refresh.
// ============================================================
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch (e) { /* storage blocked, that's ok */ }
}

let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (e) { /* ignore */ }
setTheme(savedTheme || "light");

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// ============================================================
// CHECKPOINT 4 (feature): rotating roles in the hero tagline.
// Put your own roles in this list. Each one goes in quotes,
// separated by commas. Watch your commas!
// ============================================================
const roles = [
  "EE junior",
  "SEC Technical Officer",
  "IEEE Treasurer",
  "Hardware Tinkerer"
];

const roleElement = document.getElementById("rotatingRole");
let roleIndex = 0;

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleElement.textContent = roles[roleIndex];
}, 2200); // milliseconds between changes
