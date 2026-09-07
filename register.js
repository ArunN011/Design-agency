document.addEventListener("DOMContentLoaded", function () {

    const registerForm =
        document.getElementById("registerForm");

    const fullName =
        document.getElementById("fullName");

    const email =
        document.getElementById("registerEmail");

    const phone =
        document.getElementById("phoneNumber");

    const password =
        document.getElementById("registerPassword");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const companyName =
        document.getElementById("companyName");

    const terms =
        document.getElementById("termsCheck");

    const message =
        document.getElementById("registerMessage");

    const registerSubmit =
        document.getElementById("registerSubmit");

    const passwordButtons =
        document.querySelectorAll(
            ".stackly-password-toggle"
        );

    passwordButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const targetId =
                    button.dataset.target;

                const target =
                    document.getElementById(targetId);

                if (!target) {
                    return;
                }

                const icon =
                    button.querySelector("i");

                if (target.type === "password") {

                    target.type = "text";

                    button.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                    if (icon) {
                        icon.className =
                            "fa-regular fa-eye-slash";
                    }

                } else {

                    target.type = "password";

                    button.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                    if (icon) {
                        icon.className =
                            "fa-regular fa-eye";
                    }

                }

            }
        );

    });

    function clearErrors() {

        document
            .querySelectorAll(".stackly-field-error")
            .forEach(function (error) {

                error.textContent = "";

            });

        document
            .querySelectorAll(".stackly-register-input")
            .forEach(function (inputWrapper) {

                inputWrapper.classList.remove(
                    "invalid"
                );

            });

    }

    function showError(
        field,
        errorId,
        text
    ) {

        const wrapper =
            field
                ? field.closest(
                    ".stackly-register-input"
                )
                : null;

        const error =
            document.getElementById(errorId);

        if (wrapper) {
            wrapper.classList.add("invalid");
        }

        if (error) {
            error.textContent = text;
        }

    }

    function validateEmail(value) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            value
        );

    }

    function validatePhone(value) {

        return /^[0-9+\-\s()]{10,16}$/.test(
            value
        );

    }

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            clearErrors();

            message.textContent = "";

            let valid = true;

            const nameValue =
                fullName.value.trim();

            const emailValue =
                email.value.trim();

            const phoneValue =
                phone.value.trim();

            const passwordValue =
                password.value;

            const confirmValue =
                confirmPassword.value;

            const companyValue =
                companyName.value.trim();

            if (nameValue.length < 3) {

                showError(
                    fullName,
                    "nameError",
                    "Please enter your full name."
                );

                valid = false;

            }

            if (!validateEmail(emailValue)) {

                showError(
                    email,
                    "emailError",
                    "Please enter a valid email address."
                );

                valid = false;

            }

            if (!validatePhone(phoneValue)) {

                showError(
                    phone,
                    "phoneError",
                    "Please enter a valid phone number."
                );

                valid = false;

            }

            if (passwordValue.length < 6) {

                showError(
                    password,
                    "passwordError",
                    "Password must contain at least 6 characters."
                );

                valid = false;

            }

            if (confirmValue !== passwordValue) {

                showError(
                    confirmPassword,
                    "confirmError",
                    "Passwords do not match."
                );

                valid = false;

            }

            if (
                companyValue.length > 0 &&
                companyValue.length < 2
            ) {

                showError(
                    companyName,
                    "companyError",
                    "Please enter a valid company name."
                );

                valid = false;

            }

            if (!terms.checked) {

                const termsError =
                    document.getElementById(
                        "termsError"
                    );

                if (termsError) {
                    termsError.textContent =
                        "Please accept the Terms & Conditions.";
                }

                valid = false;

            }

            if (!valid) {

                if (typeof gsap !== "undefined") {

                    gsap.fromTo(
                        ".stackly-register-card",
                        {
                            x: -5
                        },
                        {
                            x: 5,
                            duration: 0.07,
                            repeat: 5,
                            yoyo: true,
                            clearProps: "x"
                        }
                    );

                }

                return;

            }

            const existingUsers =
                JSON.parse(
                    localStorage.getItem(
                        "stacklyUsers"
                    ) || "[]"
                );

            const existingUser =
                existingUsers.find(
                    function (user) {
                        return (
                            user.email.toLowerCase() ===
                            emailValue.toLowerCase()
                        );
                    }
                );

            if (existingUser) {

                showError(
                    email,
                    "emailError",
                    "An account with this email already exists."
                );

                if (typeof gsap !== "undefined") {

                    gsap.fromTo(
                        ".stackly-register-card",
                        {
                            x: -5
                        },
                        {
                            x: 5,
                            duration: 0.07,
                            repeat: 5,
                            yoyo: true,
                            clearProps: "x"
                        }
                    );

                }

                return;

            }

            const accountType =
                document.getElementById(
                    "accountType"
                );

            const newUser = {
                name: nameValue,
                email: emailValue,
                phone: phoneValue,
                password: passwordValue,
                company: companyValue,
                accountType: accountType
                    ? accountType.value
                    : "",
                role: "User",
                createdAt:
                    new Date().toISOString()
            };

            existingUsers.push(newUser);

            localStorage.setItem(
                "stacklyUsers",
                JSON.stringify(
                    existingUsers
                )
            );

            localStorage.setItem(
                "registeredEmail",
                emailValue
            );

            localStorage.setItem(
                "registeredName",
                nameValue
            );

            message.textContent =
                "Account created successfully. Redirecting to login...";

            message.style.color =
                "#648f16";

            registerSubmit.classList.add(
                "loading"
            );

            const submitText =
                registerSubmit.querySelector("span");

            if (submitText) {
                submitText.textContent =
                    "Account Created";
            }

            if (typeof gsap !== "undefined") {

                gsap.timeline()
                    .to(
                        registerSubmit,
                        {
                            scale: 0.97,
                            duration: 0.12
                        }
                    )
                    .to(
                        registerSubmit,
                        {
                            scale: 1,
                            duration: 0.35,
                            ease: "back.out(2)"
                        }
                    );

            }

            setTimeout(function () {

                window.location.href =
                    "login.html";

            }, 1300);

        }
    );

    if (typeof gsap !== "undefined") {

        const timeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

        timeline

            .from(
                ".stackly-register-card",
                {
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                    duration: 0.75
                }
            )

            .from(
                ".stackly-register-brand",
                {
                    y: 14,
                    opacity: 0,
                    duration: 0.4
                },
                "-=0.4"
            )

            .from(
                ".stackly-register-heading",
                {
                    y: 17,
                    opacity: 0,
                    duration: 0.45
                },
                "-=0.25"
            )

            .from(
                ".stackly-register-section-title",
                {
                    x: -15,
                    opacity: 0,
                    duration: 0.35,
                    stagger: 0.07
                },
                "-=0.2"
            )

            .from(
                ".stackly-register-field",
                {
                    y: 10,
                    opacity: 0,
                    duration: 0.3,
                    stagger: 0.04
                },
                "-=0.2"
            )

            .from(
                ".stackly-register-submit",
                {
                    y: 10,
                    opacity: 0,
                    duration: 0.35
                },
                "-=0.15"
            );

        gsap.to(
            ".stackly-register-orbit-one",
            {
                rotation: 360,
                duration: 26,
                repeat: -1,
                ease: "none"
            }
        );

        gsap.to(
            ".stackly-register-orbit-two",
            {
                rotation: -360,
                duration: 32,
                repeat: -1,
                ease: "none"
            }
        );

        gsap.to(
            ".stackly-register-glow-one",
            {
                x: 18,
                y: -12,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

        gsap.to(
            ".stackly-register-glow-two",
            {
                x: -16,
                y: 12,
                duration: 4.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }

});