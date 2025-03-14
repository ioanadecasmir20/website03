document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    // ✅ Toggle mobile menu
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // ✅ Close mobile menu when clicking a link
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768) { // Only close on mobile
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
            }
        });
    });

    // ✅ Click to Toggle Submenus
    document.querySelectorAll(".dropdown > a").forEach(menu => {
        menu.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            let submenu = this.nextElementSibling;

            // Close other open submenus
            document.querySelectorAll(".submenu").forEach(el => {
                if (el !== submenu) {
                    el.classList.remove("active");
                }
            });

            // ✅ Toggle clicked submenu
            submenu.classList.toggle("active");
        });
    });

    // ✅ Click to Toggle Sub-submenus
    document.querySelectorAll(".submenu li a").forEach(submenuItem => {
        submenuItem.addEventListener("click", function (event) {
            let subSubMenu = this.nextElementSibling;
            if (subSubMenu && subSubMenu.classList.contains("sub-submenu")) {
                event.preventDefault();

                // Close other sub-submenus
                document.querySelectorAll(".sub-submenu").forEach(el => {
                    if (el !== subSubMenu) {
                        el.classList.remove("active");
                    }
                });

                // ✅ Toggle clicked sub-submenu
                subSubMenu.classList.toggle("active");
            }
        });
    });

    // ✅ FAQ Toggle Functionality
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", function () {
            const isOpen = item.classList.contains("open");

            // Close all FAQ items
            faqItems.forEach(i => {
                i.classList.remove("open");
                i.querySelector(".faq-icon").textContent = "+";
            });

            // Toggle current item
            if (!isOpen) {
                item.classList.add("open");
                item.querySelector(".faq-icon").textContent = "−";
            }
        });
    });

    // ✅ Testimonial Carousel Functionality
    let currentIndex = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            dots[i].classList.remove("active");
        });
        testimonials[index].classList.add("active");
        dots[index].classList.add("active");
    }

    document.querySelector(".prev-btn").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            showTestimonial(currentIndex);
        });
    });

    // ✅ Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    }, 5000);
});
