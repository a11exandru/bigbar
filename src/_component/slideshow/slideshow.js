// let slideIndex = 1;
// showSlides(slideIndex);

// prev/next controls

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName('slides');
//     if (n > slides.length) {slideIndex = 1};
//     if (n < 1) {slideIndex = slides.length};

//     for(i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[slideIndex - 1].style.display = "block";
// }

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName('slides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000)
}