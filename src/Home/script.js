let slideIndex = 1;
var slides = document.querySelectorAll(".mySlides");
function showSlides() {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

// Automatically move to the next slide every 5 seconds
setInterval(function() {
  plusSlides(1);
}, 5000);

function navbarForMobile() {
  const navbarMobileOptions = document.getElementById("NavbarMobileOptions");
  if (navbarMobileOptions.classList.contains("show")) {
    navbarMobileOptions.classList.remove("show");
    navbarMobileOptions.style.display = "none";
  } else {
    navbarMobileOptions.classList.add("show");
    navbarMobileOptions.style.display = "block";
  }
}

