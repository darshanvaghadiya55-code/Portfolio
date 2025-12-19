const updateThemeIcon = (theme) => {
    const icon = document.querySelector("#theme-toggle i");
    if (!icon) return;

    icon.className =
        theme === "dark"
            ? "bi bi-sun-fill"
            : "bi bi-moon-fill";
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
}

document.addEventListener("click", (e) => {
    const btn = e.target.closest("#theme-toggle");
    if (!btn) return;

    const current =
        document.documentElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark";

    document.documentElement.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
    updateThemeIcon(current);
});
