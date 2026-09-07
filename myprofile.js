document.addEventListener("DOMContentLoaded", function () {

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const dashboardSidebar =
        document.getElementById("dashboardSidebar");

    const sidebarOverlay =
        document.getElementById("sidebarOverlay");

    const sidebarUserEmail =
        document.getElementById("sidebarUserEmail");

    const sidebarUserRole =
        document.getElementById("sidebarUserRole");

    const headerUserName =
        document.getElementById("headerUserName");

    const headerUserRole =
        document.getElementById("headerUserRole");

    const profileUserName =
        document.getElementById("profileUserName");

    const profileUserEmail =
        document.getElementById("profileUserEmail");

    const profileEmailField =
        document.getElementById("profileEmailField");

    const profileRole =
        document.getElementById("profileRole");

    const logoutLink =
        document.getElementById("logoutLink");

    const changePasswordButton =
        document.getElementById("changePasswordButton");

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
            "stackly-menu-open"
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
            "stackly-menu-open"
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
            !dashboardSidebar ||
            !sidebarOverlay ||
            !mobileMenuButton
        ) {
            return;
        }

        dashboardSidebar.classList.add(
            "mobile-open"
        );

        sidebarOverlay.classList.add(
            "active"
        );

        lockPageScroll();

        mobileMenuButton.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

        mobileMenuButton.setAttribute(
            "aria-label",
            "Close navigation"
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    function closeSidebar(restoreScroll = true) {

        if (
            !dashboardSidebar ||
            !sidebarOverlay ||
            !mobileMenuButton
        ) {
            return;
        }

        const wasOpen =
            dashboardSidebar.classList.contains(
                "mobile-open"
            );

        dashboardSidebar.classList.remove(
            "mobile-open"
        );

        sidebarOverlay.classList.remove(
            "active"
        );

        if (
            wasOpen &&
            restoreScroll
        ) {
            unlockPageScroll();
        } else {

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
                "stackly-menu-open"
            );

        }

        mobileMenuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        mobileMenuButton.setAttribute(
            "aria-label",
            "Open navigation"
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    if (mobileMenuButton) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                if (
                    dashboardSidebar &&
                    dashboardSidebar.classList.contains(
                        "mobile-open"
                    )
                ) {

                    closeSidebar(true);

                } else {

                    openSidebar();

                }

            }
        );

    }

    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            function () {

                closeSidebar(true);

            }
        );

    }

    document
        .querySelectorAll(".stackly-sidebar-link")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 991 &&
                        dashboardSidebar &&
                        dashboardSidebar.classList.contains(
                            "mobile-open"
                        )
                    ) {
                        closeSidebar(true);
                    }

                }
            );

        });

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 991) {

                closeSidebar(false);

            }

        }
    );

    const savedEmail =
        localStorage.getItem(
            "userEmail"
        );

    const savedRole =
        localStorage.getItem(
            "userRole"
        );

    const displayEmail =
        savedEmail ||
        "user@example.com";

    const displayRole =
        savedRole ||
        "User";

    function createDisplayName(email) {

        if (
            !email ||
            !email.includes("@")
        ) {
            return email || "User";
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
        createDisplayName(
            displayEmail
        );

    if (sidebarUserEmail) {

        sidebarUserEmail.textContent =
            displayEmail;

    }

    if (sidebarUserRole) {

        sidebarUserRole.textContent =
            displayRole;

    }

    if (headerUserName) {

        headerUserName.textContent =
            displayName;

    }

    if (headerUserRole) {

        headerUserRole.textContent =
            displayRole;

    }

    if (profileUserName) {

        profileUserName.textContent =
            displayName;

    }

    if (profileUserEmail) {

        profileUserEmail.textContent =
            displayEmail;

    }

    if (profileEmailField) {

        profileEmailField.textContent =
            displayEmail;

    }

    if (profileRole) {

        profileRole.textContent =
            displayRole;

    }

    const preferenceInputs =
        document.querySelectorAll(
            ".stackly-toggle input"
        );

    preferenceInputs.forEach(
        function (input) {

            const storageKey =
                "stackly_" +
                input.id;

            const savedValue =
                localStorage.getItem(
                    storageKey
                );

            if (savedValue !== null) {

                input.checked =
                    savedValue === "true";

            }

            input.addEventListener(
                "change",
                function () {

                    localStorage.setItem(
                        storageKey,
                        String(input.checked)
                    );

                }
            );

        }
    );

    if (changePasswordButton) {

        changePasswordButton.addEventListener(
            "click",
            function () {

                sessionStorage.setItem(
                    "myProfileScrollPosition",
                    String(window.scrollY)
                );

            }
        );

    }

    if (logoutLink) {

        logoutLink.addEventListener(
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

                sessionStorage.removeItem(
                    "myProfileScrollPosition"
                );

            }
        );

    }

    function restoreProfileScroll() {

        const storedScroll =
            sessionStorage.getItem(
                "myProfileScrollPosition"
            );

        if (storedScroll === null) {
            return;
        }

        const scrollPosition =
            Number(storedScroll);

        requestAnimationFrame(function () {

            requestAnimationFrame(function () {

                window.scrollTo(
                    0,
                    scrollPosition
                );

                sessionStorage.removeItem(
                    "myProfileScrollPosition"
                );

            });

        });

    }

    window.addEventListener(
        "pageshow",
        function () {

            closeSidebar(false);

            restoreProfileScroll();

        }
    );

    if (typeof gsap !== "undefined") {

        gsap.from(
            ".stackly-profile-intro",
            {
                opacity: 0,
                y: 24,
                duration: 0.7,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-profile-card",
            {
                opacity: 0,
                y: 22,
                duration: 0.7,
                stagger: 0.1,
                delay: 0.12,
                ease: "power3.out"
            }
        );

        document
            .querySelectorAll(
                ".stackly-security-button"
            )
            .forEach(function (button) {

                button.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            button,
                            {
                                y: -2,
                                duration: 0.2,
                                overwrite: true
                            }
                        );

                    }
                );

                button.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            button,
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