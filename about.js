

const aboutHero =
    document.getElementById("aboutHero");

if (
    aboutHero &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const aboutLabel =
        aboutHero.querySelector(".stackly-about-hero-label");

    const aboutSmall =
        aboutHero.querySelector(".stackly-about-hero-small");

    const aboutHeading =
        aboutHero.querySelector(".stackly-about-hero-copy h1");

    const aboutText =
        aboutHero.querySelector(".stackly-about-hero-copy p");

    const aboutButton =
        aboutHero.querySelector(".stackly-about-hero-button");

    const aboutVisual =
        aboutHero.querySelector(".stackly-about-hero-visual");

    const aboutCore =
        aboutHero.querySelector(".stackly-about-hero-core");

    const aboutCircles =
        aboutHero.querySelectorAll(".stackly-about-hero-circle");

    const aboutOrbits =
        aboutHero.querySelectorAll(".stackly-about-hero-orbit");

    const aboutFloating =
        aboutHero.querySelectorAll(".stackly-about-hero-floating");

    const aboutBottom =
        aboutHero.querySelector(".stackly-about-hero-bottom");

    gsap.set(aboutLabel, {
        opacity: 0,
        x: -30
    });

    gsap.set(aboutSmall, {
        opacity: 0,
        y: 20
    });

    gsap.set(aboutHeading, {
        opacity: 0,
        y: 70
    });

    gsap.set(aboutText, {
        opacity: 0,
        y: 30
    });

    gsap.set(aboutButton, {
        opacity: 0,
        y: 25
    });

    gsap.set(aboutVisual, {
        opacity: 0,
        scale: 0.88
    });

    gsap.set(aboutBottom, {
        opacity: 0,
        y: 20
    });

    const aboutTimeline =
        gsap.timeline();

    aboutTimeline
        .to(aboutLabel, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out"
        })
        .to(aboutSmall, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        }, "-=0.25")
        .to(aboutHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.25")
        .to(aboutText, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.55")
        .to(aboutButton, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.35")
        .to(aboutVisual, {
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power4.out"
        }, "-=0.85")
        .to(aboutBottom, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        }, "-=0.5");

    gsap.to(aboutCore, {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none"
    });

    gsap.to(aboutOrbits, {
        rotation: "+=360",
        duration: 24,
        repeat: -1,
        stagger: 2,
        ease: "none"
    });

    aboutFloating.forEach(function(item, index) {

        gsap.to(item, {
            y: index % 2 === 0 ? -12 : 12,
            x: index === 1 ? 8 : 0,
            duration: 2.5 + index * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    });

    gsap.to(aboutCircles, {
        scale: 1.08,
        opacity: 0.8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
        ease: "sine.inOut"
    });

    gsap.to(aboutHeading, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: aboutHero,
            start: "top top",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(aboutVisual, {
        yPercent: 10,
        rotation: 2,
        ease: "none",
        scrollTrigger: {
            trigger: aboutHero,
            start: "top top",
            end: "bottom top",
            scrub: 1.4
        }
    });

    if (window.matchMedia("(pointer:fine)").matches) {

        aboutHero.addEventListener("mousemove", function(event) {

            const rect =
                aboutHero.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width - 0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height - 0.5;

            gsap.to(aboutVisual, {
                x: x * 18,
                y: y * 18,
                duration: 0.7,
                ease: "power3.out"
            });

            gsap.to(aboutCore, {
                x: x * -12,
                y: y * -12,
                duration: 0.8,
                ease: "power3.out"
            });

        });

        aboutHero.addEventListener("mouseleave", function() {

            gsap.to(aboutVisual, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.to(aboutCore, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            });

        });

    }
}


const stacklyAboutStory =
    document.getElementById("aboutStory");

if (
    stacklyAboutStory &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const storyLabel =
        stacklyAboutStory.querySelector(".stackly-about-story-label");

    const storyHeading =
        stacklyAboutStory.querySelector(".stackly-about-story-intro h2");

    const storyIntroText =
        stacklyAboutStory.querySelector(".stackly-about-story-intro-text");

    const storyVisual =
        stacklyAboutStory.querySelector(".stackly-about-story-visual");

    const storyBlocks =
        stacklyAboutStory.querySelectorAll(".stackly-about-story-block");

    const storyStats =
        stacklyAboutStory.querySelectorAll(".stackly-story-stat");

    const storyBg =
        stacklyAboutStory.querySelector(".stackly-about-story-bg");

    const storyFrames =
        stacklyAboutStory.querySelectorAll(".stackly-story-frame");

    const storyOrbit =
        stacklyAboutStory.querySelector(".stackly-story-orbit");

    gsap.set(storyLabel, {
        opacity: 0,
        x: -25
    });

    gsap.set(storyHeading, {
        opacity: 0,
        y: 65
    });

    gsap.set(storyIntroText, {
        opacity: 0,
        y: 30
    });

    gsap.set(storyVisual, {
        opacity: 0,
        scale: 0.9
    });

    gsap.set(storyBlocks, {
        opacity: 0,
        x: 50
    });

    gsap.set(storyStats, {
        opacity: 0,
        y: 45
    });

    gsap.set(storyBg, {
        opacity: 0
    });

    const storyTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyAboutStory,
                start: "top 78%",
                once: true
            }
        });

    storyTimeline
        .to(storyLabel, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(storyHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.3")
        .to(storyIntroText, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.55")
        .to(storyVisual, {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power4.out"
        }, "-=0.3")
        .to(storyBlocks, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.13,
            ease: "power4.out"
        }, "-=0.55")
        .to(storyStats, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.35")
        .to(storyBg, {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, "-=0.8");

    gsap.to(storyBg, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyAboutStory,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    gsap.to(storyHeading, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyAboutStory,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(storyVisual, {
        yPercent: 8,
        rotation: 2,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyAboutStory,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4
        }
    });

    gsap.to(storyOrbit, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none"
    });

    storyFrames.forEach(function(frame, index) {

        gsap.to(frame, {
            y: index % 2 === 0 ? -10 : 10,
            duration: 2.8 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    });

    storyStats.forEach(function(stat) {

        const counter =
            stat.querySelector("[data-story-count]");

        if (!counter) {
            return;
        }

        const target =
            Number(counter.getAttribute("data-story-count"));

        const countObject = {
            value: 0
        };

        ScrollTrigger.create({

            trigger: stat,

            start: "top 85%",

            once: true,

            onEnter: function() {

                gsap.to(countObject, {

                    value: target,

                    duration: 1.8,

                    ease: "power2.out",

                    onUpdate: function() {

                        counter.textContent =
                            Math.round(countObject.value).toLocaleString();

                    }

                });

            }

        });

    });

    if (window.matchMedia("(pointer:fine)").matches) {

        storyVisual.addEventListener("mousemove", function(event) {

            const rect =
                storyVisual.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width - 0.5) * 2;

            const y =
                ((event.clientY - rect.top) / rect.height - 0.5) * 2;

            gsap.to(storyVisual, {
                x: x * 10,
                y: y * 10,
                duration: 0.6,
                ease: "power3.out"
            });

        });

        storyVisual.addEventListener("mouseleave", function() {

            gsap.to(storyVisual, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "power3.out"
            });

        });

    }
}

// VALUES SECTION START

const stacklyValues =
    document.getElementById("values");

if (
    stacklyValues &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const valuesLabel =
        stacklyValues.querySelector(".stackly-values-label");

    const valuesHeading =
        stacklyValues.querySelector(".stackly-values-intro h2");

    const valuesIntro =
        stacklyValues.querySelector(".stackly-values-intro p");

    const valuesCards =
        stacklyValues.querySelectorAll(".stackly-value-card");

    const valuesStatement =
        stacklyValues.querySelector(".stackly-values-statement");

    const valuesBg =
        stacklyValues.querySelector(".stackly-values-bg");

    gsap.set(valuesLabel, {
        opacity: 0,
        x: -25
    });

    gsap.set(valuesHeading, {
        opacity: 0,
        y: 65
    });

    gsap.set(valuesIntro, {
        opacity: 0,
        y: 30
    });

    gsap.set(valuesCards, {
        opacity: 0,
        y: 60
    });

    gsap.set(valuesStatement, {
        opacity: 0,
        y: 35
    });

    gsap.set(valuesBg, {
        opacity: 0
    });

    const valuesTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyValues,
                start: "top 78%",
                once: true
            }
        });

    valuesTimeline
        .to(valuesLabel, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(valuesHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.25")
        .to(valuesIntro, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.5")
        .to(valuesCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out"
        }, "-=0.3")
        .to(valuesStatement, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.4")
        .to(valuesBg, {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, "-=0.7");

    gsap.to(valuesBg, {
        yPercent: -15,
        xPercent: -4,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyValues,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    gsap.to(valuesHeading, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyValues,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    valuesCards.forEach(function(card) {

        const icon =
            card.querySelector(".stackly-value-icon");

        const arrow =
            card.querySelector(".stackly-value-card-top i");

        card.addEventListener("mouseenter", function() {

            gsap.to(icon, {
                rotation: 10,
                scale: 1.08,
                duration: 0.4,
                ease: "power3.out"
            });

            gsap.to(arrow, {
                scale: 1.08,
                duration: 0.3,
                ease: "power3.out"
            });

        });

        card.addEventListener("mouseleave", function() {

            gsap.to(icon, {
                rotation: 0,
                scale: 1,
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



const stacklyTeam =
    document.getElementById("team");

if (
    stacklyTeam &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const teamLabel =
        stacklyTeam.querySelector(".stackly-team-label");

    const teamHeading =
        stacklyTeam.querySelector(".stackly-team-intro h2");

    const teamIntro =
        stacklyTeam.querySelector(".stackly-team-intro p");

    const teamCards =
        stacklyTeam.querySelectorAll(".stackly-team-card");

    const teamBg =
        stacklyTeam.querySelector(".stackly-team-bg");

    const teamFooter =
        stacklyTeam.querySelector(".stackly-team-footer");

    gsap.set(teamLabel, {
        opacity: 0,
        x: -25
    });

    gsap.set(teamHeading, {
        opacity: 0,
        y: 65
    });

    gsap.set(teamIntro, {
        opacity: 0,
        y: 30
    });

    gsap.set(teamCards, {
        opacity: 0,
        y: 60
    });

    gsap.set(teamFooter, {
        opacity: 0,
        y: 25
    });

    gsap.set(teamBg, {
        opacity: 0
    });

    const teamTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyTeam,
                start: "top 78%",
                once: true
            }
        });

    teamTimeline
        .to(teamLabel, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(teamHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.25")
        .to(teamIntro, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.5")
        .to(teamCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.13,
            ease: "power4.out"
        }, "-=0.3")
        .to(teamFooter, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.4")
        .to(teamBg, {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, "-=0.7");

    gsap.to(teamBg, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyTeam,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    gsap.to(teamHeading, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyTeam,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    teamCards.forEach(function(card) {

        if (!window.matchMedia("(pointer:fine)").matches) {
            return;
        }

        card.addEventListener("mousemove", function(event) {

            const rect =
                card.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width - 0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height - 0.5;

            gsap.to(card, {
                rotateX: y * -3,
                rotateY: x * 3,
                transformPerspective: 900,
                duration: 0.4,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", function() {

            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.6,
                ease: "power3.out"
            });

        });

    });
}

// ABOUT TESTIMONIALS SECTION START

const aboutTestimonialsData = [
    {
        quote: "Working with Stackly completely changed the way we approached our brand. They understood our business before they started designing.",
        name: "ALEX MORGAN",
        role: "FOUNDER / NEXORA",
        avatar: "AM"
    },
    {
        quote: "They gave our brand a level of clarity and confidence we had been looking for. The entire team felt like a true partner.",
        name: "JULIA CARTER",
        role: "CMO / MONOFORM",
        avatar: "JC"
    },
    {
        quote: "The team balanced creativity with real business thinking. What they created has had a meaningful impact on our growth.",
        name: "DAVID REED",
        role: "CEO / VERTEX",
        avatar: "DR"
    },
    {
        quote: "They listened, challenged our thinking and created an experience that feels unmistakably ours.",
        name: "SOFIA LEE",
        role: "DIRECTOR / AETHER",
        avatar: "SL"
    }
];

const aboutTestimonialQuote =
    document.getElementById("aboutTestimonialQuote");

const aboutTestimonialName =
    document.getElementById("aboutTestimonialName");

const aboutTestimonialRole =
    document.getElementById("aboutTestimonialRole");

const aboutTestimonialAvatar =
    document.querySelector(".stackly-about-testimonial-avatar");

const aboutTestimonialPrev =
    document.getElementById("aboutTestimonialPrev");

const aboutTestimonialNext =
    document.getElementById("aboutTestimonialNext");

const aboutTestimonialItems =
    document.querySelectorAll(".stackly-about-testimonial-item");

const aboutTestimonialProgress =
    document.querySelector(
        ".stackly-about-testimonial-progress span"
    );

let aboutTestimonialIndex = 0;

function updateAboutTestimonial(index) {

    if (
        !aboutTestimonialQuote ||
        !aboutTestimonialName ||
        !aboutTestimonialRole
    ) {
        return;
    }

    aboutTestimonialIndex =
        (index + aboutTestimonialsData.length) %
        aboutTestimonialsData.length;

    const item =
        aboutTestimonialsData[aboutTestimonialIndex];

    aboutTestimonialQuote.textContent =
        item.quote;

    aboutTestimonialName.textContent =
        item.name;

    aboutTestimonialRole.textContent =
        item.role;

    if (aboutTestimonialAvatar) {
        aboutTestimonialAvatar.textContent =
            item.avatar;
    }

    aboutTestimonialItems.forEach(function(navItem, navIndex) {

        navItem.classList.toggle(
            "active",
            navIndex === aboutTestimonialIndex
        );

    });

    if (aboutTestimonialProgress) {

        aboutTestimonialProgress.style.width =
            ((aboutTestimonialIndex + 1) /
            aboutTestimonialsData.length * 100) + "%";

    }
}

if (aboutTestimonialPrev) {

    aboutTestimonialPrev.addEventListener(
        "click",
        function() {

            updateAboutTestimonial(
                aboutTestimonialIndex - 1
            );

        }
    );

}

if (aboutTestimonialNext) {

    aboutTestimonialNext.addEventListener(
        "click",
        function() {

            updateAboutTestimonial(
                aboutTestimonialIndex + 1
            );

        }
    );

}

aboutTestimonialItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const index =
            Number(item.getAttribute("data-index"));

        updateAboutTestimonial(index);

    });

});

updateAboutTestimonial(0);

const stacklyAboutCta =
    document.getElementById("aboutCta");

if (
    stacklyAboutCta &&
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    const aboutCtaLabel =
        stacklyAboutCta.querySelector(".stackly-about-cta-label");

    const aboutCtaHeading =
        stacklyAboutCta.querySelector(".stackly-about-cta-heading");

    const aboutCtaSide =
        stacklyAboutCta.querySelector(".stackly-about-cta-side");

    const aboutCtaLinks =
        stacklyAboutCta.querySelectorAll(".stackly-about-cta-links a");

    const aboutCtaBottom =
        stacklyAboutCta.querySelector(".stackly-about-cta-bottom");

    const aboutCtaBg =
        stacklyAboutCta.querySelector(".stackly-about-cta-bg");

    gsap.set(aboutCtaLabel, {
        opacity: 0,
        x: -25
    });

    gsap.set(aboutCtaHeading, {
        opacity: 0,
        y: 70
    });

    gsap.set(aboutCtaSide, {
        opacity: 0,
        y: 35
    });

    gsap.set(aboutCtaLinks, {
        opacity: 0,
        y: 35
    });

    gsap.set(aboutCtaBottom, {
        opacity: 0,
        y: 20
    });

    gsap.set(aboutCtaBg, {
        opacity: 0
    });

    const aboutCtaTimeline =
        gsap.timeline({
            scrollTrigger: {
                trigger: stacklyAboutCta,
                start: "top 78%",
                once: true
            }
        });

    aboutCtaTimeline
        .to(aboutCtaLabel, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .to(aboutCtaHeading, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.25")
        .to(aboutCtaSide, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.5")
        .to(aboutCtaLinks, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.3")
        .to(aboutCtaBottom, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        }, "-=0.25")
        .to(aboutCtaBg, {
            opacity: 1,
            duration: 0.9,
            ease: "power2.out"
        }, "-=0.6");

    gsap.to(aboutCtaBg, {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyAboutCta,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3
        }
    });

    gsap.to(aboutCtaHeading, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyAboutCta,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1
        }
    });

    aboutCtaLinks.forEach(function(link) {

        const icon =
            link.querySelector("i");

        link.addEventListener("mouseenter", function() {

            gsap.to(icon, {
                x: 5,
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });

        });

        link.addEventListener("mouseleave", function() {

            gsap.to(icon, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });

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
