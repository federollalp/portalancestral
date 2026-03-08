const heroImg = document.querySelector('.hero-img');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = 180;

    const progress = Math.min(scrollY / maxScroll, 1);

    heroImg.style.filter = `blur(${progress * 8}px)`;
    heroImg.style.opacity = `${1 - progress * 0.5}`;
});