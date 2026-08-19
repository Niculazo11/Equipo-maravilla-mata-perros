

(function () {
    "use strict";

    const STORAGE_KEY = "theme";
    const DARK_CLASS = "dark-mode";

    const toggleButton = document.getElementById("dark-mode");

    if (!toggleButton) {
        return;
    }

    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();

        const isDark = document.body.classList.toggle(DARK_CLASS);

        localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    });
})();
