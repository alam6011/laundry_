// Animasi muncul ketika discroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function addTestimonial() {
    const message = document.getElementById("messageInput").value.trim();
    const author = document.getElementById("authorInput").value.trim();
    const list = document.getElementById("testimonialList");
  
    if (message === "" || author === "") {
      alert("Harap isi nama dan komentar terlebih dahulu!");
      return;
    }
  
    // Buat elemen baru
    const newTestimonial = document.createElement("div");
    newTestimonial.classList.add("testimonial");
  
    newTestimonial.innerHTML = `
      <p class="message">“${message}”</p>
      <p class="author">– ${author}</p>
    `;
  
    // Tambahkan ke daftar testimoni
    list.prepend(newTestimonial);
  
    // Reset form
    document.getElementById("messageInput").value = "";
    document.getElementById("authorInput").value = "";
  }
  


window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Jalankan sekali di awal
