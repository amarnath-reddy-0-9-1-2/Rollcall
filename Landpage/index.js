var slideIndex = 1;
var timegap = 15000;


window.onload = function () {
  setTimeout(showSlides, timegap);
  
}

function plusSlides(n) {
  slideIndex += n;
  --slideIndex;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  --slideIndex;
  showSlides();
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");
  ++slideIndex;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, timegap);
}