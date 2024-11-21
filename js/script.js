// Banner Auto Slide
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".banner-slide img");
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    slide.classList.remove("active");
  });
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("active");
}
setInterval(showSlides, 3000); // Change every 3 seconds
showSlides();

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("All fields are required!");
  } else if (!validateEmail(email)) {
    alert("Invalid email format!");
  } else {
    alert("Thank you for reaching out! We will get back to you soon.");
    
    // Kosongkan form setelah berhasil disubmit
    document.getElementById("contact-form").reset();
  }
});
// Select all Learn More buttons and the modal
const learnMoreButtons = document.querySelectorAll(".learn-more");
const modal = document.getElementById("infoModal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close-btn");

// Add click event to each button
learnMoreButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".glow-card");
    const info = card.getAttribute("data-info");
    modalText.textContent = info;
    modal.style.display = "block"; // Show the modal
  });
});

// Close the modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none"; // Hide the modal
});

// Close modal on clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"; // Hide the modal
  }
});


function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
