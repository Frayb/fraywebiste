document.addEventListener("DOMContentLoaded", () => {
    const reviewsSection = document.getElementById("review-container");

    // Array to store reviews
    const reviews = [];

    // Function to render reviews dynamically
    function renderReviews() {
        // Clear previous reviews to avoid duplication
        reviewsSection.innerHTML = "";

        reviews.forEach(review => {
            const div = document.createElement("div");
            div.classList.add("review");
            div.innerHTML = `<p>"${review}" - Anonymous</p>`;
            reviewsSection.appendChild(div);
        });
    }

    // Function to add a new review dynamically
    window.addReview = function () {
        const newReview = prompt("Enter your review:");
        if (newReview) {
            reviews.push(newReview);
            renderReviews();
            alert("Thank you! Your review has been added.");
        }
    };

    // Initial rendering of reviews
    renderReviews();
});
