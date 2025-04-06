document.addEventListener("DOMContentLoaded", () => {
    // Carousel Logic
    const images = [
        "images/TitleMedia1.png",
        "images/TitleMedia2.png",
        "images/TitleMedia3.png",
        "images/TitleMedia4.png",
        "images/TitleMedia5.png",
        "images/TitleMedia6.png"
    ];
    let currentIndex = 0;
    const carouselImage = document.querySelector(".carousel-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        carouselImage.src = images[currentIndex];
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds

    // Toggle Form Visibility
    const toggleButton = document.getElementById("toggleButton");
    const iframeContainer = document.getElementById("iframeContainer");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            if (iframeContainer.classList.contains("collapsed")) {
                iframeContainer.classList.remove("collapsed");
                iframeContainer.classList.add("expanded");
                this.textContent = "Close Form";
            } else {
                iframeContainer.classList.remove("expanded");
                iframeContainer.classList.add("collapsed");
                this.textContent = "Contact Us";
            }
        });
    }

    // Cookie Banner Logic
    const cookieBanner = document.getElementById("cookieBanner");

    if (cookieBanner) {
        document.getElementById("acceptCookies").addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.style.display = "none";
        });

        document.getElementById("rejectCookies").addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "false");
            cookieBanner.style.display = "none";
        });

        const cookiesAccepted = localStorage.getItem("cookiesAccepted");
        if (cookiesAccepted === "true" || cookiesAccepted === "false") {
            cookieBanner.style.display = "none";
        }
    }
});