document.addEventListener("includesLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navHeight = navbar?.offsetHeight || 100;

    const validIds = ["hero", "about", "skills", "project", "contact"];

    const sections = [...document.querySelectorAll("section[id]")]
        .filter(s => validIds.includes(s.id));

    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const id = entry.target.id;

                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") == `#${id}`
                    );
                });
            });
        },
        {
            rootMargin: `-${navHeight}px 0px -55% 0px`,
            threshold: 0.01
        }
    );

    sections.forEach(section => observer.observe(section));
});

