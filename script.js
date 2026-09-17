function openMessage() {
    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });

    createHearts();
}

function createHearts() {

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 3s ease, opacity 3s ease";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
