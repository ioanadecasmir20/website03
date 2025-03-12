document.addEventListener("DOMContentLoaded", function () {
    // FAQ Toggle Functionality
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

    // Testimonial Carousel Functionality
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

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    }, 5000);
});
