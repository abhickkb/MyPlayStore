document.addEventListener("DOMContentLoaded", () => {
    const sidebarItems = document.querySelectorAll(".sidebar li");
    const sections = document.querySelectorAll(".content-section");

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove("active");
            if (section.id === sectionId) {
                section.classList.add("active");
            }
        });
    }

    // Default section = Movies
    showSection("movies");

    sidebarItems.forEach(item => {
        item.addEventListener("click", () => {
            const sectionId = item.getAttribute("data-section");
            showSection(sectionId);

            // highlight active item
            sidebarItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");
        });
    });
});
