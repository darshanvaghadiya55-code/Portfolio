async function loadIncludes() {
    const includes = document.querySelectorAll("[id]");

    for (const el of includes) {
        const file = `components/${el.id}.html`;
        try {
            const res = await fetch(file);
            el.innerHTML = await res.text();
        } catch (e) {
            console.warn(`Failed to load ${file}`);
        }
    }
    document.dispatchEvent(new Event("includesLoaded"));
}

loadIncludes();

