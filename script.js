document.addEventListener("DOMContentLoaded", function () {
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
});
