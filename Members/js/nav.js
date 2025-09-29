window.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-item");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (linkPath === "index.html" && (currentPath === "" || currentPath === "index.html"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

const toggleBtn = document.getElementById("toggle-btn");
const moreText = document.getElementById("more-text");
let isVisible = false;

toggleBtn.addEventListener("click", function () {
  isVisible = !isVisible;
  moreText.classList.toggle("show", isVisible);
  toggleBtn.innerHTML = isVisible
    ? 'Show Less<i class="bi bi-chevron-double-up ms-2"></i>'
    : 'Show More<i class="bi bi-chevron-double-right ms-2"></i>';
});