// Prompt input nama sebelum website tampil
let userName = prompt("Masukkan nama kamu:");

// Jika user tidak isi, fallback jadi "Guest"
if (!userName || userName.trim() === "") {
  userName = "Guest";
}

// Welcome text personalization
const welcomeText = document.getElementById("welcome-text");
welcomeText.textContent = `Hi ${userName}, Welcome To Website`;

// Form validation and output
const form = document.getElementById("messageForm");
const currentTime = document.getElementById("current-time");
const outName = document.getElementById("out-name");
const outDob = document.getElementById("out-dob");
const outGender = document.getElementById("out-gender");
const outMessage = document.getElementById("out-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const message = document.getElementById("messageText").value;

  // Show output
  const now = new Date();
  currentTime.textContent = now.toString();
  outName.textContent = name;
  outDob.textContent = dob;
  outGender.textContent = gender;
  outMessage.textContent = message;

  // Reset form
  form.reset();
});

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
}
