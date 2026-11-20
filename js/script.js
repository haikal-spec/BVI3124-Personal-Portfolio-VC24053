
// ========================================
// 1. DYNAMIC GREETING
// ========================================

function displayGreeting() {

    const greetingElement = document.createElement("p");

    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    }
    else if (hour < 18) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good Evening!";
    }

    greetingElement.textContent = greeting;
    greetingElement.className = "dynamic-greeting";

    const welcomeText = document.querySelector(".welcome-text");

    if (welcomeText) {
        welcomeText.parentNode.insertBefore(
            greetingElement,
            welcomeText
        );
    }
}


// ========================================
// 2. TYPING EFFECT
// ========================================

function typingEffect() {

    const roleElement = document.querySelector(".hero h2");

    const roles = [
        "Aspiring Engineering Technologist",
        "Electronic Technology Student",
        "Future Automation Technologist",
        "Interested in IoT & PLC Systems"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeText() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            roleElement.textContent =
                currentRole.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeText, 1800);
                return;
            }

        } else {

            roleElement.textContent =
                currentRole.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeText, deleting ? 50 : 100);
    }

    if (roleElement) {
        typeText();
    }
}


// ========================================
// 3. AUTOMATIC COPYRIGHT YEAR
// ========================================

function updateCopyrightYear() {

    const yearElement = document.getElementById("year");

    if (yearElement) {

        const currentYear = new Date().getFullYear();

        yearElement.textContent = currentYear;
    }
}


// ========================================
// 4. CONTACT FORM VALIDATION
// ========================================

function contactFormValidation() {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert("Please fill in all fields.");

            }
            else if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

            }
            else {

                alert("Your message has been validated successfully.");

                contactForm.reset();

            }

        });
    }
}


// ========================================
// 5. RUN ALL FUNCTIONS
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    displayGreeting();

    typingEffect();

    updateCopyrightYear();

    contactFormValidation();

});


// ========================================
// 6. MOBILE HAMBURGER MENU
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function() {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    navbar.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navbar.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}
