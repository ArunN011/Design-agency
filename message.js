document.addEventListener("DOMContentLoaded", function () {

    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const dashboardSidebar = document.getElementById("dashboardSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    const sidebarUserEmail = document.getElementById("sidebarUserEmail");
    const sidebarUserRole = document.getElementById("sidebarUserRole");

    const headerUserName = document.getElementById("headerUserName");
    const headerUserRole = document.getElementById("headerUserRole");

    const messageSearch = document.getElementById("messageSearch");
    const conversationItems = document.querySelectorAll(".stackly-conversation");

    const chatName = document.getElementById("chatName");
    const chatSubject = document.getElementById("chatSubject");
    const chatBody = document.getElementById("chatBody");

    const messageForm = document.getElementById("messageForm");
    const messageInput = document.getElementById("messageInput");

    const newMessageButton = document.getElementById("newMessageButton");
    const logoutLink = document.getElementById("logoutLink");

    let savedScrollPosition = 0;

    function lockPageScroll() {
        savedScrollPosition = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${savedScrollPosition}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";

        document.documentElement.style.overflow = "hidden";
        document.body.classList.add("stackly-menu-open");
    }

    function unlockPageScroll() {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";

        document.documentElement.style.overflow = "";
        document.body.classList.remove("stackly-menu-open");

        requestAnimationFrame(function () {
            window.scrollTo(0, savedScrollPosition);
        });
    }

    function openSidebar() {
        if (!dashboardSidebar || !sidebarOverlay || !mobileMenuButton) {
            return;
        }

        dashboardSidebar.classList.add("mobile-open");
        sidebarOverlay.classList.add("active");

        lockPageScroll();

        mobileMenuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        mobileMenuButton.setAttribute(
            "aria-label",
            "Close navigation"
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    function closeSidebar() {
        if (!dashboardSidebar || !sidebarOverlay || !mobileMenuButton) {
            return;
        }

        dashboardSidebar.classList.remove("mobile-open");
        sidebarOverlay.classList.remove("active");

        unlockPageScroll();

        mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';

        mobileMenuButton.setAttribute(
            "aria-label",
            "Open navigation"
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", function () {

            const isOpen =
                dashboardSidebar &&
                dashboardSidebar.classList.contains("mobile-open");

            if (isOpen) {
                closeSidebar();
            } else {
                openSidebar();
            }

        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener(
            "click",
            closeSidebar
        );
    }

    document
        .querySelectorAll(".stackly-sidebar-link")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                if (window.innerWidth <= 991) {
                    closeSidebar();
                }

            });

        });

    window.addEventListener("resize", function () {

        if (window.innerWidth > 991) {
            closeSidebar();
        }

    });

    window.addEventListener("pageshow", function () {
        closeSidebar();
    });

    const savedEmail =
        localStorage.getItem("userEmail");

    const savedRole =
        localStorage.getItem("userRole");

    const displayEmail =
        savedEmail || "user@example.com";

    const displayRole =
        savedRole || "User";

    function createDisplayName(email) {

        if (!email || !email.includes("@")) {
            return email || "User";
        }

        const username =
            email
                .split("@")[0]
                .replace(/[0-9]/g, "")
                .replace(/[._-]/g, " ")
                .trim();

        if (!username) {
            return email;
        }

        return username
            .split(" ")
            .filter(Boolean)
            .map(function (word) {
                return (
                    word.charAt(0).toUpperCase() +
                    word.slice(1)
                );
            })
            .join(" ");
    }

    const displayName =
        createDisplayName(displayEmail);

    if (sidebarUserEmail) {
        sidebarUserEmail.textContent =
            displayEmail;
    }

    if (sidebarUserRole) {
        sidebarUserRole.textContent =
            displayRole;
    }

    if (headerUserName) {
        headerUserName.textContent =
            displayName;
    }

    if (headerUserRole) {
        headerUserRole.textContent =
            displayRole;
    }

    function updateChat(item) {

        if (!item) {
            return;
        }

        conversationItems.forEach(function (conversation) {
            conversation.classList.remove("active");
        });

        item.classList.add("active");

        const selectedName =
            item.dataset.name || "Conversation";

        const selectedSubject =
            item.dataset.subject || "";

        const selectedMessage =
            item.dataset.message || "";

        if (chatName) {
            chatName.textContent =
                selectedName;
        }

        if (chatSubject) {
            chatSubject.textContent =
                selectedSubject;
        }

        const messageGroups =
            chatBody
                ? chatBody.querySelectorAll(
                    ".stackly-message-group"
                )
                : [];

        if (messageGroups.length > 0) {

            const lastGroup =
                messageGroups[
                    messageGroups.length - 1
                ];

            const bubble =
                lastGroup.querySelector(
                    ".stackly-chat-bubble"
                );

            if (bubble) {
                bubble.textContent =
                    selectedMessage;
            }
        }

        if (chatBody) {
            requestAnimationFrame(function () {
                chatBody.scrollTop =
                    chatBody.scrollHeight;
            });
        }
    }

    conversationItems.forEach(function (item) {

        item.addEventListener(
            "click",
            function () {
                updateChat(item);
            }
        );

    });

    if (messageSearch) {

        messageSearch.addEventListener(
            "input",
            function () {

                const searchText =
                    messageSearch.value
                        .toLowerCase()
                        .trim();

                conversationItems.forEach(
                    function (item) {

                        const name =
                            (
                                item.dataset.name ||
                                ""
                            ).toLowerCase();

                        const subject =
                            (
                                item.dataset.subject ||
                                ""
                            ).toLowerCase();

                        const message =
                            (
                                item.dataset.message ||
                                ""
                            ).toLowerCase();

                        const matches =
                            name.includes(searchText) ||
                            subject.includes(searchText) ||
                            message.includes(searchText);

                        item.style.display =
                            matches
                                ? "grid"
                                : "none";

                    }
                );

            }
        );

    }

    function sendMessage() {

        if (!messageInput || !chatBody) {
            return;
        }

        const text =
            messageInput.value.trim();

        if (!text) {
            messageInput.focus();
            return;
        }

        const row =
            document.createElement("div");

        row.className =
            "stackly-chat-row outgoing";

        row.innerHTML = `
            <div class="stackly-message-group">
                <div class="stackly-chat-bubble"></div>
                <span class="stackly-message-time">Just now</span>
            </div>

            <div class="stackly-chat-mini-avatar user">
                <i class="fa-solid fa-user"></i>
            </div>
        `;

        const bubble =
            row.querySelector(
                ".stackly-chat-bubble"
            );

        if (bubble) {
            bubble.textContent = text;
        }

        chatBody.appendChild(row);

        messageInput.value = "";

        chatBody.scrollTop =
            chatBody.scrollHeight;
    }

    if (messageForm) {

        messageForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                sendMessage();

            }
        );

    }

    if (newMessageButton && messageInput) {

        newMessageButton.addEventListener(
            "click",
            function () {
                messageInput.focus();
            }
        );

    }

    if (logoutLink) {

        logoutLink.addEventListener(
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

    if (chatBody) {

        requestAnimationFrame(function () {
            chatBody.scrollTop =
                chatBody.scrollHeight;
        });

    }

    if (typeof gsap !== "undefined") {

        gsap.from(
            ".stackly-message-intro-text",
            {
                opacity: 0,
                y: 24,
                duration: 0.7,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-new-message-button",
            {
                opacity: 0,
                y: 18,
                duration: 0.6,
                delay: 0.12,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".stackly-inbox-panel, .stackly-chat-panel",
            {
                opacity: 0,
                y: 24,
                duration: 0.75,
                stagger: 0.12,
                delay: 0.12,
                ease: "power3.out"
            }
        );

        gsap.utils
            .toArray(".stackly-conversation")
            .forEach(function (item, index) {

                gsap.from(item, {
                    opacity: 0,
                    x: -14,
                    duration: 0.35,
                    delay: 0.25 + index * 0.06,
                    ease: "power2.out"
                });

            });

    }

});