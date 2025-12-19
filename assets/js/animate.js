let animationObserver;
const animatedElements = new WeakSet();

function initAnimations() {
    if (!animationObserver) {
        animationObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("is-visible");
                    animationObserver.unobserve(entry.target);
                    animatedElements.add(entry.target);
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -80px 0px"
            }
        );
    }

    document.querySelectorAll(".animate").forEach(el => {
        if (!animatedElements.has(el)) {
            animationObserver.observe(el);
        }
    });
}

let mutationTimeout;
const mutationObserver = new MutationObserver(() => {
    clearTimeout(mutationTimeout);
    mutationTimeout = setTimeout(initAnimations, 50);
});


document.addEventListener("DOMContentLoaded", () => {
    initAnimations();
    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
});
