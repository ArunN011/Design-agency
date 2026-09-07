document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("loginForm");

    const emailInput =
        document.getElementById("loginEmail");

    const passwordInput =
        document.getElementById("loginPassword");

    const passwordToggle =
        document.getElementById("passwordToggle");

    const rememberMe =
        document.getElementById("rememberMe");

    const loginMessage =
        document.getElementById("loginMessage");

    const loginSubmit =
        document.getElementById("loginSubmit");

    const roleButtons =
        document.querySelectorAll(".stackly-role-btn");

    const emailGroup =
        emailInput
            ? emailInput.closest(".stackly-form-group")
            : null;

    const passwordGroup =
        passwordInput
            ? passwordInput.closest(".stackly-form-group")
            : null;

    let selectedRole = "User";


    function resetLoginButtonState() {

        if (!loginSubmit) {
            return;
        }

        loginSubmit.classList.remove("loading");

        const submitText =
            loginSubmit.querySelector(".stackly-submit-text");

        const submitIcon =
            loginSubmit.querySelector(".stackly-submit-icon");

        const submitLoader =
            loginSubmit.querySelector(".stackly-submit-loader");

        if (submitText) {
            submitText.style.display = "";
            submitText.style.visibility = "visible";
        }

        if (submitIcon) {
            submitIcon.style.display = "";
            submitIcon.style.visibility = "visible";
        }

        if (submitLoader) {
            submitLoader.style.display = "none";
        }
    }


    function clearLoginMessage() {

        if (!loginMessage) {
            return;
        }

        loginMessage.textContent = "";
        loginMessage.classList.remove("success");
    }


    function clearFieldErrors() {

        if (emailGroup) {
            emailGroup.classList.remove(
                "has-error",
                "has-success"
            );
        }

        if (passwordGroup) {
            passwordGroup.classList.remove(
                "has-error",
                "has-success"
            );
        }

        if (emailInput) {
            emailInput.classList.remove(
                "stackly-input-error-shake"
            );
        }

        if (passwordInput) {
            passwordInput.classList.remove(
                "stackly-input-error-shake"
            );
        }
    }


    function showInputError(input, group) {

        if (!input || !group) {
            return;
        }

        group.classList.remove("has-success");

        group.classList.add("has-error");

        input.classList.remove(
            "stackly-input-error-shake"
        );

        void input.offsetWidth;

        input.classList.add(
            "stackly-input-error-shake"
        );
    }


    function validateEmail() {

        if (!emailInput || !emailGroup) {
            return false;
        }

        const email =
            emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showInputError(
                emailInput,
                emailGroup
            );

            return false;
        }

        emailGroup.classList.remove(
            "has-error"
        );

        emailGroup.classList.add(
            "has-success"
        );

        return true;
    }


    function validatePassword() {

        if (!passwordInput || !passwordGroup) {
            return false;
        }

        const password =
            passwordInput.value.trim();

        if (password.length < 6) {

            showInputError(
                passwordInput,
                passwordGroup
            );

            return false;
        }

        passwordGroup.classList.remove(
            "has-error"
        );

        passwordGroup.classList.add(
            "has-success"
        );

        return true;
    }


    roleButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                roleButtons.forEach(
                    function (item) {
                        item.classList.remove("active");
                    }
                );

                button.classList.add("active");

                selectedRole =
                    button.dataset.role || "User";

                localStorage.setItem(
                    "userRole",
                    selectedRole
                );

                clearLoginMessage();

                if (typeof gsap !== "undefined") {

                    gsap.fromTo(
                        button,
                        {
                            scale: .96
                        },
                        {
                            scale: 1,
                            duration: .3,
                            ease: "back.out(2)"
                        }
                    );

                }

            }
        );

    });


    if (passwordToggle && passwordInput) {

        passwordToggle.addEventListener(
            "click",
            function () {

                const isPassword =
                    passwordInput.type === "password";

                if (isPassword) {

                    passwordInput.type = "text";

                    passwordToggle.innerHTML =
                        '<i class="fa-regular fa-eye-slash"></i>';

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    passwordInput.type = "password";

                    passwordToggle.innerHTML =
                        '<i class="fa-regular fa-eye"></i>';

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );

    }


    if (emailInput) {

        emailInput.addEventListener(
            "input",
            function () {

                if (emailGroup) {
                    emailGroup.classList.remove(
                        "has-error",
                        "has-success"
                    );
                }

                clearLoginMessage();

            }
        );

        emailInput.addEventListener(
            "blur",
            function () {

                if (this.value.trim() !== "") {
                    validateEmail();
                }

            }
        );

    }


    if (passwordInput) {

        passwordInput.addEventListener(
            "input",
            function () {

                if (passwordGroup) {
                    passwordGroup.classList.remove(
                        "has-error",
                        "has-success"
                    );
                }

                clearLoginMessage();

            }
        );

        passwordInput.addEventListener(
            "blur",
            function () {

                if (this.value.trim() !== "") {
                    validatePassword();
                }

            }
        );

    }


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                resetLoginButtonState();

                clearLoginMessage();

                const emailValid =
                    validateEmail();

                const passwordValid =
                    validatePassword();

                if (
                    !emailValid ||
                    !passwordValid
                ) {

                    if (loginMessage) {

                        loginMessage.textContent =
                            "Please correct the highlighted fields.";

                    }

                    const loginCard =
                        document.querySelector(
                            ".stackly-login-card"
                        );

                    if (loginCard) {

                        loginCard.classList.remove(
                            "stackly-login-error-shake"
                        );

                        void loginCard.offsetWidth;

                        loginCard.classList.add(
                            "stackly-login-error-shake"
                        );

                        setTimeout(
                            function () {

                                loginCard.classList.remove(
                                    "stackly-login-error-shake"
                                );

                            },
                            500
                        );

                    }

                    if (!emailValid && emailInput) {

                        emailInput.focus();

                    } else if (
                        !passwordValid &&
                        passwordInput
                    ) {

                        passwordInput.focus();

                    }

                    return;

                }


                const email =
                    emailInput.value.trim();


                localStorage.setItem(
                    "userEmail",
                    email
                );

                localStorage.setItem(
                    "userRole",
                    selectedRole
                );

                localStorage.setItem(
                    "isLoggedIn",
                    "true"
                );


                if (rememberMe && rememberMe.checked) {

                    localStorage.setItem(
                        "rememberMe",
                        "true"
                    );

                } else {

                    localStorage.removeItem(
                        "rememberMe"
                    );

                }


                if (loginMessage) {

                    loginMessage.classList.add(
                        "success"
                    );

                    loginMessage.textContent =
                        "Login successful. Redirecting...";

                }


                if (loginSubmit) {

                    loginSubmit.classList.add(
                        "loading"
                    );

                }


                if (typeof gsap !== "undefined" && loginSubmit) {

                    gsap.timeline()
                        .to(
                            loginSubmit,
                            {
                                scale: .97,
                                duration: .12
                            }
                        )
                        .to(
                            loginSubmit,
                            {
                                scale: 1,
                                duration: .3,
                                ease: "back.out(2)"
                            }
                        );

                }


                setTimeout(
                    function () {

                        if (selectedRole === "Admin") {

                            window.location.href =
                                "admin-dashboard.html";

                        } else {

                            window.location.href =
                                "user-dashboard.html";

                        }

                    },
                    700
                );

            }
        );

    }


    const savedEmail =
        localStorage.getItem("userEmail");

    const savedRole =
        localStorage.getItem("userRole");

    const savedRemember =
        localStorage.getItem("rememberMe");


    if (
        savedEmail &&
        savedRemember === "true" &&
        emailInput &&
        rememberMe
    ) {

        emailInput.value =
            savedEmail;

        rememberMe.checked =
            true;

    }


    if (savedRole) {

        selectedRole =
            savedRole;

        roleButtons.forEach(
            function (button) {

                button.classList.toggle(
                    "active",
                    button.dataset.role === savedRole
                );

            }
        );

    }


    resetLoginButtonState();


    window.addEventListener(
        "pageshow",
        function () {

            resetLoginButtonState();

            clearLoginMessage();

            if (loginSubmit) {

                loginSubmit.disabled =
                    false;

            }

            if (typeof gsap !== "undefined") {

                gsap.killTweensOf(
                    loginSubmit
                );

                gsap.set(
                    loginSubmit,
                    {
                        scale: 1
                    }
                );

            }

        }
    );


    window.addEventListener(
        "focus",
        function () {

            resetLoginButtonState();

        }
    );


    if (typeof gsap !== "undefined") {

        const loginCard =
            document.querySelector(
                ".stackly-login-card"
            );

        const loginBrand =
            document.querySelector(
                ".stackly-login-brand"
            );

        const loginHeader =
            document.querySelector(
                ".stackly-login-header"
            );

        const loginRole =
            document.querySelector(
                ".stackly-login-role"
            );

        const formGroups =
            document.querySelectorAll(
                ".stackly-form-group"
            );

        const loginOptions =
            document.querySelector(
                ".stackly-login-options"
            );

        const registerText =
            document.querySelector(
                ".stackly-register"
            );


        const loginTimeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        if (loginCard) {

            loginTimeline.from(
                loginCard,
                {
                    opacity: 0,
                    y: 55,
                    scale: .97,
                    duration: .8
                }
            );

        }


        if (loginBrand) {

            loginTimeline.from(
                loginBrand,
                {
                    opacity: 0,
                    y: 20,
                    duration: .45
                },
                "-=.45"
            );

        }


        if (loginHeader) {

            loginTimeline.from(
                loginHeader,
                {
                    opacity: 0,
                    y: 25,
                    duration: .55
                },
                "-=.3"
            );

        }


        if (loginRole) {

            loginTimeline.from(
                loginRole,
                {
                    opacity: 0,
                    y: 18,
                    duration: .4
                },
                "-=.25"
            );

        }


        if (formGroups.length) {

            loginTimeline.from(
                formGroups,
                {
                    opacity: 0,
                    y: 15,
                    duration: .4,
                    stagger: .1
                },
                "-=.2"
            );

        }


        if (loginOptions) {

            loginTimeline.from(
                loginOptions,
                {
                    opacity: 0,
                    y: 10,
                    duration: .3
                },
                "-=.15"
            );

        }


        if (loginSubmit) {

            loginTimeline.from(
                loginSubmit,
                {
                    opacity: 1,
                    y: 12,
                    duration: .4
                },
                "-=.1"
            );

        }


        if (registerText) {

            loginTimeline.from(
                registerText,
                {
                    opacity: 1,
                    y: 10,
                    duration: .3
                },
                "-=.15"
            );

        }


        gsap.to(
            ".decoration-one",
            {
                rotation: 180,
                duration: 9,
                repeat: -1,
                ease: "none"
            }
        );


        gsap.to(
            ".decoration-two",
            {
                y: -12,
                rotation: 20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".decoration-three",
            {
                y: 12,
                rotation: -15,
                duration: 2.7,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".stackly-login-glow-one",
            {
                scale: 1.2,
                opacity: .65,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".stackly-login-glow-two",
            {
                scale: 1.25,
                opacity: .65,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".stackly-login-outline",
            {
                xPercent: -5,
                duration: 16,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        if (
            window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {

            const loginPage =
                document.querySelector(
                    ".stackly-login-page"
                );

            if (loginPage && loginCard) {

                loginPage.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            loginPage.getBoundingClientRect();

                        const x =
                            (event.clientX - rect.left) /
                            rect.width -
                            .5;

                        const y =
                            (event.clientY - rect.top) /
                            rect.height -
                            .5;

                        gsap.to(
                            loginCard,
                            {
                                x: x * 8,
                                y: y * 8,
                                duration: .7,
                                ease: "power3.out",
                                overwrite: true
                            }
                        );

                    }
                );


                loginPage.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            loginCard,
                            {
                                x: 0,
                                y: 0,
                                duration: .7,
                                ease: "power3.out"
                            }
                        );

                    }
                );

            }

        }

    }

});