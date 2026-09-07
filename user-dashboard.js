document.addEventListener("DOMContentLoaded", function () {

    const sidebar =
        document.getElementById("dashboardSidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    const menuButton =
        document.getElementById("mobileMenuButton");

    const sidebarLinks =
        document.querySelectorAll(
            ".stackly-sidebar-link"
        );

    const logoutButton =
        document.getElementById("logoutButton");


    let savedScrollPosition = 0;


    function lockPageScroll() {

        savedScrollPosition =
            window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top =
            `-${savedScrollPosition}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";

        document.documentElement.style.overflow =
            "hidden";

        document.body.classList.add(
            "stackly-sidebar-open"
        );

    }


    function unlockPageScroll() {

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";

        document.documentElement.style.overflow =
            "";

        document.body.classList.remove(
            "stackly-sidebar-open"
        );

        requestAnimationFrame(function () {

            window.scrollTo(
                0,
                savedScrollPosition
            );

        });

    }


    function openSidebar() {

        if (!sidebar || !menuButton) {
            return;
        }

        sidebar.classList.add(
            "mobile-open"
        );

        if (overlay) {
            overlay.classList.add(
                "active"
            );
        }

        lockPageScroll();

        menuButton.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

        menuButton.setAttribute(
            "aria-label",
            "Close navigation"
        );

        if (typeof gsap !== "undefined") {

            gsap.fromTo(
                sidebar,
                {
                    x: -25
                },
                {
                    x: 0,
                    duration: .35,
                    ease: "power3.out"
                }
            );

        }

    }


    function closeSidebar() {

        if (!sidebar || !menuButton) {
            return;
        }

        sidebar.classList.remove(
            "mobile-open"
        );

        if (overlay) {
            overlay.classList.remove(
                "active"
            );
        }

        menuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        menuButton.setAttribute(
            "aria-label",
            "Open navigation"
        );

        unlockPageScroll();

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
            function () {
                closeSidebar();
            }
        );

    }


    sidebarLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 991
                    ) {

                        closeSidebar();

                    }

                }
            );

        }
    );


    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 991 &&
                sidebar &&
                sidebar.classList.contains(
                    "mobile-open"
                )
            ) {

                closeSidebar();

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


    const emailName =
        displayEmail.split("@")[0];


    const formattedName =
        emailName
            .replace(/[0-9]/g, "")
            .replace(/[._-]/g, " ")
            .trim();


    const displayName =
        formattedName
            ? formattedName
                .split(" ")
                .filter(Boolean)
                .map(function (word) {

                    return (
                        word.charAt(0).toUpperCase() +
                        word.slice(1)
                    );

                })
                .join(" ")
            : displayEmail;


    const sidebarUserEmail =
        document.getElementById(
            "sidebarUserEmail"
        );

    const sidebarUserRole =
        document.getElementById(
            "sidebarUserRole"
        );

    const headerUserEmail =
        document.getElementById(
            "headerUserEmail"
        );

    const headerUserRole =
        document.getElementById(
            "headerUserRole"
        );

    const welcomeUser =
        document.getElementById(
            "welcomeUser"
        );

    const welcomeRole =
        document.getElementById(
            "welcomeRole"
        );

    const profileUserEmail =
        document.getElementById(
            "profileUserEmail"
        );

    const profileUserRole =
        document.getElementById(
            "profileUserRole"
        );

    const profileRole =
        document.getElementById(
            "profileRole"
        );


    if (sidebarUserEmail) {

        sidebarUserEmail.textContent =
            displayEmail;

    }


    if (sidebarUserRole) {

        sidebarUserRole.textContent =
            displayRole;

    }


    if (headerUserEmail) {

        headerUserEmail.textContent =
            displayEmail;

    }


    if (headerUserRole) {

        headerUserRole.textContent =
            displayRole;

    }


    if (welcomeUser) {

        welcomeUser.textContent =
            displayName;

    }


    if (welcomeRole) {

        welcomeRole.textContent =
            `${displayRole.toUpperCase()} WORKSPACE`;

    }


    if (profileUserEmail) {

        profileUserEmail.textContent =
            displayEmail;

    }


    if (profileUserRole) {

        profileUserRole.textContent =
            displayRole;

    }


    if (profileRole) {

        profileRole.textContent =
            displayRole;

    }


    function updateDate() {

        const dateElement =
            document.getElementById(
                "currentDate"
            );

        if (!dateElement) {
            return;
        }

        const now =
            new Date();

        const dateText =
            now.toLocaleDateString(
                "en-US",
                {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );

        dateElement.textContent =
            dateText.toUpperCase();

    }


    updateDate();


    if (logoutButton) {

        logoutButton.addEventListener(
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

        const timeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        timeline

            .from(
                ".stackly-dashboard-header",
                {
                    y: -25,
                    opacity: 1,
                    duration: .5
                }
            )

            .from(
                ".stackly-welcome-card",
                {
                    y: 35,
                    opacity: 1,
                    duration: .75
                },
                "-=.2"
            )

            .from(
                ".stackly-stat-card",
                {
                    y: 25,
                    opacity: 1,
                    duration: .45,
                    stagger: .08
                },
                "-=.35"
            )

            .from(
                ".stackly-dashboard-panel",
                {
                    y: 25,
                    opacity: 1,
                    duration: .5,
                    stagger: .09
                },
                "-=.3"
            )

            .from(
                ".stackly-quick-card",
                {
                    y: 20,
                    opacity: 1,
                    duration: .4,
                    stagger: .07
                },
                "-=.25"
            );


        gsap.to(
            ".stackly-welcome-core",
            {
                rotation: 360,
                duration: 14,
                repeat: -1,
                ease: "none"
            }
        );


        gsap.to(
            ".stackly-welcome-orbit.orbit-one",
            {
                rotation: 360,
                duration: 18,
                repeat: -1,
                ease: "none"
            }
        );


        gsap.to(
            ".stackly-welcome-orbit.orbit-two",
            {
                rotation: -360,
                duration: 13,
                repeat: -1,
                ease: "none"
            }
        );


        gsap.to(
            ".stackly-welcome-core",
            {
                scale: 1.05,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".stackly-welcome-node",
            {
                y: -8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                stagger: .25,
                ease: "sine.inOut"
            }
        );


        document
            .querySelectorAll(".stackly-stat-card")
            .forEach(function (card) {

                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            card.querySelector(
                                ".stackly-stat-icon"
                            ),
                            {
                                rotation: 8,
                                scale: 1.08,
                                duration: .3,
                                ease: "power2.out"
                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            card.querySelector(
                                ".stackly-stat-icon"
                            ),
                            {
                                rotation: 0,
                                scale: 1,
                                duration: .3,
                                ease: "power2.out"
                            }
                        );

                    }
                );

            });


        document
            .querySelectorAll(".stackly-quick-card")
            .forEach(function (card) {

                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            card.querySelector(
                                ".stackly-quick-icon"
                            ),
                            {
                                rotation: -6,
                                scale: 1.08,
                                duration: .3,
                                ease: "power2.out"
                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            card.querySelector(
                                ".stackly-quick-icon"
                            ),
                            {
                                rotation: 0,
                                scale: 1,
                                duration: .3,
                                ease: "power2.out"
                            }
                        );

                    }
                );

            });

    }


    window.addEventListener(
        "pageshow",
        function () {

            if (
                sidebar &&
                sidebar.classList.contains(
                    "mobile-open"
                )
            ) {

                closeSidebar();

            }

        }
    );

});