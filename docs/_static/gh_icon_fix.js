/* document.addEventListener("DOMContentLoaded", function() {
    // Collapse sidebar sections that have too many children so the sidebar
    // stays usable when there are 100+ task pages under "Task catalog".
    // Sections with more than MAX_SIDEBAR_ITEMS children are collapsed by
    // unchecking Furo's toggle checkbox; smaller sections (e.g. process
    // categories with 19 items) remain expanded as normal.
    function collapseLargeSections() {
        const MAX_SIDEBAR_ITEMS = 25;
        document.querySelectorAll(".toctree-l1.has-children").forEach(function(section) {
            const items = section.querySelectorAll(":scope > ul > li");
            if (items.length > MAX_SIDEBAR_ITEMS) {
                const checkbox = section.querySelector(":scope > .toctree-checkbox");
                if (checkbox) {
                    checkbox.checked = false;
                }
            }
        });
    }
    collapseLargeSections();
*/

    // Function to fix the icons
    function fixGitHubIcons() {
        // Furo puts icons in .content-icon-container
        // We look for links that point to GitHub
        const links = document.querySelectorAll(".content-icon-container a");

        links.forEach(link => {
            const href = link.getAttribute("href");
            if (!href) return;

            // Check if it's a GitHub link (edit or blob/view)
            if (href.includes("github.com")) {

                // If it's the Edit link, hide it
                if (href.includes("/edit/")) {
                    link.style.display = "none";
                    link.classList.add("hidden-edit-link"); // Marker for CSS
                }
                // If it's the View/Blob link, hijack it
                else if (href.includes("/blob/") || href.includes("/tree/")) {
                    // Change URL to repo root
                    link.href = "https://github.com/hed-standard/hed-python";
                    link.title = "Go to repository";
                    link.setAttribute("aria-label", "Go to repository");

                    // Remove any text content (like "View source") to ensure only icon shows
                    // But keep the SVG if we were using the original, but we are replacing it via CSS.
                    // Safest is to empty the text content but keep the element structure if needed.
                    // Actually, Furo puts an SVG inside. We want to hide that SVG and show our own background.
                    link.classList.add("github-repo-link"); // Add class for CSS targeting
                    link.style.display = "inline-flex";
                }
            }
        });
    }

    fixGitHubIcons();
});
