document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("projectMenuButton");

    const sidebar =
        document.getElementById("projectSidebar");

    const overlay =
        document.getElementById("projectOverlay");

    const sidebarAdminEmail =
        document.getElementById("sidebarAdminEmail");

    const sidebarAdminRole =
        document.getElementById("sidebarAdminRole");

    const headerAdminName =
        document.getElementById("headerAdminName");

    const headerAdminRole =
        document.getElementById("headerAdminRole");

    const logout =
        document.getElementById("projectLogout");

    const projectSearch =
        document.getElementById("projectSearch");

    const filterButtons =
        document.querySelectorAll(".stackly-filter-button");

    const projectCards =
        document.querySelectorAll(".stackly-project-card");

    const newProjectButton =
        document.getElementById("newProjectButton");

    let savedScrollPosition = 0;

    function lockPageScroll() {

        savedScrollPosition =
            window.scrollY;

        document.body.style.position =
            "fixed";

        document.body.style.top =
            `-${savedScrollPosition}px`;

        document.body.style.left =
            "0";

        document.body.style.right =
            "0";

        document.body.style.width =
            "100%";

        document.documentElement.style.overflow =
            "hidden";

        document.body.classList.add(
            "stackly-project-menu-open"
        );
    }

    function unlockPageScroll() {

        document.body.style.position =
            "";

        document.body.style.top =
            "";

        document.body.style.left =
            "";

        document.body.style.right =
            "";

        document.body.style.width =
            "";

        document.documentElement.style.overflow =
            "";

        document.body.classList.remove(
            "stackly-project-menu-open"
        );

        requestAnimationFrame(function () {

            window.scrollTo(
                0,
                savedScrollPosition
            );

        });
    }

    function openSidebar() {

        if (
            !sidebar ||
            !overlay ||
            !menuButton
        ) {
            return;
        }

        sidebar.classList.add(
            "mobile-open"
        );

        overlay.classList.add(
            "active"
        );

        lockPageScroll();

        menuButton.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

        menuButton.setAttribute(
            "aria-label",
            "Close navigation"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    function closeSidebar() {

        if (
            !sidebar ||
            !overlay ||
            !menuButton
        ) {
            return;
        }

        sidebar.classList.remove(
            "mobile-open"
        );

        overlay.classList.remove(
            "active"
        );

        unlockPageScroll();

        menuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        menuButton.setAttribute(
            "aria-label",
            "Open navigation"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            function () {

                if (
                    sidebar.classList.contains(
                        "mobile-open"
                    )
                ) {
                    closeSidebar();
                } else {
                    openSidebar();
                }

            }
        );

    }

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeSidebar
        );

    }

    document
        .querySelectorAll(".stackly-project-link")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (window.innerWidth <= 991) {
                        closeSidebar();
                    }

                }
            );

        });

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 991) {
                closeSidebar();
            }

        }
    );

    window.addEventListener(
        "pageshow",
        function () {
            closeSidebar();
        }
    );

    const savedEmail =
        localStorage.getItem("userEmail");

    const savedRole =
        localStorage.getItem("userRole");

    const adminEmail =
        savedEmail || "admin@stackly.com";

    const adminRole =
        savedRole || "Admin";

    function getName(email) {

        if (
            !email ||
            !email.includes("@")
        ) {
            return email || "Admin";
        }

        const username =
            email
                .split("@")[0]
                .replace(/[0-9]/g, "")
                .replace(/[._-]/g, " ")
                .trim();

        if (!username) {
            return email;
        }

        return username
            .split(" ")
            .filter(Boolean)
            .map(function (word) {

                return (
                    word.charAt(0).toUpperCase() +
                    word.slice(1)
                );

            })
            .join(" ");
    }

    const adminName =
        getName(adminEmail);

    if (sidebarAdminEmail) {
        sidebarAdminEmail.textContent =
            adminEmail;
    }

    if (sidebarAdminRole) {
        sidebarAdminRole.textContent =
            adminRole;
    }

    if (headerAdminName) {
        headerAdminName.textContent =
            adminName;
    }

    if (headerAdminRole) {
        headerAdminRole.textContent =
            adminRole === "Admin"
                ? "Administrator"
                : adminRole;
    }

    let currentFilter = "all";

    function applyFilters() {

        const searchValue =
            projectSearch
                ? projectSearch.value
                    .toLowerCase()
                    .trim()
                : "";

        projectCards.forEach(function (card) {

            const status =
                card.dataset.status || "";

            const searchableText =
                (
                    card.dataset.search ||
                    ""
                ).toLowerCase();

            const statusMatches =
                currentFilter === "all" ||
                status === currentFilter;

            const searchMatches =
                searchableText.includes(
                    searchValue
                );

            if (
                statusMatches &&
                searchMatches
            ) {
                card.classList.remove(
                    "hidden"
                );
            } else {
                card.classList.add(
                    "hidden"
                );
            }

        });

    }

    filterButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (item) {
                        item.classList.remove(
                            "active"
                        );
                    }
                );

                button.classList.add(
                    "active"
                );

                currentFilter =
                    button.dataset.filter || "all";

                applyFilters();

            }
        );

    });

    if (projectSearch) {

        projectSearch.addEventListener(
            "input",
            applyFilters
        );

    }

    const paginationButtons =
        document.querySelectorAll(
            ".stackly-pagination-button:not(.disabled)"
        );

    paginationButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    if (
                        button.classList.contains(
                            "active"
                        )
                    ) {
                        return;
                    }

                    paginationButtons.forEach(
                        function (item) {
                            item.classList.remove(
                                "active"
                            );
                        }
                    );

                    button.classList.add(
                        "active"
                    );

                }
            );

        }
    );

    if (newProjectButton) {

        newProjectButton.addEventListener(
            "click",
            function () {
                window.location.href =
                    "error.html";
            }
        );

    }

    if (logout) {

        logout.addEventListener(
            "click",
            function () {

                localStorage.removeItem(
                    "isLoggedIn"
                );

                localStorage.removeItem(
                    "userRole"
                );

                localStorage.removeItem(
                    "userEmail"
                );

                localStorage.removeItem(
                    "rememberMe"
                );

            }
        );

    }

    if (typeof gsap !== "undefined") {

        gsap.from(
            ".stackly-project-intro-copy",
            {
                opacity: 0,
                y: 24,
                duration: 0.7,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-new-project-button",
            {
                opacity: 0,
                y: 18,
                duration: 0.6,
                delay: 0.1,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-summary-card",
            {
                opacity: 0,
                y: 18,
                duration: 0.5,
                stagger: 0.07,
                delay: 0.12,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-project-card",
            {
                opacity: 0,
                y: 20,
                duration: 0.55,
                stagger: 0.08,
                delay: 0.18,
                ease: "power3.out"
            }
        );

    }

});