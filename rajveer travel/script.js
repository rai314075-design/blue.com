/* ===== Smooth Scroll for nav links ===== */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");

        if (targetId !== "#") {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* ===== Welcome Alert ===== */
window.addEventListener("load", () => {
    console.log("Rajveer Travel Website Loaded Successfully 🚍");
});


/* ===== Button click animation ===== */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.textContent = "Loading...";
        setTimeout(() => {
            btn.textContent = "Learn More";
        }, 1000);
    });
});


/* ===== Navbar shadow on scroll ===== */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
    }
});
