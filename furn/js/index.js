window.onload = function (){
    var slideIndex = 0;
    showSlides(slideIndex);
    
    document.getElementsByClassName("prev")[0].addEventListener("click", () =>  plusSlides(-1));
    document.getElementsByClassName("next")[0].addEventListener("click", () =>  plusSlides(1));
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

document.getElementsByClassName("dot")[0].addEventListener("click", () =>  currentSlide(0));
document.getElementsByClassName("dot")[1].addEventListener("click", () =>  currentSlide(1));
document.getElementsByClassName("dot")[2].addEventListener("click", () =>  currentSlide(2));

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("fade");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
          document.getElementsByClassName("dot")[slideIndex-1].style.backgroundColor = "#bbb"; 
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "flex";  
      document.getElementsByClassName("dot")[slideIndex-1].style.backgroundColor = "red";
      dots[slideIndex-1].className += " active";
    }



function showSlides() {
    var i;
    var slides = document.getElementsByClassName("fade");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        // document.getElementsByClassName("dot")[slideIndex-1].style.backgroundColor = "#bbb";
    }
    slideIndex++;
    
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "flex"; 
    // document.getElementsByClassName("dot")[slideIndex-2].style.backgroundColor = "red";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
    
    
}
}