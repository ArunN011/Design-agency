const header = document.getElementById("agencyHeader");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");

const mobileLabel = document.querySelector(".mobile-label");
const mobileTopLine = document.querySelector(".mobile-top-line");
const mobileLinks = document.querySelectorAll(".mobile-link");
const mobileActions = document.querySelector(".mobile-actions");
const mobileFooter = document.querySelector(".mobile-footer");

let isMenuOpen = false;
let savedScrollPosition = 0;
let activeTimeline = null;

if (mobileMenu) {
    gsap.set(mobileMenu, {
        x: "100%",
        autoAlpha: 0
    });
}

if (mobileOverlay) {
    gsap.set(mobileOverlay, {
        autoAlpha: 0
    });
}

function resetMobileMenuElements() {

    if (mobileLabel) {
        gsap.set(mobileLabel, {
            y: 0,
            opacity: 1
        });
    }

    if (mobileTopLine) {
        gsap.set(mobileTopLine, {
            scaleX: 1,
            opacity: 1
        });
    }

    if (mobileLinks.length) {
        gsap.set(mobileLinks, {
            y: 0,
            x: 0,
            opacity: 1
        });
    }

    if (mobileActions) {
        gsap.set(mobileActions, {
            y: 0,
            opacity: 1
        });
    }

    if (mobileFooter) {
        gsap.set(mobileFooter, {
            y: 0,
            opacity: 1
        });
    }
}

function lockPageScroll() {

    savedScrollPosition = window.scrollY;

    const scrollbarWidth =
        window.innerWidth -
        document.documentElement.clientWidth;

    document.body.style.paddingRight =
        scrollbarWidth > 0
            ? `${scrollbarWidth}px`
            : "";

    document.body.style.position = "fixed";
    document.body.style.top = `-${savedScrollPosition}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    document.documentElement.style.overflow = "hidden";
}

function unlockPageScroll() {

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    document.documentElement.style.overflow = "";

    requestAnimationFrame(function () {
        window.scrollTo(
            0,
            savedScrollPosition
        );
    });
}

function openMobileMenu() {

    if (isMenuOpen) {
        return;
    }

    if (activeTimeline) {
        activeTimeline.kill();
        activeTimeline = null;
    }

    isMenuOpen = true;

    if (header) {
        header.classList.add("menu-active");
    }

    if (menuButton) {

        menuButton.classList.add("open");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Close navigation menu"
        );
    }

    if (mobileMenu) {

        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );

        mobileMenu.scrollTop = 0;
    }

    document.body.classList.add(
        "menu-is-open"
    );

    lockPageScroll();

    resetMobileMenuElements();

    if (mobileMenu) {
        gsap.set(mobileMenu, {
            visibility: "visible",
            x: "100%",
            autoAlpha: 1
        });
    }

    if (mobileOverlay) {
        gsap.set(mobileOverlay, {
            visibility: "visible",
            autoAlpha: 0
        });
    }

    activeTimeline = gsap.timeline();

    if (mobileOverlay) {

        activeTimeline.to(
            mobileOverlay,
            {
                autoAlpha: 1,
                duration: 0.35,
                ease: "power2.out"
            }
        );
    }

    if (mobileMenu) {

        activeTimeline.to(
            mobileMenu,
            {
                x: "0%",
                duration: 0.7,
                ease: "expo.out"
            },
            "-=.15"
        );
    }

    if (mobileLabel) {

        activeTimeline.from(
            mobileLabel,
            {
                y: 20,
                opacity: 0,
                duration: 0.35,
                ease: "power3.out"
            },
            "-=.25"
        );
    }

    if (mobileTopLine) {

        activeTimeline.from(
            mobileTopLine,
            {
                scaleX: 0,
                duration: 0.4,
                ease: "power3.out"
            },
            "-=.2"
        );
    }

    if (mobileLinks.length) {

        activeTimeline.from(
            mobileLinks,
            {
                y: 35,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power4.out"
            },
            "-=.1"
        );
    }

    if (mobileActions) {

        activeTimeline.from(
            mobileActions,
            {
                y: 25,
                opacity: 0,
                duration: 0.4,
                ease: "power3.out"
            },
            "-=.15"
        );
    }

    if (mobileFooter) {

        activeTimeline.from(
            mobileFooter,
            {
                y: 15,
                opacity: 0,
                duration: 0.35,
                ease: "power3.out"
            },
            "-=.1"
        );
    }
}

function closeMobileMenu() {

    if (!isMenuOpen) {
        return;
    }

    if (activeTimeline) {
        activeTimeline.kill();
    }

    isMenuOpen = false;

    if (menuButton) {

        menuButton.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }

    if (mobileMenu) {

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );
    }

    activeTimeline = gsap.timeline({
        onComplete: function () {

            if (mobileMenu) {

                gsap.set(
                    mobileMenu,
                    {
                        visibility: "hidden",
                        x: "100%",
                        autoAlpha: 0
                    }
                );
            }

            if (mobileOverlay) {

                gsap.set(
                    mobileOverlay,
                    {
                        visibility: "hidden",
                        autoAlpha: 0
                    }
                );
            }

            resetMobileMenuElements();

            if (header) {
                header.classList.remove(
                    "menu-active"
                );
            }

            document.body.classList.remove(
                "menu-is-open"
            );

            unlockPageScroll();

            activeTimeline = null;
        }
    });

    if (mobileLinks.length) {

        activeTimeline.to(
            mobileLinks,
            {
                y: 15,
                opacity: 0,
                duration: 0.22,
                stagger: 0.025,
                ease: "power2.in"
            }
        );
    }

    if (mobileMenu) {

        activeTimeline.to(
            mobileMenu,
            {
                x: "100%",
                duration: 0.5,
                ease: "power3.inOut"
            },
            "-=.05"
        );
    }

    if (mobileOverlay) {

        activeTimeline.to(
            mobileOverlay,
            {
                autoAlpha: 0,
                duration: 0.3
            },
            "-=.25"
        );
    }
}

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            if (isMenuOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        }
    );
}

if (mobileOverlay) {

    mobileOverlay.addEventListener(
        "click",
        function () {
            closeMobileMenu();
        }
    );
}

mobileLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {
                closeMobileMenu();
            }
        );
    }
);

document
    .querySelectorAll(".mobile-actions a")
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {
                    closeMobileMenu();
                }
            );
        }
    );

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            isMenuOpen
        ) {
            closeMobileMenu();
        }
    }
);

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 991 &&
            isMenuOpen
        ) {
            closeMobileMenu();
        }
    }
);

window.addEventListener(
    "scroll",
    function () {

        if (
            !isMenuOpen &&
            header
        ) {

            if (window.scrollY > 35) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    },
    {
        passive: true
    }
);

window.addEventListener(
    "pageshow",
    function () {

        isMenuOpen = false;

        if (activeTimeline) {
            activeTimeline.kill();
            activeTimeline = null;
        }

        if (header) {
            header.classList.remove(
                "menu-active"
            );
        }

        if (menuButton) {

            menuButton.classList.remove(
                "open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }

        if (mobileMenu) {

            mobileMenu.setAttribute(
                "aria-hidden",
                "true"
            );

            gsap.set(
                mobileMenu,
                {
                    visibility: "hidden",
                    x: "100%",
                    autoAlpha: 0
                }
            );
        }

        if (mobileOverlay) {

            gsap.set(
                mobileOverlay,
                {
                    visibility: "hidden",
                    autoAlpha: 0
                }
            );
        }

        resetMobileMenuElements();

        document.body.classList.remove(
            "menu-is-open"
        );

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";

        document.documentElement.style.overflow = "";
    }
);

const navbarIntro =
    gsap.timeline({
        defaults: {
            ease: "power4.out"
        }
    });

navbarIntro
    .from(
        ".agency-logo",
        {
            y: -20,
            opacity: 0,
            duration: 0.8
        }
    )
    .from(
        ".desktop-menu .nav-link",
        {
            y: -18,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08
        },
        "-=.5"
    )
    .from(
        ".desktop-actions",
        {
            y: -18,
            opacity: 0,
            duration: 0.55
        },
        "-=.35"
    )
    .from(
        ".menu-button",
        {
            scale: 0.7,
            opacity: 0,
            duration: 0.5
        },
        "-=.4"
    );

document
    .querySelectorAll(
        ".nav-link, .login-link, .register-link, .agency-logo"
    )
    .forEach(
        function (element) {

            element.addEventListener(
                "mouseenter",
                function () {

                    if (
                        window.matchMedia(
                            "(pointer:fine)"
                        ).matches
                    ) {

                        gsap.to(
                            element,
                            {
                                y: -2,
                                duration: 0.3,
                                ease: "power3.out"
                            }
                        );
                    }
                }
            );

            element.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        element,
                        {
                            y: 0,
                            duration: 0.4,
                            ease: "power3.out"
                        }
                    );
                }
            );
        }
    );