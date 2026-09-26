// Mobile Navigation
function toggleMenu() {
    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.toggle("show");
    }
}


// Set minimum booking date to today
const dateInput = document.getElementById("date");

if (dateInput) {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;
}


// WhatsApp Booking
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !service || !date || !time) {
            alert("Please fill in all required fields.");
            return;
        }

        const whatsappMessage =
`✨ *LAKSHMI PARLOURS - APPOINTMENT REQUEST* ✨

Hello! I would like to book an appointment.

👩 Name: ${name}
📱 Phone: ${phone}
💇‍♀️ Service: ${service}
📅 Date: ${date}
⏰ Time: ${time}

📝 Message:
${message || "No additional message"}

Thank you!
`;

        const whatsappNumber = "918868044057";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}


// Simple reveal animation
const revealElements = document.querySelectorAll(
    ".service-card, .value-grid > div, .contact-card, .gallery-item, .service-row"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(function(element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
