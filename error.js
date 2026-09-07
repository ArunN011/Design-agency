const errorPage = document.querySelector(".error-page");

if (errorPage && typeof gsap !== "undefined") {

    const intro = gsap.timeline({
        defaults: {
            ease: "power4.out"
        }
    });

    gsap.set(
        ".error-number span",
        {
            y: 100,
            opacity: 0
        }
    );

    gsap.set(
        [
            ".error-eyebrow",
            ".error-message h2",
            ".error-message p",
            ".error-actions",
            ".error-top",
            ".error-bottom",
            ".error-number-bg",
            ".error-orbit",
            ".error-symbol"
        ],
        {
            opacity: 0
        }
    );

    intro
        .to(
            ".error-top",
            {
                y: 0,
                opacity: 1,
                duration: .7
            }
        )
        .to(
            ".error-number-bg",
            {
                opacity: 1,
                duration: .6
            },
            "-=.35"
        )
        .to(
            ".error-number span",
            {
                y: 0,
                opacity: 1,
                duration: .8,
                stagger: .12,
                ease: "expo.out"
            },
            "-=.2"
        )
        .to(
            ".error-orbit",
            {
                opacity: 1,
                duration: .6,
                stagger: .1
            },
            "-=.35"
        )
        .to(
            ".error-symbol",
            {
                opacity: 1,
                scale: 1,
                duration: .5
            },
            "-=.2"
        )
        .to(
            ".error-eyebrow",
            {
                opacity: 1,
                y: 0,
                duration: .5
            },
            "-=.2"
        )
        .to(
            ".error-message h2",
            {
                opacity: 1,
                y: 0,
                duration: .7
            },
            "-=.25"
        )
        .to(
            ".error-message p",
            {
                opacity: 1,
                y: 0,
                duration: .5
            },
            "-=.25"
        )
        .to(
            ".error-actions",
            {
                opacity: 1,
                y: 0,
                duration: .5
            },
            "-=.2"
        )
        .to(
            ".error-bottom",
            {
                opacity: 1,
                duration: .5
            },
            "-=.2"
        );


    if (
        window.matchMedia("(pointer:fine)").matches
    ) {

        const numberWrap =
            document.querySelector(
                ".error-number-wrap"
            );

        const number =
            document.querySelector(
                ".error-number"
            );

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        numberWrap.addEventListener(
            "mousemove",
            event => {

                const rect =
                    numberWrap.getBoundingClientRect();

                mouseX =
                    ((event.clientX - rect.left) /
                        rect.width - .5) * 2;

                mouseY =
                    ((event.clientY - rect.top) /
                        rect.height - .5) * 2;
            }
        );

        numberWrap.addEventListener(
            "mouseleave",
            () => {

                mouseX = 0;
                mouseY = 0;

            }
        );

        function animateNumber() {

            currentX +=
                (mouseX - currentX) * .06;

            currentY +=
                (mouseY - currentY) * .06;

            gsap.set(
                number,
                {
                    rotateY: currentX * 5,
                    rotateX: currentY * -4
                }
            );

            requestAnimationFrame(
                animateNumber
            );
        }

        animateNumber();
    }


    const orbitOne =
        document.querySelector(
            ".error-orbit-one"
        );

    const orbitTwo =
        document.querySelector(
            ".error-orbit-two"
        );

    gsap.to(
        orbitOne,
        {
            rotation: 360,
            duration: 18,
            repeat: -1,
            ease: "none"
        }
    );

    gsap.to(
        orbitTwo,
        {
            rotation: -360,
            duration: 24,
            repeat: -1,
            ease: "none"
        }
    );


    gsap.to(
        ".error-glow-one",
        {
            x: 80,
            y: 50,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }
    );

    gsap.to(
        ".error-glow-two",
        {
            x: -60,
            y: -50,
            duration: 7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }
    );

}
const errorBack = document.getElementById("errorBack");

if (errorBack) {
    errorBack.addEventListener("click", function () {
        window.history.back();
    });
}