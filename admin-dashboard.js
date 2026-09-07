document.addEventListener("DOMContentLoaded", function () {

    const adminMenuButton =
        document.getElementById("adminMenuButton");

    const adminSidebar =
        document.getElementById("adminSidebar");

    const adminOverlay =
        document.getElementById("adminOverlay");

    const sidebarAdminEmail =
        document.getElementById("sidebarAdminEmail");

    const sidebarAdminRole =
        document.getElementById("sidebarAdminRole");

    const headerAdminName =
        document.getElementById("headerAdminName");

    const headerAdminRole =
        document.getElementById("headerAdminRole");

    const adminCurrentDate =
        document.getElementById("adminCurrentDate");

    const adminLogout =
        document.getElementById("adminLogout");

    const performanceCircle =
        document.getElementById("performanceCircle");

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
            "stackly-admin-menu-open"
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
            "stackly-admin-menu-open"
        );

        requestAnimationFrame(function () {

            window.scrollTo(
                0,
                savedScrollPosition
            );

        });
    }

    function openAdminSidebar() {

        if (
            !adminSidebar ||
            !adminOverlay ||
            !adminMenuButton
        ) {
            return;
        }

        adminSidebar.classList.add(
            "mobile-open"
        );

        adminOverlay.classList.add(
            "active"
        );

        lockPageScroll();

        adminMenuButton.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

        adminMenuButton.setAttribute(
            "aria-label",
            "Close navigation"
        );

        adminMenuButton.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    function closeAdminSidebar() {

        if (
            !adminSidebar ||
            !adminOverlay ||
            !adminMenuButton
        ) {
            return;
        }

        adminSidebar.classList.remove(
            "mobile-open"
        );

        adminOverlay.classList.remove(
            "active"
        );

        unlockPageScroll();

        adminMenuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        adminMenuButton.setAttribute(
            "aria-label",
            "Open navigation"
        );

        adminMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    if (adminMenuButton) {

        adminMenuButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    adminSidebar &&
                    adminSidebar.classList.contains(
                        "mobile-open"
                    );

                if (isOpen) {
                    closeAdminSidebar();
                } else {
                    openAdminSidebar();
                }

            }
        );

    }

    if (adminOverlay) {

        adminOverlay.addEventListener(
            "click",
            function () {
                closeAdminSidebar();
            }
        );

    }

    document
        .querySelectorAll(".stackly-admin-link")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (window.innerWidth <= 991) {
                        closeAdminSidebar();
                    }

                }
            );

        });

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 991) {
                closeAdminSidebar();
            }

        }
    );

    window.addEventListener(
        "pageshow",
        function () {
            closeAdminSidebar();
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

    function createAdminName(email) {

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
        createAdminName(displayEmail);

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
            adminName;

    }

    if (headerAdminRole) {

        headerAdminRole.textContent =
            displayRole === "Admin"
                ? "Administrator"
                : displayRole;

    }

    function updateDate() {

        if (!adminCurrentDate) {
            return;
        }

        const now =
            new Date();

        const formattedDate =
            now.toLocaleDateString(
                "en-US",
                {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );

        adminCurrentDate.textContent =
            formattedDate;
    }

    updateDate();

    const counters =
        document.querySelectorAll(
            ".admin-counter"
        );

    counters.forEach(function (counter) {

        const target =
            Number(
                counter.dataset.target || 0
            );

        let current = 0;

        const increment =
            Math.max(
                1,
                Math.ceil(target / 30)
            );

        const timer =
            setInterval(function () {

                current += increment;

                if (current >= target) {

                    current =
                        target;

                    clearInterval(timer);

                }

                counter.textContent =
                    current;

            }, 25);

    });

    if (performanceCircle) {

        const radius = 48;

        const circumference =
            2 *
            Math.PI *
            radius;

        const percentage = 87;

        const offset =
            circumference -
            (
                percentage / 100
            ) *
            circumference;

        performanceCircle.style.strokeDasharray =
            circumference;

        setTimeout(function () {

            performanceCircle.style.strokeDashoffset =
                offset;

            performanceCircle.style.transition =
                "stroke-dashoffset 1.2s ease";

        }, 250);

    }

    if (adminLogout) {

        adminLogout.addEventListener(
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
            ".stackly-admin-welcome-copy",
            {
                opacity: 0,
                y: 24,
                duration: 0.7,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-admin-date-card",
            {
                opacity: 0,
                y: 18,
                duration: 0.6,
                delay: 0.1,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-admin-stat-card",
            {
                opacity: 0,
                y: 20,
                duration: 0.55,
                stagger: 0.08,
                delay: 0.12,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-admin-card",
            {
                opacity: 0,
                y: 20,
                duration: 0.65,
                stagger: 0.08,
                delay: 0.2,
                ease: "power3.out"
            }
        );

        document
            .querySelectorAll(
                ".stackly-admin-stat-card, .stackly-quick-action"
            )
            .forEach(function (element) {

                element.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            element,
                            {
                                y: -3,
                                duration: 0.2,
                                overwrite: true
                            }
                        );

                    }
                );

                element.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            element,
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