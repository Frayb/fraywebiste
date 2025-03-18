document.getElementById("review-btn").addEventListener("click", function () {
    let review = prompt("Please enter your review:");
    if (review) {
        let reviewContainer = document.getElementById("review-container");

        let reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.textContent = review;

        reviewContainer.appendChild(reviewElement);
    }
});
