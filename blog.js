const stacklyBlogHero = document.getElementById("blogHero");

if (stacklyBlogHero && typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const blogCopy = stacklyBlogHero.querySelector(".stackly-blog-hero-copy");
    const blogKicker = stacklyBlogHero.querySelector(".stackly-blog-hero-kicker");
    const blogTitle = stacklyBlogHero.querySelector(".stackly-blog-hero-copy h1");
    const blogDescription = stacklyBlogHero.querySelector(".stackly-blog-hero-copy p");
    const blogLink = stacklyBlogHero.querySelector(".stackly-blog-hero-link");

    const blogVisual = stacklyBlogHero.querySelector(".stackly-blog-hero-visual");
    const blogCards = stacklyBlogHero.querySelectorAll(".stackly-blog-visual-card");
    const blogOrbits = stacklyBlogHero.querySelectorAll(".stackly-blog-orbit");
    const blogTags = stacklyBlogHero.querySelectorAll(".stackly-blog-floating-tag");
    const blogCrosses = stacklyBlogHero.querySelectorAll(".stackly-blog-cross");
    const blogCore = stacklyBlogHero.querySelector(".stackly-blog-core");
    const blogOutline = stacklyBlogHero.querySelector(".stackly-blog-hero-outline");
    const blogGrid = stacklyBlogHero.querySelector(".stackly-blog-hero-grid");
    const blogGlowOne = stacklyBlogHero.querySelector(".glow-one");
    const blogGlowTwo = stacklyBlogHero.querySelector(".glow-two");

    gsap.set(
        [
            blogKicker,
            blogTitle,
            blogDescription,
            blogLink
        ],
        {
            opacity: 0,
            y: 70
        }
    );

    gsap.set(blogCards, {
        opacity: 0,
        y: 100,
        rotationY: 25
    });

    gsap.set(blogTags, {
        opacity: 0,
        scale: .7
    });

    gsap.set(blogCrosses, {
        opacity: 0,
        scale: 0,
        rotation: -80
    });

    const blogEntrance = gsap.timeline();

    blogEntrance
        .to(blogKicker, {
            opacity: 1,
            y: 0,
            duration: .65,
            ease: "power3.out"
        })
        .to(blogTitle, {
            opacity: 1,
            y: 0,
            duration: .95,
            ease: "power4.out"
        }, "-=.35")
        .to(blogDescription, {
            opacity: 1,
            y: 0,
            duration: .65,
            ease: "power3.out"
        }, "-=.45")
        .to(blogLink, {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        }, "-=.3")
        .to(blogCards, {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 1,
            stagger: .14,
            ease: "power4.out"
        }, "-=.75")
        .to(blogTags, {
            opacity: 1,
            scale: 1,
            duration: .55,
            stagger: .1,
            ease: "back.out(1.8)"
        }, "-=.55")
        .to(blogCrosses, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: .45,
            stagger: .12,
            ease: "back.out(2)"
        }, "-=.35");

    gsap.to(blogOutline, {
        xPercent: -7,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyBlogHero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(blogVisual, {
        y: -70,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyBlogHero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(blogCopy, {
        y: -35,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyBlogHero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(blogGrid, {
        backgroundPosition: "0px 72px",
        ease: "none",
        scrollTrigger: {
            trigger: stacklyBlogHero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(blogGlowOne, {
        scale: 1.2,
        opacity: .6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(blogGlowTwo, {
        scale: 1.25,
        opacity: .7,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(blogCore, {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none"
    });

    gsap.to(blogOrbits[0], {
        rotation: 384,
        duration: 10,
        repeat: -1,
        ease: "none"
    });

    gsap.to(blogOrbits[1], {
        rotation: -384,
        duration: 13,
        repeat: -1,
        ease: "none"
    });

    gsap.to(blogOrbits[2], {
        rotation: 450,
        duration: 17,
        repeat: -1,
        ease: "none"
    });

    blogTags.forEach((tag, index) => {
        gsap.to(tag, {
            y: index % 2 === 0 ? -10 : 10,
            duration: 2.2 + index * .3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    blogCrosses.forEach((cross, index) => {
        gsap.to(cross, {
            rotation: index === 0 ? 180 : -180,
            duration: 5 + index,
            repeat: -1,
            ease: "none"
        });
    });

    if (window.matchMedia("(pointer: fine)").matches) {
        stacklyBlogHero.addEventListener("mousemove", function (event) {
            const rect = stacklyBlogHero.getBoundingClientRect();

            const mouseX = (event.clientX - rect.left) / rect.width - .5;
            const mouseY = (event.clientY - rect.top) / rect.height - .5;

            gsap.to(blogVisual, {
                x: mouseX * 28,
                y: -70 + mouseY * 18,
                duration: .8,
                ease: "power3.out",
                overwrite: true
            });

            gsap.to(blogCards[0], {
                x: mouseX * -18,
                y: mouseY * 12,
                duration: .8,
                ease: "power3.out"
            });

            gsap.to(blogCards[1], {
                x: mouseX * 12,
                y: mouseY * -10,
                duration: .8,
                ease: "power3.out"
            });

            gsap.to(blogCards[2], {
                x: mouseX * 8,
                y: mouseY * 7,
                duration: .8,
                ease: "power3.out"
            });

            gsap.to(blogCore, {
                x: mouseX * 15,
                y: mouseY * 15,
                duration: .7,
                ease: "power3.out"
            });
        });

        stacklyBlogHero.addEventListener("mouseleave", function () {
            gsap.to(blogVisual, {
                x: 0,
                y: -70,
                duration: .8,
                ease: "power3.out"
            });

            gsap.to(blogCards, {
                x: 0,
                y: 0,
                duration: .8,
                ease: "power3.out"
            });

            gsap.to(blogCore, {
                x: 0,
                y: 0,
                duration: .8,
                ease: "power3.out"
            });
        });
    }
}

const stacklyBlogPosts = document.getElementById("blogPosts");

if (stacklyBlogPosts && typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const blogSectionLabel = stacklyBlogPosts.querySelector(".stackly-blog-section-label");
    const blogSectionTitle = stacklyBlogPosts.querySelector(".stackly-blog-featured-head h2");
    const blogViewAll = stacklyBlogPosts.querySelector(".stackly-blog-view-all");
    const blogMainVisual = stacklyBlogPosts.querySelector(".featured-visual");
    const blogMainInfo = stacklyBlogPosts.querySelector(".stackly-blog-post-info");
    const blogSmallPosts = stacklyBlogPosts.querySelectorAll(".stackly-blog-small-post");
    const blogShapeOne = stacklyBlogPosts.querySelector(".shape-one");
    const blogShapeTwo = stacklyBlogPosts.querySelector(".shape-two");
    const blogIcon = stacklyBlogPosts.querySelector(".stackly-blog-post-icon");

    gsap.set(
        [
            blogSectionLabel,
            blogSectionTitle,
            blogViewAll,
            blogMainVisual,
            blogMainInfo
        ],
        {
            opacity: 0,
            y: 70
        }
    );

    gsap.set(blogSmallPosts, {
        opacity: 0,
        x: 50
    });

    const blogPostsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: stacklyBlogPosts,
            start: "top 72%",
            once: true
        }
    });

    blogPostsTimeline
        .to(blogSectionLabel, {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        })
        .to(blogSectionTitle, {
            opacity: 1,
            y: 0,
            duration: .9,
            ease: "power4.out"
        }, "-=.3")
        .to(blogViewAll, {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        }, "-=.45")
        .to(blogMainVisual, {
            opacity: 1,
            y: 0,
            duration: .9,
            ease: "power4.out"
        }, "-=.3")
        .to(blogMainInfo, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        }, "-=.45")
        .to(blogSmallPosts, {
            opacity: 1,
            x: 0,
            duration: .6,
            stagger: .12,
            ease: "power3.out"
        }, "-=.35");

    gsap.to(blogShapeOne, {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none"
    });

    gsap.to(blogShapeTwo, {
        rotation: -360,
        duration: 24,
        repeat: -1,
        ease: "none"
    });

    gsap.to(blogIcon, {
        scale: 1.08,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(blogMainVisual, {
        y: -35,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyBlogPosts,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    if (window.matchMedia("(pointer: fine)").matches) {
        blogMainVisual.addEventListener("mousemove", function (event) {
            const rect = blogMainVisual.getBoundingClientRect();

            const x = (event.clientX - rect.left) / rect.width - .5;
            const y = (event.clientY - rect.top) / rect.height - .5;

            gsap.to(blogShapeOne, {
                x: x * 25,
                y: y * 25,
                duration: .7,
                ease: "power3.out",
                overwrite: true
            });

            gsap.to(blogShapeTwo, {
                x: x * -18,
                y: y * -18,
                duration: .7,
                ease: "power3.out",
                overwrite: true
            });

            gsap.to(blogIcon, {
                x: x * 15,
                y: y * 15,
                duration: .6,
                ease: "power3.out",
                overwrite: true
            });
        });

        blogMainVisual.addEventListener("mouseleave", function () {
            gsap.to(
                [
                    blogShapeOne,
                    blogShapeTwo,
                    blogIcon
                ],
                {
                    x: 0,
                    y: 0,
                    duration: .7,
                    ease: "power3.out"
                }
            );
        });
    }
}
const stacklyBlogCards = document.getElementById("blogCards");

if (stacklyBlogCards && typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const blogHeader = stacklyBlogCards.querySelector(".stackly-blog-cards-header");
    const blogCards = stacklyBlogCards.querySelectorAll(".stackly-blog-card");
    const blogPagination = stacklyBlogCards.querySelector(".stackly-blog-pagination");
    const blogImages = stacklyBlogCards.querySelectorAll(".stackly-blog-card-image");
    const blogIcons = stacklyBlogCards.querySelectorAll(".stackly-blog-card-icon");

    gsap.set(blogHeader, {
        opacity: 0,
        y: 70
    });

    gsap.set(blogCards, {
        opacity: 0,
        y: 70
    });

    gsap.set(blogPagination, {
        opacity: 0,
        y: 30
    });

    const blogCardsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: stacklyBlogCards,
            start: "top 75%",
            once: true
        }
    });

    blogCardsTimeline
        .to(blogHeader, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        })
        .to(blogCards, {
            opacity: 1,
            y: 0,
            duration: .7,
            stagger: .12,
            ease: "power3.out"
        }, "-=.35")
        .to(blogPagination, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        }, "-=.25");

    blogImages.forEach((image, index) => {
        gsap.to(image, {
            y: index % 2 === 0 ? -8 : 8,
            scale: 1.03,
            duration: 3 + index * .2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    blogIcons.forEach((icon, index) => {
        gsap.to(icon, {
            rotation: index % 2 === 0 ? 360 : -360,
            duration: 10 + index * 2,
            repeat: -1,
            ease: "none"
        });
    });

    gsap.to(blogHeader, {
        y: -35,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyBlogCards,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    blogCards.forEach((card) => {
        const image = card.querySelector(".stackly-blog-card-image");

        card.addEventListener("mouseenter", () => {
            gsap.to(image, {
                y: -5,
                duration: .35,
                ease: "power2.out"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(image, {
                y: 0,
                duration: .35,
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