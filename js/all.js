const toggleMenuBtn = document.querySelector("#toggle-btn");
const body = document.querySelector("body");
toggleMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("sidebar-toggled");
});
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const links = document.querySelectorAll(".sidebar-link");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    // 排除容易誤判的連結
    if (href === "#" || href === "/" || href.startsWith("javascript")) return;

    const targetPath = href.replace(/\/$/, "");

    if (currentPath === targetPath) {
      // ✅ 只給子項 active
      link.classList.add("active");

      // ✅ 只展開 collapse，不給上層 active
      const collapseEl = link.closest(".collapse");
      if (collapseEl) {
        collapseEl.classList.add("show");
      }
    }
  });
});
