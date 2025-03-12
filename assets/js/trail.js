document.addEventListener("mousemove", function(event) {
    let trail = document.createElement("div");
    trail.className = "trail";
    document.body.appendChild(trail);

    trail.style.left = `${event.pageX - 5}px`;
    trail.style.top = `${event.pageY - 5}px`;

    setTimeout(() => {
        trail.remove();
    }, 500);
});