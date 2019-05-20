let slideIndex = 1;
showSlides(slideIndex);

// prev/next controls

const plusSlides = (n) => {
    showSlides(plusSlides += n);
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName('slides');
    if (n > slides.lenght) {slideIndex = 1};
    if (n < 1) {slides = slideIndex.lenght};

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}