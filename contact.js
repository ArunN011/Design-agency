const stacklyContactHero = document.getElementById("contactHero");

if (stacklyContactHero && typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const contactCopy = stacklyContactHero.querySelector(".stackly-contact-hero-copy");
    const contactKicker = stacklyContactHero.querySelector(".stackly-contact-kicker");
    const contactTitle = stacklyContactHero.querySelector(".stackly-contact-hero-copy h1");
    const contactText = stacklyContactHero.querySelector(".stackly-contact-hero-copy p");
    const contactActions = stacklyContactHero.querySelector(".stackly-contact-hero-actions");
    const contactVisual = stacklyContactHero.querySelector(".stackly-contact-hero-visual");

    const contactCore = stacklyContactHero.querySelector(".stackly-contact-core-center");
    const contactRings = stacklyContactHero.querySelectorAll(".stackly-contact-core-ring");
    const contactOrbits = stacklyContactHero.querySelectorAll(".stackly-contact-orbit");
    const contactNodes = stacklyContactHero.querySelectorAll(".stackly-contact-node");
    const contactCrosses = stacklyContactHero.querySelectorAll(".stackly-contact-cross");
    const contactOutline = stacklyContactHero.querySelector(".stackly-contact-outline");
    const contactGlowOne = stacklyContactHero.querySelector(".glow-one");
    const contactGlowTwo = stacklyContactHero.querySelector(".glow-two");

    gsap.set(
        [
            contactKicker,
            contactTitle,
            contactText,
            contactActions
        ],
        {
            opacity: 0,
            y: 70
        }
    );

    gsap.set(contactVisual, {
        opacity: 0,
        scale: .88,
        y: 70
    });

    gsap.set(contactNodes, {
        opacity: 0,
        scale: .7
    });

    gsap.set(contactCrosses, {
        opacity: 0,
        scale: 0,
        rotation: -90
    });

    const contactEntrance = gsap.timeline();

    contactEntrance
        .to(contactKicker, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        })
        .to(contactTitle, {
            opacity: 1,
            y: 0,
            duration: .95,
            ease: "power4.out"
        }, "-=.3")
        .to(contactText, {
            opacity: 1,
            y: 0,
            duration: .65,
            ease: "power3.out"
        }, "-=.45")
        .to(contactActions, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        }, "-=.35")
        .to(contactVisual, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=.7")
        .to(contactNodes, {
            opacity: 1,
            scale: 1,
            duration: .55,
            stagger: .1,
            ease: "back.out(1.8)"
        }, "-=.45")
        .to(contactCrosses, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: .45,
            stagger: .1,
            ease: "back.out(2)"
        }, "-=.35");

    gsap.to(contactOutline, {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyContactHero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(contactCopy, {
        y: -35,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyContactHero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(contactVisual, {
        y: -65,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyContactHero,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(contactCore, {
        rotation: 360,
        duration: 14,
        repeat: -1,
        ease: "none"
    });

    contactOrbits.forEach((orbit, index) => {
        gsap.to(orbit, {
            rotation: index === 1 ? -360 : 360,
            duration: 10 + index * 3,
            repeat: -1,
            ease: "none"
        });
    });

    gsap.to(contactRings, {
        scale: 1.12,
        opacity: .45,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        stagger: .25,
        ease: "sine.inOut"
    });

    contactNodes.forEach((node, index) => {
        gsap.to(node, {
            y: index % 2 === 0 ? -10 : 10,
            duration: 2.2 + index * .25,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    contactCrosses.forEach((cross, index) => {
        gsap.to(cross, {
            rotation: index % 2 === 0 ? 180 : -180,
            duration: 5 + index,
            repeat: -1,
            ease: "none"
        });
    });

    gsap.to(contactGlowOne, {
        scale: 1.2,
        opacity: .65,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(contactGlowTwo, {
        scale: 1.25,
        opacity: .65,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    if (window.matchMedia("(pointer: fine)").matches) {
        stacklyContactHero.addEventListener("mousemove", function (event) {
            const rect = stacklyContactHero.getBoundingClientRect();

            const x = (event.clientX - rect.left) / rect.width - .5;
            const y = (event.clientY - rect.top) / rect.height - .5;

            gsap.to(contactVisual, {
                x: x * 25,
                y: -65 + y * 15,
                duration: .8,
                ease: "power3.out",
                overwrite: true
            });

            gsap.to(contactCore, {
                x: x * 12,
                y: y * 12,
                duration: .7,
                ease: "power3.out",
                overwrite: true
            });

            gsap.to(contactNodes, {
                x: x * 8,
                duration: .8,
                ease: "power3.out",
                overwrite: true
            });
        });

        stacklyContactHero.addEventListener("mouseleave", function () {
            gsap.to(contactVisual, {
                x: 0,
                y: -65,
                duration: .8,
                ease: "power3.out"
            });

            gsap.to(contactCore, {
                x: 0,
                y: 0,
                duration: .7,
                ease: "power3.out"
            });

            gsap.to(contactNodes, {
                x: 0,
                duration: .8,
                ease: "power3.out"
            });
        });
    }
}

const stacklyContactSection = document.getElementById("contactForm");
const stacklyContactForm = document.getElementById("stacklyContactForm");

if (stacklyContactSection && stacklyContactForm && typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    const contactHeading = stacklyContactSection.querySelector(".stackly-contact-form-heading");
    const contactSide = stacklyContactSection.querySelector(".stackly-contact-form-side");
    const contactCard = stacklyContactSection.querySelector(".stackly-contact-form-card");
    const contactFields = stacklyContactSection.querySelectorAll(".stackly-contact-field");
    const contactFloating = stacklyContactSection.querySelectorAll(".stackly-contact-floating");
    const contactOrbOne = stacklyContactSection.querySelector(".orb-one");
    const contactOrbTwo = stacklyContactSection.querySelector(".orb-two");
    const contactTextarea = document.getElementById("contactMessage");
    const contactCharacterCount = stacklyContactSection.querySelector(".stackly-contact-character-count");
    const contactSubmit = document.getElementById("contactSubmit");
    const contactFormMessage = document.getElementById("contactFormMessage");

    gsap.set(contactHeading, {
        opacity: 0,
        y: 80
    });

    gsap.set(contactSide, {
        opacity: 0,
        x: -70
    });

    gsap.set(contactCard, {
        opacity: 0,
        x: 70
    });

    gsap.set(contactFields, {
        opacity: 0,
        y: 35
    });

    gsap.set(contactFloating, {
        opacity: 0,
        scale: .5
    });

    const contactEntrance = gsap.timeline({
        scrollTrigger: {
            trigger: stacklyContactSection,
            start: "top 72%",
            once: true
        }
    });

    contactEntrance
        .to(contactHeading, {
            opacity: 1,
            y: 0,
            duration: .9,
            ease: "power4.out"
        })
        .to(contactSide, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.35")
        .to(contactCard, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.65")
        .to(contactFields, {
            opacity: 1,
            y: 0,
            duration: .5,
            stagger: .07,
            ease: "power3.out"
        }, "-=.45")
        .to(contactFloating, {
            opacity: 1,
            scale: 1,
            duration: .5,
            stagger: .1,
            ease: "back.out(2)"
        }, "-=.35");

    gsap.to(contactOrbOne, {
        x: 35,
        y: 30,
        scale: 1.15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(contactOrbTwo, {
        x: -25,
        y: -20,
        scale: 1.12,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    contactFloating.forEach((element, index) => {
        gsap.to(element, {
            y: index % 2 === 0 ? -14 : 14,
            rotation: index % 2 === 0 ? 8 : -8,
            duration: 2.5 + index * .5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    if (contactTextarea && contactCharacterCount) {

        contactTextarea.addEventListener("input", function () {

            const length = this.value.length;

            contactCharacterCount.textContent = `${length} / 500`;

            if (length > 500) {
                this.value = this.value.substring(0, 500);
                contactCharacterCount.textContent = "500 / 500";
            }
        });
    }

    function markInvalid(element) {

        element.classList.remove("is-invalid");
        void element.offsetWidth;
        element.classList.add("is-invalid");
        element.classList.add("stackly-contact-shake");
        element.classList.add("stackly-contact-pulse");

        setTimeout(function () {
            element.classList.remove("stackly-contact-shake");
            element.classList.remove("stackly-contact-pulse");
        }, 500);
    }

    function clearFieldError(field) {

        field.classList.remove("has-error");

        const input = field.querySelector("input, textarea");

        if (input) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
    }

    function validateTextInput(input, field) {

        const value = input.value.trim();

        if (value === "") {
            input.classList.remove("is-valid");
            field.classList.add("has-error");
            markInvalid(input);
            return false;
        }

        field.classList.remove("has-error");
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");

        return true;
    }

    function validateEmail(input, field) {

        const value = input.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(value)) {
            input.classList.remove("is-valid");
            field.classList.add("has-error");
            markInvalid(input);
            return false;
        }

        field.classList.remove("has-error");
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");

        return true;
    }

    function validateService() {

        const serviceField =
            stacklyContactSection.querySelector(".stackly-contact-field-full");

        const choices =
            stacklyContactForm.querySelectorAll('input[name="service"]');

        const checked =
            stacklyContactForm.querySelector('input[name="service"]:checked');

        if (!checked) {

            serviceField.classList.add("has-choice-error");

            const choiceGrid =
                serviceField.querySelector(".stackly-contact-choice-grid");

            choiceGrid.classList.add("stackly-contact-form-field-invalid");
            choiceGrid.classList.add("stackly-contact-shake");

            setTimeout(function () {
                choiceGrid.classList.remove("stackly-contact-shake");
            }, 500);

            return false;
        }

        serviceField.classList.remove("has-choice-error");

        choices.forEach(function (choice) {
            choice.closest(".stackly-contact-choice")
                .querySelector("span")
                .classList.remove("stackly-contact-form-field-invalid");
        });

        return true;
    }

    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const messageInput = document.getElementById("contactMessage");

    const nameField = nameInput.closest(".stackly-contact-field");
    const emailField = emailInput.closest(".stackly-contact-field");
    const messageField = messageInput.closest(".stackly-contact-field");

    nameInput.addEventListener("blur", function () {
        if (this.value.trim() !== "") {
            validateTextInput(this, nameField);
        }
    });

    emailInput.addEventListener("blur", function () {
        if (this.value.trim() !== "") {
            validateEmail(this, emailField);
        }
    });

    messageInput.addEventListener("blur", function () {
        if (this.value.trim() !== "") {
            validateTextInput(this, messageField);
        }
    });

    stacklyContactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const validName =
            validateTextInput(nameInput, nameField);

        const validEmail =
            validateEmail(emailInput, emailField);

        const validMessage =
            validateTextInput(messageInput, messageField);

        const validService =
            validateService();

        if (!validName || !validEmail || !validMessage || !validService) {

            const firstInvalid =
                stacklyContactForm.querySelector(
                    ".is-invalid, .stackly-contact-form-field-invalid"
                );

            if (firstInvalid) {
                firstInvalid.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            gsap.fromTo(
                contactCard,
                {
                    x: 0
                },
                {
                    x: -5,
                    duration: .08,
                    repeat: 7,
                    yoyo: true,
                    ease: "power1.inOut",
                    onComplete: function () {
                        gsap.set(contactCard, {
                            x: 0
                        });
                    }
                }
            );

            return;
        }

        contactSubmit.classList.add("loading");

        gsap.to(contactSubmit, {
            scale: .97,
            duration: .15,
            yoyo: true,
            repeat: 1,
            ease: "power2.out"
        });

        setTimeout(function () {

            contactSubmit.classList.remove("loading");

            contactFormMessage.classList.add("show");

            gsap.fromTo(
                contactFormMessage,
                {
                    opacity: 0,
                    y: 15
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .45,
                    ease: "power3.out"
                }
            );

            setTimeout(function () {
                window.location.href = "error.html";
            }, 900);

        }, 900);
    });

    const contactInputs =
        stacklyContactForm.querySelectorAll("input, textarea");

    contactInputs.forEach(function (input) {

        input.addEventListener("input", function () {

            if (
                this.classList.contains("is-invalid") &&
                this.value.trim() !== ""
            ) {
                this.classList.remove("is-invalid");
            }

        });

    });

}
const stacklyContactMap = document.getElementById("contactMap");

if (stacklyContactMap && typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    const mapHeading = stacklyContactMap.querySelector(".stackly-contact-map-heading");
    const mapInfo = stacklyContactMap.querySelector(".stackly-contact-map-info");
    const mapFrame = stacklyContactMap.querySelector(".stackly-contact-map-frame");
    const mapBottom = stacklyContactMap.querySelector(".stackly-contact-map-bottom");
    const mapPin = stacklyContactMap.querySelector(".stackly-contact-map-pin");
    const mapButton = stacklyContactMap.querySelector(".stackly-contact-map-button");

    gsap.set(mapHeading, {
        opacity: 0,
        y: 70
    });

    gsap.set(mapInfo, {
        opacity: 0,
        x: -60
    });

    gsap.set(mapFrame, {
        opacity: 0,
        x: 60,
        scale: .96
    });

    gsap.set(mapBottom, {
        opacity: 0,
        y: 30
    });

    const mapTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: stacklyContactMap,
            start: "top 75%",
            once: true
        }
    });

    mapTimeline
        .to(mapHeading, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        })
        .to(mapInfo, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.4")
        .to(mapFrame, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out"
        }, "-=.65")
        .to(mapBottom, {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        }, "-=.45");

    gsap.to(mapPin, {
        y: -8,
        duration: 1.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(mapFrame, {
        y: -25,
        ease: "none",
        scrollTrigger: {
            trigger: stacklyContactMap,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    if (window.matchMedia("(pointer: fine)").matches) {

        stacklyContactMap.addEventListener("mousemove", function(event) {

            const rect = stacklyContactMap.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - .5;

            const y =
                (event.clientY - rect.top) / rect.height - .5;

            gsap.to(mapPin, {
                x: x * 16,
                y: -8 + y * 16,
                duration: .6,
                ease: "power3.out",
                overwrite: true
            });

        });

        stacklyContactMap.addEventListener("mouseleave", function() {

            gsap.to(mapPin, {
                x: 0,
                y: -8,
                duration: .6,
                ease: "power3.out"
            });

        });
    }

    mapButton.addEventListener("mouseenter", function() {

        gsap.to(mapPin, {
            scale: 1.15,
            duration: .3,
            ease: "power2.out"
        });

    });

    mapButton.addEventListener("mouseleave", function() {

        gsap.to(mapPin, {
            scale: 1,
            duration: .3,
            ease: "power2.out"
        });

    });

}
const stacklyContactFaq = document.getElementById("contactFaq");

if (stacklyContactFaq && typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    const faqHeading = stacklyContactFaq.querySelector(".stackly-contact-faq-heading");
    const faqSide = stacklyContactFaq.querySelector(".stackly-contact-faq-side");
    const faqItems = stacklyContactFaq.querySelectorAll(".stackly-contact-faq-item");
    const faqBottom = stacklyContactFaq.querySelector(".stackly-contact-faq-bottom");

    gsap.set(faqHeading, {
        opacity: 0,
        y: 70
    });

    gsap.set(faqSide, {
        opacity: 0,
        x: -60
    });

    gsap.set(faqItems, {
        opacity: 0,
        x: 60
    });

    gsap.set(faqBottom, {
        opacity: 0,
        y: 30
    });

    const faqEntrance = gsap.timeline({
        scrollTrigger: {
            trigger: stacklyContactFaq,
            start: "top 75%",
            once: true
        }
    });

    faqEntrance
        .to(faqHeading, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        })
        .to(faqSide, {
            opacity: 1,
            x: 0,
            duration: .75,
            ease: "power4.out"
        }, "-=.35")
        .to(faqItems, {
            opacity: 1,
            x: 0,
            duration: .55,
            stagger: .09,
            ease: "power3.out"
        }, "-=.5")
        .to(faqBottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25");

    faqItems.forEach(function(item) {

        const question = item.querySelector(".stackly-contact-faq-question");
        const answer = item.querySelector(".stackly-contact-faq-answer");
        const icon = item.querySelector(".stackly-contact-faq-question-icon");

        if (item.classList.contains("active")) {
            gsap.set(answer, {
                height: "auto"
            });
        }

        question.addEventListener("click", function() {

            const isActive = item.classList.contains("active");

            faqItems.forEach(function(otherItem) {

                if (otherItem === item) {
                    return;
                }

                const otherAnswer =
                    otherItem.querySelector(".stackly-contact-faq-answer");

                const otherIcon =
                    otherItem.querySelector(".stackly-contact-faq-question-icon");

                otherItem.classList.remove("active");

                gsap.to(otherAnswer, {
                    height: 0,
                    duration: .4,
                    ease: "power3.inOut"
                });

                gsap.to(otherIcon, {
                    rotation: 0,
                    duration: .35,
                    ease: "power3.out"
                });

            });

            if (isActive) {

                item.classList.remove("active");

                gsap.to(answer, {
                    height: 0,
                    duration: .45,
                    ease: "power3.inOut"
                });

                gsap.to(icon, {
                    rotation: 0,
                    duration: .35,
                    ease: "power3.out"
                });

            } else {

                item.classList.add("active");

                gsap.fromTo(
                    answer,
                    {
                        height: 0
                    },
                    {
                        height: "auto",
                        duration: .5,
                        ease: "power3.out"
                    }
                );

                gsap.to(icon, {
                    rotation: 45,
                    duration: .35,
                    ease: "power3.out"
                });

            }

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