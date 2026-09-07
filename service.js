const stacklyServicesBlackHero =
    document.getElementById("servicesHero");

if (
    stacklyServicesBlackHero &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const blackTitle =
        stacklyServicesBlackHero.querySelectorAll(
            ".services-black-title span"
        );

    const blackKicker =
        stacklyServicesBlackHero.querySelector(
            ".stackly-services-black-kicker"
        );

    const blackDescription =
        stacklyServicesBlackHero.querySelector(
            ".stackly-services-black-description"
        );

    const blackButton =
        stacklyServicesBlackHero.querySelector(
            ".stackly-services-black-button"
        );

    const blackVisual =
        stacklyServicesBlackHero.querySelector(
            ".stackly-services-black-visual"
        );

    const blackCore =
        stacklyServicesBlackHero.querySelector(
            ".stackly-services-black-core"
        );

    const blackCoreInner =
        stacklyServicesBlackHero.querySelector(
            ".core-inner"
        );

    const blackRings =
        stacklyServicesBlackHero.querySelectorAll(
            ".services-black-ring"
        );

    const blackOrbits =
        stacklyServicesBlackHero.querySelectorAll(
            ".services-black-orbit"
        );

    const blackNodes =
        stacklyServicesBlackHero.querySelectorAll(
            ".services-black-node"
        );

    const blackCrosses =
        stacklyServicesBlackHero.querySelectorAll(
            ".stackly-services-black-cross"
        );

    const blackGrid =
        stacklyServicesBlackHero.querySelector(
            ".stackly-services-black-grid"
        );

    const blackGlowA =
        stacklyServicesBlackHero.querySelector(
            ".glow-a"
        );

    const blackGlowB =
        stacklyServicesBlackHero.querySelector(
            ".glow-b"
        );

    gsap.set(blackKicker, {
        opacity: 0,
        y: 20
    });

    gsap.set(blackTitle, {
        opacity: 0,
        y: 120
    });

    gsap.set(blackDescription, {
        opacity: 0,
        y: 35
    });

    gsap.set(blackButton, {
        opacity: 0,
        y: 25
    });

    gsap.set(blackVisual, {
        opacity: 0,
        scale: 0.78,
        rotation: -4
    });

    const servicesBlackIntro =
        gsap.timeline();

    servicesBlackIntro
        .to(blackKicker, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        })
        .to(blackTitle, {
            opacity: 1,
            y: 0,
            duration: 1.15,
            stagger: 0.12,
            ease: "power4.out"
        }, "-=0.2")
        .to(blackDescription, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out"
        }, "-=0.55")
        .to(blackButton, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out"
        }, "-=0.3")
        .to(blackVisual, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power4.out"
        }, "-=0.95");

    gsap.to(blackCore, {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none"
    });

    gsap.to(blackCoreInner, {
        scale: 1.15,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(blackRings, {
        scale: 1.06,
        opacity: 0.65,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
        ease: "sine.inOut"
    });

    blackOrbits.forEach(function(orbit, index) {

        gsap.to(orbit, {
            rotation: index % 2 === 0 ? "+=360" : "-=360",
            duration: 18 + index * 5,
            repeat: -1,
            ease: "none"
        });

    });

    blackNodes.forEach(function(node, index) {

        gsap.to(node, {
            y: index % 2 === 0 ? -14 : 14,
            x: index === 1 ? 9 : index === 3 ? -8 : 0,
            duration: 2.4 + index * 0.35,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    });

    blackCrosses.forEach(function(cross, index) {

        gsap.to(cross, {
            rotation: index % 2 === 0 ? 180 : -180,
            duration: 5 + index,
            repeat: -1,
            ease: "none"
        });

    });

    gsap.to(blackGrid, {
        backgroundPosition: "72px 72px",
        duration: 12,
        repeat: -1,
        ease: "none"
    });

    gsap.to(blackGlowA, {
        scale: 1.25,
        x: -45,
        y: 25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(blackGlowB, {
        scale: 1.2,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(blackVisual, {
        yPercent: 10,
        rotation: 3,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServicesBlackHero,
            start: "top top",
            end: "bottom top",
            scrub: 1.3
        }
    });

    gsap.to(blackTitle, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServicesBlackHero,
            start: "top top",
            end: "bottom top",
            scrub: 1.1
        }
    });

    if (
        window.matchMedia("(pointer:fine)").matches
    ) {

        stacklyServicesBlackHero.addEventListener(
            "mousemove",
            function(event) {

                const rect =
                    stacklyServicesBlackHero.getBoundingClientRect();

                const mouseX =
                    (event.clientX - rect.left) /
                    rect.width - 0.5;

                const mouseY =
                    (event.clientY - rect.top) /
                    rect.height - 0.5;

                gsap.to(blackVisual, {
                    x: mouseX * 24,
                    y: mouseY * 24,
                    duration: 0.8,
                    ease: "power3.out"
                });

                gsap.to(blackCore, {
                    x: mouseX * -14,
                    y: mouseY * -14,
                    duration: 0.9,
                    ease: "power3.out"
                });

                gsap.to(blackNodes, {
                    x: function(index) {
                        return mouseX * (index % 2 === 0 ? 18 : -18);
                    },
                    y: function(index) {
                        return mouseY * (index % 2 === 0 ? 15 : -15);
                    },
                    duration: 0.7,
                    stagger: 0.02,
                    ease: "power3.out"
                });

            }
        );

        stacklyServicesBlackHero.addEventListener(
            "mouseleave",
            function() {

                gsap.to(blackVisual, {
                    x: 0,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out"
                });

                gsap.to(blackCore, {
                    x: 0,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out"
                });

                gsap.to(blackNodes, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });

            }
        );

    }

    blackButton.addEventListener(
        "mouseenter",
        function() {

            gsap.to(blackCoreInner, {
                scale: 1.3,
                duration: 0.4,
                ease: "power3.out"
            });

        }
    );

    blackButton.addEventListener(
        "mouseleave",
        function() {

            gsap.to(blackCoreInner, {
                scale: 1,
                duration: 0.4,
                ease: "power3.out"
            });

        }
    );
}

const stacklyServicesOverview =
    document.getElementById("servicesList");

if (
    stacklyServicesOverview &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const overviewLabel =
        stacklyServicesOverview.querySelector(
            ".services-overview-label"
        );

    const overviewHeading =
        stacklyServicesOverview.querySelector(
            ".services-overview-intro h2"
        );

    const overviewIntro =
        stacklyServicesOverview.querySelector(
            ".services-overview-intro p"
        );

    const overviewCards =
        stacklyServicesOverview.querySelectorAll(
            ".services-overview-card"
        );

    const overviewBg =
        stacklyServicesOverview.querySelector(
            ".services-overview-bg"
        );

    const overviewVisuals =
        stacklyServicesOverview.querySelectorAll(
            ".services-overview-visual"
        );

    gsap.set(overviewLabel, {
        opacity: 0,
        x: -25
    });

    gsap.set(overviewHeading, {
        opacity: 0,
        y: 65
    });

    gsap.set(overviewIntro, {
        opacity: 0,
        y: 30
    });

    gsap.set(overviewCards, {
        opacity: 0,
        y: 60
    });

    gsap.set(overviewBg, {
        opacity: 0
    });

    const overviewTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyServicesOverview,
                start: "top 78%",
                once: true
            }
        });

    overviewTimeline
        .to(overviewLabel, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(overviewHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.25")
        .to(overviewIntro, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.5")
        .to(overviewCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.13,
            ease: "power4.out"
        }, "-=0.3")
        .to(overviewBg, {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, "-=0.6");

    gsap.to(overviewBg, {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServicesOverview,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    gsap.to(overviewHeading, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServicesOverview,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    overviewVisuals.forEach(function(visual, index) {

        gsap.to(visual, {
            y: index % 2 === 0 ? -12 : 12,
            rotation: index % 2 === 0 ? 3 : -3,
            duration: 3 + index * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    });

    overviewCards.forEach(function(card) {

        const title =
            card.querySelector("h3");

        const arrow =
            card.querySelector(".services-overview-arrow");

        card.addEventListener("mouseenter", function() {

            gsap.to(title, {
                x: 12,
                duration: 0.4,
                ease: "power3.out"
            });

            gsap.to(arrow, {
                scale: 1.1,
                duration: 0.3,
                ease: "power3.out"
            });

        });

        card.addEventListener("mouseleave", function() {

            gsap.to(title, {
                x: 0,
                duration: 0.4,
                ease: "power3.out"
            });

            gsap.to(arrow, {
                scale: 1,
                duration: 0.3,
                ease: "power3.out"
            });

        });

    });
}
const stacklyServicesAdvantage =
    document.getElementById("servicesAdvantage");

if (
    stacklyServicesAdvantage &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const advantageLabel =
        stacklyServicesAdvantage.querySelector(
            ".stackly-services-advantage-label"
        );

    const advantageHeading =
        stacklyServicesAdvantage.querySelector(
            ".stackly-services-advantage-heading h2"
        );

    const advantageIntro =
        stacklyServicesAdvantage.querySelector(
            ".stackly-services-advantage-heading p"
        );

    const advantageCards =
        stacklyServicesAdvantage.querySelectorAll(
            ".stackly-advantage-card"
        );

    const advantageStatement =
        stacklyServicesAdvantage.querySelector(
            ".stackly-services-advantage-statement"
        );

    const advantageBg =
        stacklyServicesAdvantage.querySelector(
            ".stackly-services-advantage-bg"
        );

    gsap.set(advantageLabel, {
        opacity: 0,
        x: -30
    });

    gsap.set(advantageHeading, {
        opacity: 0,
        y: 70
    });

    gsap.set(advantageIntro, {
        opacity: 0,
        y: 30
    });

    gsap.set(advantageCards, {
        opacity: 0,
        y: 65
    });

    gsap.set(advantageStatement, {
        opacity: 0,
        y: 30
    });

    const advantageTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyServicesAdvantage,
                start: "top 78%",
                once: true
            }
        });

    advantageTimeline
        .to(advantageLabel, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(advantageHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.25")
        .to(advantageIntro, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.55")
        .to(advantageCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out"
        }, "-=0.3")
        .to(advantageStatement, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.35");

    gsap.to(advantageBg, {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServicesAdvantage,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    gsap.to(advantageHeading, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServicesAdvantage,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    advantageCards.forEach(function(card) {

        const icon =
            card.querySelector(".stackly-advantage-icon");

        const mark =
            card.querySelector(".stackly-advantage-mark");

        card.addEventListener("mouseenter", function() {

            gsap.to(icon, {
                rotate: 12,
                scale: 1.1,
                duration: 0.4,
                ease: "power3.out"
            });

            gsap.to(mark, {
                rotate: 90,
                duration: 0.4,
                ease: "power3.out"
            });

        });

        card.addEventListener("mouseleave", function() {

            gsap.to(icon, {
                rotate: 0,
                scale: 1,
                duration: 0.4,
                ease: "power3.out"
            });

            gsap.to(mark, {
                rotate: 0,
                duration: 0.4,
                ease: "power3.out"
            });

        });

    });
}
const stacklyServicePricing =
    document.getElementById("servicePricing");

if (
    stacklyServicePricing &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const pricingLabel =
        stacklyServicePricing.querySelector(
            ".stackly-service-pricing-label"
        );

    const pricingHeading =
        stacklyServicePricing.querySelector(
            ".stackly-service-pricing-heading h2"
        );

    const pricingIntro =
        stacklyServicePricing.querySelector(
            ".stackly-service-pricing-heading p"
        );

    const pricingCards =
        stacklyServicePricing.querySelectorAll(
            ".stackly-pricing-card"
        );

    const pricingBg =
        stacklyServicePricing.querySelector(
            ".stackly-service-pricing-bg"
        );

    const pricingBottom =
        stacklyServicePricing.querySelector(
            ".stackly-pricing-bottom"
        );

    gsap.set(pricingLabel, {
        opacity: 0,
        x: -25
    });

    gsap.set(pricingHeading, {
        opacity: 0,
        y: 65
    });

    gsap.set(pricingIntro, {
        opacity: 0,
        y: 30
    });

    gsap.set(pricingCards, {
        opacity: 0,
        y: 65
    });

    gsap.set(pricingBottom, {
        opacity: 0,
        y: 20
    });

    const pricingTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyServicePricing,
                start: "top 78%",
                once: true
            }
        });

    pricingTimeline
        .to(pricingLabel, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(pricingHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.25")
        .to(pricingIntro, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.5")
        .to(pricingCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.13,
            ease: "power4.out"
        }, "-=0.3")
        .to(pricingBottom, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        }, "-=0.4");

    gsap.to(pricingBg, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServicePricing,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    pricingCards.forEach(function(card) {

        const icon =
            card.querySelector(".stackly-pricing-card-top i");

        const name =
            card.querySelector(".stackly-pricing-name h3");

        card.addEventListener("mouseenter", function() {

            gsap.to(icon, {
                rotate: 45,
                scale: 1.08,
                duration: 0.35,
                ease: "power3.out"
            });

            gsap.to(name, {
                x: 10,
                duration: 0.4,
                ease: "power3.out"
            });

        });

        card.addEventListener("mouseleave", function() {

            gsap.to(icon, {
                rotate: 0,
                scale: 1,
                duration: 0.35,
                ease: "power3.out"
            });

            gsap.to(name, {
                x: 0,
                duration: 0.4,
                ease: "power3.out"
            });

        });

    });
}
const stacklyServiceProcess =
    document.getElementById("serviceProcess");

if (
    stacklyServiceProcess &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const processLabel =
        stacklyServiceProcess.querySelector(
            ".stackly-service-process-label"
        );

    const processHeading =
        stacklyServiceProcess.querySelector(
            ".stackly-service-process-heading h2"
        );

    const processIntro =
        stacklyServiceProcess.querySelector(
            ".stackly-service-process-heading p"
        );

    const processSteps =
        stacklyServiceProcess.querySelectorAll(
            ".stackly-process-step"
        );

    const processBg =
        stacklyServiceProcess.querySelector(
            ".stackly-service-process-bg"
        );

    const processLine =
        stacklyServiceProcess.querySelector(
            ".stackly-process-line span"
        );

    const processBottom =
        stacklyServiceProcess.querySelector(
            ".stackly-service-process-bottom"
        );

    gsap.set(processLabel, {
        opacity: 0,
        x: -25
    });

    gsap.set(processHeading, {
        opacity: 0,
        y: 70
    });

    gsap.set(processIntro, {
        opacity: 0,
        y: 30
    });

    gsap.set(processSteps, {
        opacity: 0,
        x: 60
    });

    gsap.set(processBottom, {
        opacity: 0,
        y: 25
    });

    gsap.set(processLine, {
        y: 80,
        opacity: 0
    });

    const processTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyServiceProcess,
                start: "top 78%",
                once: true
            }
        });

    processTimeline
        .to(processLabel, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(processHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.25")
        .to(processIntro, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.55")
        .to(processLine, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out"
        }, "-=0.25")
        .to(processSteps, {
            opacity: 1,
            x: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power4.out"
        }, "-=0.55")
        .to(processBottom, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        }, "-=0.35");

    gsap.to(processBg, {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServiceProcess,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    gsap.to(processHeading, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServiceProcess,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    processSteps.forEach(function(step) {

        const icon =
            step.querySelector(".stackly-process-step-icon");

        const heading =
            step.querySelector(".stackly-process-step-content h3");

        const number =
            step.querySelector(".stackly-process-step-number");

        step.addEventListener("mouseenter", function() {

            gsap.to(icon, {
                scale: 1.08,
                rotation: 10,
                duration: 0.35,
                ease: "power3.out"
            });

            gsap.to(heading, {
                x: 10,
                duration: 0.4,
                ease: "power3.out"
            });

            gsap.to(number, {
                scale: 1.08,
                duration: 0.3,
                ease: "power3.out"
            });

        });

        step.addEventListener("mouseleave", function() {

            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.35,
                ease: "power3.out"
            });

            gsap.to(heading, {
                x: 0,
                duration: 0.4,
                ease: "power3.out"
            });

            gsap.to(number, {
                scale: 1,
                duration: 0.3,
                ease: "power3.out"
            });

        });

    });
}
const stacklyServiceImpact =
    document.getElementById("serviceImpact");

if (
    stacklyServiceImpact &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const impactLabel =
        stacklyServiceImpact.querySelector(
            ".stackly-service-impact-label"
        );

    const impactHeading =
        stacklyServiceImpact.querySelector(
            ".stackly-service-impact-heading h2"
        );

    const impactIntro =
        stacklyServiceImpact.querySelector(
            ".stackly-service-impact-heading p"
        );

    const impactPrimary =
        stacklyServiceImpact.querySelector(
            ".stackly-impact-primary"
        );

    const impactCards =
        stacklyServiceImpact.querySelectorAll(
            ".stackly-impact-stat-card"
        );

    const impactBg =
        stacklyServiceImpact.querySelector(
            ".stackly-service-impact-bg"
        );

    const impactBottom =
        stacklyServiceImpact.querySelector(
            ".stackly-impact-bottom"
        );

    const impactBar =
        stacklyServiceImpact.querySelector(
            ".stackly-impact-bar span"
        );

    const impactCounters = [
        {
            element: document.getElementById("impactCounterOne"),
            value: 42
        },
        {
            element: document.getElementById("impactCounterTwo"),
            value: 3
        },
        {
            element: document.getElementById("impactCounterThree"),
            value: 500
        },
        {
            element: document.getElementById("impactCounterFour"),
            value: 18
        }
    ];

    gsap.set(impactLabel, {
        opacity: 0,
        x: -25
    });

    gsap.set(impactHeading, {
        opacity: 0,
        y: 65
    });

    gsap.set(impactIntro, {
        opacity: 0,
        y: 30
    });

    gsap.set(impactPrimary, {
        opacity: 0,
        y: 60
    });

    gsap.set(impactCards, {
        opacity: 0,
        y: 60
    });

    gsap.set(impactBottom, {
        opacity: 0,
        y: 25
    });

    const impactTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyServiceImpact,
                start: "top 78%",
                once: true
            }
        });

    impactTimeline
        .to(impactLabel, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(impactHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.25")
        .to(impactIntro, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.55")
        .to(impactPrimary, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out"
        }, "-=0.25")
        .to(impactCards, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power4.out"
        }, "-=0.55")
        .to(impactBottom, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        }, "-=0.35");

    gsap.to(impactBg, {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServiceImpact,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    gsap.to(impactHeading, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServiceImpact,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    ScrollTrigger.create({
        trigger: stacklyServiceImpact,
        start: "top 75%",
        once: true,
        onEnter: function() {

            impactCounters.forEach(function(counter) {

                if (!counter.element) {
                    return;
                }

                const numberObject = {
                    value: 0
                };

                gsap.to(numberObject, {
                    value: counter.value,
                    duration: 1.8,
                    ease: "power2.out",
                    onUpdate: function() {
                        counter.element.textContent =
                            Math.round(numberObject.value).toLocaleString();
                    }
                });

            });

            gsap.to(impactBar, {
                width: "78%",
                duration: 1.8,
                ease: "power3.out"
            });

        }
    });

    impactCards.forEach(function(card) {

        const icon =
            card.querySelector(
                ".stackly-impact-stat-top i"
            );

        card.addEventListener("mouseenter", function() {

            gsap.to(icon, {
                rotate: 45,
                scale: 1.08,
                duration: 0.35,
                ease: "power3.out"
            });

        });

        card.addEventListener("mouseleave", function() {

            gsap.to(icon, {
                rotate: 0,
                scale: 1,
                duration: 0.35,
                ease: "power3.out"
            });

        });

    });
}
const stacklyServicesCta = document.getElementById("servicesCta");

if (stacklyServicesCta && typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const ctaOutline = stacklyServicesCta.querySelector(".stackly-services-cta-outline");
    const ctaLeft = stacklyServicesCta.querySelector(".stackly-services-cta-left");
    const ctaKicker = stacklyServicesCta.querySelector(".stackly-services-cta-kicker");
    const ctaTitle = stacklyServicesCta.querySelector(".stackly-services-cta-left h2");
    const ctaText = stacklyServicesCta.querySelector(".stackly-services-cta-text");
    const ctaButton = stacklyServicesCta.querySelector(".stackly-services-cta-button");
    const ctaRight = stacklyServicesCta.querySelector(".stackly-services-cta-right");
    const ctaCore = stacklyServicesCta.querySelector(".stackly-services-cta-core-center");
    const ctaRings = stacklyServicesCta.querySelectorAll(".stackly-services-cta-core-ring");
    const ctaNodes = stacklyServicesCta.querySelectorAll(".stackly-services-cta-node");
    const ctaCrosses = stacklyServicesCta.querySelectorAll(".stackly-services-cta-cross");
    const ctaGlowOne = stacklyServicesCta.querySelector(".glow-one");
    const ctaGlowTwo = stacklyServicesCta.querySelector(".glow-two");

    gsap.set(
        [
            ctaKicker,
            ctaTitle,
            ctaText,
            ctaButton,
            ctaRight
        ],
        {
            opacity: 0,
            y: 70
        }
    );

    gsap.set(ctaNodes, {
        opacity: 0,
        scale: 0.7,
        y: 30
    });

    gsap.set(ctaCrosses, {
        opacity: 0,
        scale: 0,
        rotation: -90
    });

    const ctaEntrance = gsap.timeline({
        scrollTrigger: {
            trigger: stacklyServicesCta,
            start: "top 78%",
            once: true
        }
    });

    ctaEntrance
        .to(ctaKicker, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out"
        })
        .to(ctaTitle, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.35")
        .to(ctaText, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out"
        }, "-=0.45")
        .to(ctaButton, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.35")
        .to(ctaRight, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out"
        }, "-=0.75")
        .to(ctaNodes, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "back.out(1.7)"
        }, "-=0.45")
        .to(ctaCrosses, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "back.out(2)"
        }, "-=0.4");

    gsap.to(ctaOutline, {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServicesCta,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(ctaRight, {
        y: -70,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyServicesCta,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(ctaCore, {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none"
    });

    gsap.to(ctaRings, {
        scale: 1.12,
        opacity: 0.45,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut"
    });

    ctaNodes.forEach((node, index) => {
        gsap.to(node, {
            y: index % 2 === 0 ? -12 : 12,
            duration: 2.4 + index * 0.25,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    ctaCrosses.forEach((cross, index) => {
        gsap.to(cross, {
            rotation: index === 0 ? 180 : -180,
            duration: 6 + index,
            repeat: -1,
            ease: "none"
        });
    });

    gsap.to(ctaGlowOne, {
        scale: 1.3,
        opacity: 0.55,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(ctaGlowTwo, {
        scale: 1.25,
        opacity: 0.45,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    if (window.matchMedia("(pointer: fine)").matches) {
        stacklyServicesCta.addEventListener("mousemove", function (event) {
            const rect = stacklyServicesCta.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const moveX = (x / rect.width - 0.5) * 2;
            const moveY = (y / rect.height - 0.5) * 2;

            gsap.to(ctaRight, {
                x: moveX * 20,
                y: -70 + moveY * 14,
                duration: 0.8,
                ease: "power3.out",
                overwrite: true
            });

            gsap.to(ctaCore, {
                x: moveX * 10,
                y: moveY * 10,
                duration: 0.8,
                ease: "power3.out",
                overwrite: true
            });
        });

        stacklyServicesCta.addEventListener("mouseleave", function () {
            gsap.to(ctaRight, {
                x: 0,
                y: -70,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.to(ctaCore, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        });
    }

    ctaButton.addEventListener("mouseenter", function () {
        gsap.to(ctaCore, {
            scale: 1.12,
            duration: 0.35,
            ease: "power3.out"
        });
    });

    ctaButton.addEventListener("mouseleave", function () {
        gsap.to(ctaCore, {
            scale: 1,
            duration: 0.35,
            ease: "power3.out"
        });
    });
}
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