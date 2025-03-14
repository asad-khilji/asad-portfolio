var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    autoHeight: true, // Ensures slide height adjusts
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: { slidesPerView: 3, spaceBetween: 20 }, // Large screens
        1024: { slidesPerView: 3, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 10 }, // Tablets
        600: { slidesPerView: 1.5, spaceBetween: 10 }, // Large phones
        500: { slidesPerView: 1, spaceBetween: 5 }, // Small screens (New)
        480: { slidesPerView: 1, spaceBetween: 5 }, // Mobile devices
    }
});
