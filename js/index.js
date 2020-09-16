let slideIndex = 0;

function slideshow() {
    let slides = document.getElementsByClassName("slides");
    
    console.log(slides);
    for (let i = 0; i < slides.length; it++) {
        slides[i].display = "none";
    }
    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(slideshow, 2000);
}
