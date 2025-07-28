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