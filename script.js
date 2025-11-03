document.addEventListener('DOMContentLoaded', () => {

    // ======== 1. Mobile Menu Toggle ========
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ======== 2. Smooth Scrolling for Nav Links ========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu on click
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }

                // Smooth scroll to element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ======== 3. Subtle Fade-in Animation on Scroll ========
    const sectionsToAnimate = document.querySelectorAll('.fade-in-section');

    if (sectionsToAnimate.length > 0) {
        const observerOptions = {
            root: null, // observes intersections relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% of the item must be visible to trigger
        };

        const intersectionCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once it's visible to prevent re-animation
                    observer.unobserve(entry.target); 
                }
            });
        };

        const observer = new IntersectionObserver(intersectionCallback, observerOptions);

        sectionsToAnimate.forEach(section => {
            observer.observe(section);
        });
    }
});

