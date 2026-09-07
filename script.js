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

// NAVBAR END






gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
    ignoreMobileResize: true
});

const creativeHero =
    document.getElementById(
        "creativeHero"
    );

if (creativeHero) {

    const creativeCopy =
        creativeHero.querySelector(
            ".creative-copy"
        );

    const creativeSmallTitle =
        creativeHero.querySelector(
            ".creative-small-title"
        );

    const creativeTitle =
        creativeHero.querySelectorAll(
            ".creative-title span"
        );

    const creativeDescription =
        creativeHero.querySelector(
            ".creative-description"
        );

    const creativeButton =
        creativeHero.querySelector(
            ".creative-button"
        );

    const creativeVisual =
        creativeHero.querySelector(
            ".creative-visual"
        );

    const creativeBack =
        creativeHero.querySelector(
            ".creative-card-back"
        );

    const creativeMiddle =
        creativeHero.querySelector(
            ".creative-card-middle"
        );

    const creativeFront =
        creativeHero.querySelector(
            ".creative-card-front"
        );

    const creativeOrbOne =
        creativeHero.querySelector(
            ".creative-orb-one"
        );

    const creativeOrbTwo =
        creativeHero.querySelector(
            ".creative-orb-two"
        );

    const creativeOrbThree =
        creativeHero.querySelector(
            ".creative-orb-three"
        );

    const creativeRingOne =
        creativeHero.querySelector(
            ".creative-ring-one"
        );

    const creativeRingTwo =
        creativeHero.querySelector(
            ".creative-ring-two"
        );

    gsap.set(
        [
            creativeSmallTitle,
            creativeTitle,
            creativeDescription,
            creativeButton
        ],
        {
            opacity: 0,
            y: 35
        }
    );

    gsap.set(
        creativeBack,
        {
            opacity: 0,
            x: -90,
            y: 40,
            rotationZ: -20,
            scale: 0.78
        }
    );

    gsap.set(
        creativeMiddle,
        {
            opacity: 0,
            y: 70,
            rotationZ: 12,
            scale: 0.84
        }
    );

    gsap.set(
        creativeFront,
        {
            opacity: 0,
            x: 90,
            y: 40,
            rotationZ: 20,
            scale: 0.82
        }
    );

    gsap.set(
        [
            creativeOrbOne,
            creativeOrbTwo,
            creativeOrbThree,
            creativeRingOne,
            creativeRingTwo
        ],
        {
            opacity: 0
        }
    );

    const creativeIntro =
        gsap.timeline({
            defaults: {
                ease: "power4.out"
            }
        });

    creativeIntro
        .to(
            creativeSmallTitle,
            {
                opacity: 1,
                y: 0,
                duration: 0.55
            }
        )
        .to(
            creativeTitle,
            {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.12
            },
            "-=.25"
        )
        .to(
            creativeDescription,
            {
                opacity: 1,
                y: 0,
                duration: 0.6
            },
            "-=.35"
        )
        .to(
            creativeButton,
            {
                opacity: 1,
                y: 0,
                duration: 0.55
            },
            "-=.3"
        )
        .to(
            creativeBack,
            {
                opacity: 1,
                x: 0,
                y: 0,
                rotationZ: -11,
                scale: 0.86,
                duration: 0.9,
                ease: "expo.out"
            },
            "-=.5"
        )
        .to(
            creativeMiddle,
            {
                opacity: 1,
                y: 0,
                rotationZ: 5,
                scale: 0.94,
                duration: 0.9,
                ease: "expo.out"
            },
            "-=.72"
        )
        .to(
            creativeFront,
            {
                opacity: 1,
                x: 0,
                y: 0,
                rotationZ: 11,
                scale: 1,
                duration: 1,
                ease: "expo.out"
            },
            "-=.76"
        )
        .to(
            [
                creativeOrbOne,
                creativeOrbTwo,
                creativeOrbThree,
                creativeRingOne,
                creativeRingTwo
            ],
            {
                opacity: 1,
                duration: 0.7,
                stagger: 0.08
            },
            "-=.55"
        );

    gsap.to(
        creativeBack,
        {
            y: -30,
            x: -20,
            rotationZ: -14,
            ease: "none",
            scrollTrigger: {
                trigger: creativeHero,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        }
    );

    gsap.to(
        creativeMiddle,
        {
            y: -70,
            x: 5,
            rotationZ: 8,
            ease: "none",
            scrollTrigger: {
                trigger: creativeHero,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4
            }
        }
    );

    gsap.to(
        creativeFront,
        {
            y: -115,
            x: 25,
            rotationZ: 14,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
                trigger: creativeHero,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.6
            }
        }
    );

    gsap.to(
        creativeTitle,
        {
            y: -55,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: {
                trigger: creativeHero,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );

    gsap.to(
        creativeOrbOne,
        {
            x: 100,
            y: -80,
            rotation: 160,
            ease: "none",
            scrollTrigger: {
                trigger: creativeHero,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        }
    );

    gsap.to(
        creativeOrbTwo,
        {
            x: -90,
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: creativeHero,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.8
            }
        }
    );

    gsap.to(
        creativeOrbThree,
        {
            x: 70,
            y: -40,
            ease: "none",
            scrollTrigger: {
                trigger: creativeHero,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        }
    );

    gsap.to(
        creativeRingOne,
        {
            rotationZ: 12,
            rotationY: 18,
            ease: "none",
            scrollTrigger: {
                trigger: creativeHero,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        }
    );

    gsap.to(
        creativeRingTwo,
        {
            rotationZ: -18,
            rotationY: -20,
            ease: "none",
            scrollTrigger: {
                trigger: creativeHero,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        }
    );

    if (
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        window.addEventListener(
            "mousemove",
            function (event) {

                mouseX =
                    (
                        event.clientX /
                        window.innerWidth -
                        0.5
                    ) * 2;

                mouseY =
                    (
                        event.clientY /
                        window.innerHeight -
                        0.5
                    ) * 2;
            }
        );

        function creativeMouseLoop() {

            currentX +=
                (
                    mouseX -
                    currentX
                ) * 0.055;

            currentY +=
                (
                    mouseY -
                    currentY
                ) * 0.055;

            if (
                !ScrollTrigger.isScrolling()
            ) {

                gsap.set(
                    creativeVisual,
                    {
                        rotateY:
                            currentX * 3.5,
                        rotateX:
                            currentY * -2.5
                    }
                );

                gsap.set(
                    creativeBack,
                    {
                        x:
                            currentX * -12
                    }
                );

                gsap.set(
                    creativeMiddle,
                    {
                        x:
                            currentX * 6
                    }
                );

                gsap.set(
                    creativeFront,
                    {
                        x:
                            currentX * 12
                    }
                );

                gsap.set(
                    creativeOrbOne,
                    {
                        x:
                            currentX * 20,
                        y:
                            currentY * 15
                    }
                );

                gsap.set(
                    creativeOrbThree,
                    {
                        x:
                            currentX * -14,
                        y:
                            currentY * 10
                    }
                );
            }

            requestAnimationFrame(
                creativeMouseLoop
            );
        }

        creativeMouseLoop();
    }

    ScrollTrigger.refresh();
}

// HERO END


const storySection =
    document.querySelector(
        ".stackly-story-section"
    );

if (storySection) {

    const heading =
        storySection.querySelector(
            ".story-heading"
        );

    const values =
        storySection.querySelectorAll(
            ".value-item"
        );

    const cards =
        storySection.querySelectorAll(
            ".story-card"
        );

    const chromeObject =
        storySection.querySelector(
            ".chrome-object"
        );

    const bgGlowOne =
        storySection.querySelector(
            ".sa-glow-1"
        );

    const bgGlowTwo =
        storySection.querySelector(
            ".sa-glow-2"
        );

    gsap.set(
        heading,
        {
            y: 70,
            opacity: 0
        }
    );

    gsap.set(
        values,
        {
            y: 30,
            opacity: 0
        }
    );

    gsap.set(
        cards,
        {
            y: 90,
            opacity: 0
        }
    );

    const reveal =
        gsap.timeline({

            scrollTrigger: {
                trigger:
                    storySection,

                start:
                    "top 72%",

                once:
                    true
            }
        });

    reveal
        .to(
            heading,
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out"
            }
        )
        .to(
            values,
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.09,
                ease: "power4.out"
            },
            "-=.55"
        )
        .to(
            cards,
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.out"
            },
            "-=.4"
        );

    const counters =
        storySection.querySelectorAll(
            ".counter"
        );

    counters.forEach(
        function (counter) {

            const target =
                Number(
                    counter.dataset.target
                );

            const value = {
                number: 0
            };

            gsap.to(
                value,
                {
                    number: target,
                    duration: 1.7,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger:
                            counter,

                        start:
                            "top 82%",

                        once:
                            true
                    },

                    onUpdate:
                        function () {

                            counter.textContent =
                                Math.round(
                                    value.number
                                );
                        }
                }
            );
        }
    );

    cards.forEach(
        function (card) {

            card.addEventListener(
                "mousemove",
                function (event) {

                    if (
                        !window.matchMedia(
                            "(pointer:fine)"
                        ).matches
                    ) {
                        return;
                    }

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const rotateY =
                        (
                            (x / rect.width) -
                            0.5
                        ) * 8;

                    const rotateX =
                        (
                            (y / rect.height) -
                            0.5
                        ) * -8;

                    gsap.to(
                        card,
                        {
                            rotationX:
                                rotateX,

                            rotationY:
                                rotateY,

                            transformPerspective:
                                1000,

                            duration:
                                0.45,

                            ease:
                                "power3.out",

                            overwrite:
                                true
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
                            rotationX: 0,
                            rotationY: 0,
                            duration: 0.7,
                            ease:
                                "elastic.out(1,.5)",
                            overwrite:
                                true
                        }
                    );
                }
            );
        }
    );

    if (
        chromeObject &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        window.addEventListener(
            "mousemove",
            function (event) {

                mouseX =
                    (
                        event.clientX /
                        window.innerWidth -
                        0.5
                    ) * 2;

                mouseY =
                    (
                        event.clientY /
                        window.innerHeight -
                        0.5
                    ) * 2;
            }
        );

        function chromeMouse() {

            currentX +=
                (
                    mouseX -
                    currentX
                ) * 0.06;

            currentY +=
                (
                    mouseY -
                    currentY
                ) * 0.06;

            gsap.to(
                chromeObject,
                {
                    rotateY:
                        currentX * 12,

                    rotateX:
                        18 +
                        currentY * -8,

                    duration:
                        0.6,

                    overwrite:
                        true
                }
            );

            requestAnimationFrame(
                chromeMouse
            );
        }

        chromeMouse();
    }

    gsap.to(
        cards,
        {
            y: -25,
            stagger: 0.08,
            ease: "none",

            scrollTrigger: {
                trigger:
                    storySection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.5
            }
        }
    );

    gsap.to(
        ".story-heading",
        {
            y: -40,
            ease: "none",

            scrollTrigger: {
                trigger:
                    storySection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1
            }
        }
    );

    gsap.to(
        chromeObject,
        {
            y: -50,
            scale: 1.15,
            ease: "none",

            scrollTrigger: {
                trigger:
                    storySection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1
            }
        }
    );

    gsap.to(
        ".story-card-light",
        {
            x: -12,
            ease: "none",

            scrollTrigger: {
                trigger:
                    storySection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.3
            }
        }
    );

    gsap.to(
        ".story-card-lime",
        {
            x: 10,
            ease: "none",

            scrollTrigger: {
                trigger:
                    storySection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.3
            }
        }
    );

    gsap.to(
        ".story-card-dark",
        {
            x: 18,
            ease: "none",

            scrollTrigger: {
                trigger:
                    storySection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.5
            }
        }
    );

    gsap.to(
        ".story-card-object",
        {
            x: -15,
            ease: "none",

            scrollTrigger: {
                trigger:
                    storySection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.4
            }
        }
    );

    gsap.to(
        ".story-label",
        {
            x: 8,
            ease: "none",

            scrollTrigger: {
                trigger:
                    storySection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1
            }
        }
    );

    if (
        bgGlowOne &&
        bgGlowTwo
    ) {

        gsap.to(
            bgGlowOne,
            {
                x: 120,
                y: 100,
                scale: 1.2,
                ease: "none",

                scrollTrigger: {
                    trigger:
                        storySection,

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        2
                }
            }
        );

        gsap.to(
            bgGlowTwo,
            {
                x: -100,
                y: -100,
                scale: 1.25,
                ease: "none",

                scrollTrigger: {
                    trigger:
                        storySection,

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        2
                }
            }
        );
    }

    ScrollTrigger.refresh();
}

// STORY / ABOUT END


const servicesSection =
    document.querySelector(
        ".stackly-services"
    );

if (servicesSection) {

    const header =
        servicesSection.querySelector(
            ".services-header"
        );

    const label =
        servicesSection.querySelector(
            ".services-label"
        );

    const heading =
        servicesSection.querySelector(
            ".services-heading"
        );

    const moreButton =
        servicesSection.querySelector(
            ".services-more"
        );

    const cards =
        servicesSection.querySelectorAll(
            ".service-card"
        );

    const visualMarketing =
        servicesSection.querySelector(
            ".visual-marketing"
        );

    const visualProduct =
        servicesSection.querySelector(
            ".visual-product"
        );

    const visualSeo =
        servicesSection.querySelector(
            ".visual-seo"
        );

    const visualWeb =
        servicesSection.querySelector(
            ".visual-web"
        );

    gsap.set(
        label,
        {
            y: 25,
            opacity: 1
        }
    );

    gsap.set(
        heading,
        {
            y: 80,
            opacity: 1
        }
    );

    gsap.set(
        moreButton,
        {
            y: 25,
            opacity: 1
        }
    );

    gsap.set(
        cards,
        {
            y: 100,
            opacity: 1
        }
    );

    const reveal =
        gsap.timeline({

            scrollTrigger: {
                trigger:
                    servicesSection,

                start:
                    "top 72%",

                once:
                    true
            }
        });

    reveal
        .to(
            label,
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out"
            }
        )
        .to(
            heading,
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out"
            },
            "-=.35"
        )
        .to(
            moreButton,
            {
                y: 0,
                opacity: 1,
                duration: 0.55,
                ease: "power3.out"
            },
            "-=.6"
        )
        .to(
            cards,
            {
                y: 0,
                opacity: 1,
                duration: 0.85,
                stagger: 0.13,
                ease: "power4.out"
            },
            "-=.4"
        );

    cards.forEach(
        function (card) {

            card.addEventListener(
                "mousemove",
                function (event) {

                    if (
                        !window.matchMedia(
                            "(pointer:fine)"
                        ).matches
                    ) {
                        return;
                    }

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const rotateY =
                        (
                            (x / rect.width) -
                            0.5
                        ) * 9;

                    const rotateX =
                        (
                            (y / rect.height) -
                            0.5
                        ) * -9;

                    card.style.setProperty(
                        "--mouse-x",
                        `${x}px`
                    );

                    card.style.setProperty(
                        "--mouse-y",
                        `${y}px`
                    );

                    gsap.to(
                        card,
                        {
                            rotateX:
                                rotateX,

                            rotateY:
                                rotateY,

                            y:
                                -8,

                            transformPerspective:
                                1200,

                            duration:
                                0.45,

                            ease:
                                "power3.out",

                            overwrite:
                                true
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
                            rotateX: 0,
                            rotateY: 0,
                            y: 0,
                            duration: 0.7,
                            ease:
                                "elastic.out(1,.55)",
                            overwrite:
                                true
                        }
                    );
                }
            );
        }
    );

    const floats = [
        visualMarketing,
        visualProduct,
        visualSeo,
        visualWeb
    ];

    floats.forEach(
        function (visual, index) {

            if (!visual) {
                return;
            }

            gsap.to(
                visual,
                {
                    y:
                        index % 2 === 0
                            ? -14
                            : -10,

                    rotationZ:
                        index % 2 === 0
                            ? 2
                            : -2,

                    duration:
                        3.5 +
                        index * 0.4,

                    repeat:
                        -1,

                    yoyo:
                        true,

                    ease:
                        "sine.inOut"
                }
            );
        }
    );

    gsap.to(
        visualMarketing,
        {
            y: -35,
            x: -10,
            ease: "none",

            scrollTrigger: {
                trigger:
                    servicesSection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.3
            }
        }
    );

    gsap.to(
        visualProduct,
        {
            y: -55,
            x: 12,
            rotation: 4,
            ease: "none",

            scrollTrigger: {
                trigger:
                    servicesSection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.6
            }
        }
    );

    gsap.to(
        visualSeo,
        {
            y: -42,
            x: -8,
            rotation: -3,
            ease: "none",

            scrollTrigger: {
                trigger:
                    servicesSection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.4
            }
        }
    );

    gsap.to(
        visualWeb,
        {
            y: -50,
            x: 15,
            rotation: 4,
            ease: "none",

            scrollTrigger: {
                trigger:
                    servicesSection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.5
            }
        }
    );

    gsap.to(
        heading,
        {
            y: -40,
            ease: "none",

            scrollTrigger: {
                trigger:
                    servicesSection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1
            }
        }
    );

    gsap.to(
        label,
        {
            x: 12,
            ease: "none",

            scrollTrigger: {
                trigger:
                    servicesSection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1
            }
        }
    );

    gsap.to(
        cards,
        {
            y: -20,
            ease: "none",
            stagger: 0.1,

            scrollTrigger: {
                trigger:
                    servicesSection,

                start:
                    "top bottom",

                end:
                    "bottom top",

                scrub:
                    1.2
            }
        }
    );

    ScrollTrigger.refresh();
}

// SERVICES END




const whatWeDo =
    document.getElementById("whatWeDo");

if (whatWeDo) {

    const topElements =
        whatWeDo.querySelectorAll(
            ".what-we-do-top, .what-we-do-heading, .what-we-do-intro"
        );

    const services =
        whatWeDo.querySelectorAll(
            ".what-service"
        );

    const outline =
        whatWeDo.querySelector(
            ".what-we-do-outline"
        );

    const glow =
        whatWeDo.querySelector(
            ".what-we-do-glow"
        );

    gsap.set(
        topElements,
        {
            y: 70,
            opacity: 0
        }
    );

    gsap.set(
        services,
        {
            y: 90,
            opacity: 0,
            rotateX: 8
        }
    );

    const whatWeDoIntro =
        gsap.timeline({
            scrollTrigger: {
                trigger: whatWeDo,
                start: "top 72%",
                once: true
            }
        });

    whatWeDoIntro
        .to(
            topElements,
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.12,
                ease: "power4.out"
            }
        )
        .to(
            services,
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 0.85,
                stagger: 0.12,
                ease: "power4.out"
            },
            "-=.5"
        );

    gsap.to(
        outline,
        {
            x: -100,
            rotation: 82,
            ease: "none",

            scrollTrigger: {
                trigger: whatWeDo,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        }
    );

    gsap.to(
        glow,
        {
            x: -140,
            y: 120,
            scale: 1.3,
            ease: "none",

            scrollTrigger: {
                trigger: whatWeDo,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        }
    );

    services.forEach(
        function (service) {

            service.addEventListener(
                "mouseenter",
                function () {

                    if (
                        window.matchMedia(
                            "(pointer:fine)"
                        ).matches
                    ) {

                        gsap.to(
                            service,
                            {
                                rotateY: 2,
                                duration: 0.45,
                                ease: "power3.out"
                            }
                        );

                    }

                }
            );

            service.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        service,
                        {
                            rotateY: 0,
                            duration: 0.55,
                            ease: "power3.out"
                        }
                    );

                }
            );

        }
    );

    gsap.to(
        services,
        {
            y: -25,
            stagger: 0.08,
            ease: "none",

            scrollTrigger: {
                trigger: whatWeDo,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        }
    );

    ScrollTrigger.refresh();
}
const featuredWork =
    document.getElementById("work");

if (featuredWork) {

    const header =
        featuredWork.querySelector(
            ".featured-work-header"
        );

    const title =
        featuredWork.querySelector(
            ".featured-work-title"
        );

    const intro =
        featuredWork.querySelector(
            ".featured-work-intro"
        );

    const projects =
        featuredWork.querySelectorAll(
            ".featured-project"
        );

    const bgText =
        featuredWork.querySelector(
            ".featured-work-bg-text"
        );

    const glow =
        featuredWork.querySelector(
            ".featured-work-glow"
        );

    gsap.set(
        [
            header,
            title,
            intro
        ],
        {
            y: 70,
            opacity: 0
        }
    );

    gsap.set(
        projects,
        {
            y: 100,
            opacity: 0,
            rotationX: 8
        }
    );

    const workReveal =
        gsap.timeline({
            scrollTrigger: {
                trigger: featuredWork,
                start: "top 72%",
                once: true
            }
        });

    workReveal
        .to(
            header,
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power4.out"
            }
        )
        .to(
            title,
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out"
            },
            "-=.3"
        )
        .to(
            intro,
            {
                y: 0,
                opacity: 1,
                duration: 0.65,
                ease: "power3.out"
            },
            "-=.55"
        )
        .to(
            projects,
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power4.out"
            },
            "-=.35"
        );

    gsap.to(
        bgText,
        {
            x: 140,
            rotation: -13,
            ease: "none",

            scrollTrigger: {
                trigger: featuredWork,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        }
    );

    gsap.to(
        glow,
        {
            x: -180,
            y: 120,
            scale: 1.3,
            ease: "none",

            scrollTrigger: {
                trigger: featuredWork,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        }
    );

    gsap.to(
        projects,
        {
            y: -35,
            stagger: 0.08,
            ease: "none",

            scrollTrigger: {
                trigger: featuredWork,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        }
    );

    projects.forEach(
        function (project) {

            project.addEventListener(
                "mousemove",
                function (event) {

                    if (
                        !window.matchMedia(
                            "(pointer:fine)"
                        ).matches
                    ) {
                        return;
                    }

                    const rect =
                        project.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const rotateY =
                        (
                            (x / rect.width) -
                            0.5
                        ) * 5;

                    const rotateX =
                        (
                            (y / rect.height) -
                            0.5
                        ) * -5;

                    gsap.to(
                        project,
                        {
                            rotationX:
                                rotateX,

                            rotationY:
                                rotateY,

                            transformPerspective:
                                1200,

                            duration:
                                0.45,

                            ease:
                                "power3.out",

                            overwrite:
                                true
                        }
                    );

                }
            );

            project.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        project,
                        {
                            rotationX: 0,
                            rotationY: 0,
                            duration: 0.6,
                            ease:
                                "power3.out",

                            overwrite:
                                true
                        }
                    );

                }
            );

        }
    );

    ScrollTrigger.refresh();
}



const premiumClients = document.getElementById("clients");

if (premiumClients && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

    const clientHeader = premiumClients.querySelector(".premium-clients-header");
    const clientEyebrow = premiumClients.querySelector(".premium-clients-eyebrow");
    const clientTitle = premiumClients.querySelector(".premium-clients-title");
    const clientIntro = premiumClients.querySelector(".premium-clients-intro");
    const clientCards = premiumClients.querySelectorAll(".premium-client-card");
    const clientStatement = premiumClients.querySelector(".premium-clients-statement");
    const clientBgText = premiumClients.querySelector(".premium-clients-bg-text");

    gsap.set(clientEyebrow, {
        opacity: 0,
        x: -30
    });

    gsap.set(clientTitle, {
        opacity: 0,
        y: 70
    });

    gsap.set(clientIntro, {
        opacity: 0,
        y: 35
    });

    gsap.set(clientCards, {
        opacity: 0,
        y: 70
    });

    gsap.set(clientStatement, {
        opacity: 0,
        y: 70
    });

    gsap.set(clientBgText, {
        opacity: 0
    });

    const clientsReveal = gsap.timeline({
        scrollTrigger: {
            trigger: premiumClients,
            start: "top 78%",
            once: true
        }
    });

    clientsReveal
        .to(clientEyebrow, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out"
        })
        .to(clientTitle, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power4.out"
        }, "-=0.4")
        .to(clientIntro, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.65")
        .to(clientCards, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out"
        }, "-=0.3")
        .to(clientStatement, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out"
        }, "-=0.65")
        .to(clientBgText, {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out"
        }, "-=1");

    gsap.to(clientBgText, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
            trigger: premiumClients,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4
        }
    });

    gsap.to(clientTitle, {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
            trigger: premiumClients,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    clientCards.forEach((card, index) => {

        const name = card.querySelector(".premium-client-name");
        const arrow = card.querySelector(".premium-client-arrow");

        card.addEventListener("mouseenter", () => {

            gsap.to(name, {
                x: 12,
                duration: 0.45,
                ease: "power3.out"
            });

            gsap.to(arrow, {
                scale: 1.08,
                duration: 0.35,
                ease: "power3.out"
            });

        });

        card.addEventListener("mouseleave", () => {

            gsap.to(name, {
                x: 0,
                duration: 0.45,
                ease: "power3.out"
            });

            gsap.to(arrow, {
                scale: 1,
                duration: 0.35,
                ease: "power3.out"
            });

        });

        if (window.matchMedia("(pointer:fine)").matches) {

            card.addEventListener("mousemove", (event) => {

                const rect = card.getBoundingClientRect();

                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const rotateY = (x / rect.width - 0.5) * 4;
                const rotateX = (y / rect.height - 0.5) * -4;

                gsap.to(card, {
                    rotateX,
                    rotateY,
                    transformPerspective: 900,
                    duration: 0.35,
                    ease: "power2.out"
                });

            });

            card.addEventListener("mouseleave", () => {

                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.6,
                    ease: "power3.out"
                });

            });
        }
    });

    if (clientHeader) {
        gsap.to(clientHeader, {
            y: -20,
            ease: "none",
            scrollTrigger: {
                trigger: premiumClients,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });
    }
}
// TESTIMONIAL SECTION START

const testimonialData = [
    {
        quote: "They transformed our entire digital presence. The result feels bold, intelligent and completely us.",
        name: "ALEX MORGAN",
        role: "FOUNDER / NEXORA",
        avatar: "AM"
    },
    {
        quote: "Every detail was intentional. They gave our brand a completely new level of clarity and confidence.",
        name: "JULIA CARTER",
        role: "CMO / MONOFORM",
        avatar: "JC"
    },
    {
        quote: "From strategy to launch, the process was clear, creative and incredibly smooth from beginning to end.",
        name: "DAVID REED",
        role: "CEO / VERTEX",
        avatar: "DR"
    },
    {
        quote: "They understood our vision immediately and turned it into something distinctive, memorable and powerful.",
        name: "SOFIA LEE",
        role: "DIRECTOR / AETHER",
        avatar: "SL"
    }
];

const testimonialQuote = document.getElementById("testimonialQuote");
const testimonialName = document.getElementById("testimonialName");
const testimonialRole = document.getElementById("testimonialRole");
const testimonialAvatar = document.getElementById("testimonialAvatar");

const testimonialPrevious =
    document.querySelector(".testimonial-prev");

const testimonialNext =
    document.querySelector(".testimonial-next");

const testimonialNavItems =
    document.querySelectorAll(".stackly-testimonial-nav");

let testimonialIndex = 0;

function updateTestimonial(index) {

    if (!testimonialQuote || !testimonialName || !testimonialRole) {
        return;
    }

    testimonialIndex =
        (index + testimonialData.length) % testimonialData.length;

    const testimonial = testimonialData[testimonialIndex];

    testimonialQuote.textContent = testimonial.quote;
    testimonialName.textContent = testimonial.name;
    testimonialRole.textContent = testimonial.role;
    testimonialAvatar.textContent = testimonial.avatar;

    testimonialNavItems.forEach(function (item, itemIndex) {

        item.classList.toggle(
            "active",
            itemIndex === testimonialIndex
        );

    });
}

if (testimonialPrevious) {

    testimonialPrevious.addEventListener("click", function () {

        updateTestimonial(testimonialIndex - 1);

    });

}

if (testimonialNext) {

    testimonialNext.addEventListener("click", function () {

        updateTestimonial(testimonialIndex + 1);

    });

}

testimonialNavItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const index = Number(
            item.getAttribute("data-index")
        );

        updateTestimonial(index);

    });

});

updateTestimonial(0);


const stacklyNewsletterForm =
    document.getElementById("newsletterForm");

const stacklyNewsletterEmail =
    document.getElementById("newsletterEmail");

const stacklyNewsletterMessage =
    document.getElementById("newsletterMessage");

if (stacklyNewsletterForm) {

    stacklyNewsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = stacklyNewsletterEmail.value.trim();

        if (!email) {

            stacklyNewsletterMessage.textContent =
                "Please enter your email address.";

            return;
        }

        if (!stacklyNewsletterEmail.checkValidity()) {

            stacklyNewsletterMessage.textContent =
                "Please enter a valid email address.";

            return;
        }


        window.location.href="error.html";

        stacklyNewsletterEmail.value = "";

    });
}

const stacklyCtaButton =
    document.querySelector(".stackly-cta-button");

if (stacklyCtaButton) {

    stacklyCtaButton.addEventListener("mouseenter", function () {

        const arrow =
            stacklyCtaButton.querySelector("i");

        if (arrow && typeof gsap !== "undefined") {

            gsap.to(arrow, {
                x: 5,
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });

        }

    });

    stacklyCtaButton.addEventListener("mouseleave", function () {

        const arrow =
            stacklyCtaButton.querySelector("i");

        if (arrow && typeof gsap !== "undefined") {

            gsap.to(arrow, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });

        }

    });
}

const stacklyCtaSection =
    document.getElementById("newsletter");

if (
    stacklyCtaSection &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const ctaHeading =
        stacklyCtaSection.querySelector(".stackly-cta-heading");

    const ctaCopy =
        stacklyCtaSection.querySelector(".stackly-cta-copy");

    const newsletter =
        stacklyCtaSection.querySelector(".stackly-newsletter");

    const ctaFooter =
        stacklyCtaSection.querySelector(".stackly-cta-footer");

    const orbitOne =
        stacklyCtaSection.querySelector(".stackly-cta-orbit-one");

    const orbitTwo =
        stacklyCtaSection.querySelector(".stackly-cta-orbit-two");

    gsap.set(ctaHeading, {
        opacity: 0,
        y: 70
    });

    gsap.set(ctaCopy, {
        opacity: 0,
        y: 35
    });

    gsap.set(newsletter, {
        opacity: 0,
        y: 55
    });

    gsap.set(ctaFooter, {
        opacity: 0,
        y: 20
    });

    const ctaTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyCtaSection,
                start: "top 78%",
                once: true
            }
        });

    ctaTimeline
        .to(ctaHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        })
        .to(ctaCopy, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.55")
        .to(newsletter, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out"
        }, "-=0.35")
        .to(ctaFooter, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.4");

    gsap.to(orbitOne, {
        y: -70,
        rotation: 12,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyCtaSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        }
    });

    gsap.to(orbitTwo, {
        y: 100,
        rotation: -10,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyCtaSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.7
        }
    });
}




// FOOTER SECTION START

const stacklyBackTop =
    document.getElementById("stacklyBackTop");

if (stacklyBackTop) {

    stacklyBackTop.addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

