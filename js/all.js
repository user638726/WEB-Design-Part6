const toggleMenuBtn = document.querySelector("#toggle-btn");
const body = document.querySelector("body");
toggleMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("sidebar-toggled");
});
document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "home.html";

  // 清除舊 active
  document.querySelectorAll(".sidebar .sidebar-link.active")
    .forEach(el => el.classList.remove("active"));

  // 只處理真正導向 html 的連結
  const links = document.querySelectorAll(
    '.sidebar a.sidebar-link[href]:not([href^="#"])'
  );

  links.forEach((a) => {
    const href = a.getAttribute("href");
    const file = href.split("/").pop();

    if (file === current) {
      a.classList.add("active");

      // 如果在 collapse 裡，展開，但不讓 toggle active
      const collapse = a.closest(".collapse");
      if (collapse) {
        collapse.classList.add("show");
      }
    }
  });
});

