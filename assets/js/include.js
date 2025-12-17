document.addEventListener("DOMContentLoaded", () => {
    const components = {
        navbar: "components/navbar.html",
        hero: "components/hero.html",
        about: "components/about.html",
        skills: "components/skills.html",
        project: "components/project.html",
        contact: "components/contact.html",
        footer: "components/footer.html",
    };

    Object.entries(components).forEach(([id, path]) => {
        const container = document.getElementById(id);
        if (!container) return;

        fetch(path)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${path}`);
                }
                return response.text();
            })
            .then((html) => {
                container.innerHTML = html;
            })
            .catch((error) => {
                console.error(`${id} load failed:`, error);
            });
    });
});
