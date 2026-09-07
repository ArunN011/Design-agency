document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("analyticsMenuButton");

    const sidebar =
        document.getElementById("analyticsSidebar");

    const overlay =
        document.getElementById("analyticsOverlay");

    const sidebarAdminEmail =
        document.getElementById("sidebarAdminEmail");

    const sidebarAdminRole =
        document.getElementById("sidebarAdminRole");

    const headerAdminName =
        document.getElementById("headerAdminName");

    const headerAdminRole =
        document.getElementById("headerAdminRole");

    const periodButton =
        document.getElementById("periodButton");

    const periodText =
        document.getElementById("periodText");

    const logout =
        document.getElementById("analyticsLogout");

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
            "stackly-analytics-menu-open"
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
            "stackly-analytics-menu-open"
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

                const isOpen =
                    sidebar &&
                    sidebar.classList.contains(
                        "mobile-open"
                    );

                if (isOpen) {
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
        .querySelectorAll(".stackly-analytics-link")
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

    const displayEmail =
        savedEmail || "admin@stackly.com";

    const displayRole =
        savedRole || "Admin";

    function createName(email) {

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

    const displayName =
        createName(displayEmail);

    if (sidebarAdminEmail) {
        sidebarAdminEmail.textContent =
            displayEmail;
    }

    if (sidebarAdminRole) {
        sidebarAdminRole.textContent =
            displayRole;
    }

    if (headerAdminName) {
        headerAdminName.textContent =
            displayName;
    }

    if (headerAdminRole) {
        headerAdminRole.textContent =
            displayRole === "Admin"
                ? "Administrator"
                : displayRole;
    }

    if (periodButton && periodText) {

        const periods = [
            "Last 30 Days",
            "Last 60 Days",
            "Last 90 Days"
        ];

        let currentPeriod = 0;

        periodButton.addEventListener(
            "click",
            function () {

                currentPeriod =
                    (currentPeriod + 1) %
                    periods.length;

                periodText.textContent =
                    periods[currentPeriod];

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

    function animateBars() {

        const bars =
            document.querySelectorAll(
                ".analytics-bar"
            );

        bars.forEach(function (bar) {

            const finalHeight =
                bar.style.height;

            bar.style.height =
                "0";

            requestAnimationFrame(function () {

                setTimeout(function () {

                    bar.style.height =
                        finalHeight;

                }, 180);

            });

        });

    }

    animateBars();

    if (typeof gsap !== "undefined") {

        gsap.from(
            ".stackly-analytics-intro-copy",
            {
                opacity: 0,
                y: 24,
                duration: 0.7,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-analytics-period",
            {
                opacity: 0,
                y: 18,
                duration: 0.6,
                delay: 0.1,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-analytics-stat",
            {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.07,
                delay: 0.12,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-analytics-card",
            {
                opacity: 0,
                y: 22,
                duration: 0.65,
                stagger: 0.08,
                delay: 0.2,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".revenue-line",
            {
                strokeDasharray: 1400,
                strokeDashoffset: 1400,
                duration: 1.5,
                delay: 0.35,
                ease: "power2.out"
            }
        );

        document
            .querySelectorAll(
                ".stackly-analytics-stat"
            )
            .forEach(function (card) {

                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            card,
                            {
                                y: -3,
                                duration: 0.2,
                                overwrite: true
                            }
                        );

                    }
                );

                card.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            card,
                            {
                                y: 0,
                                duration: 0.2,
                                overwrite: true
                            }
                        );

                    }
                );

            });

    }

});