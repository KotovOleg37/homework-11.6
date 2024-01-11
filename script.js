let slideIndex = 0;

function showSlide(n){
    const slides = document.getElementsByClassName("slider__information-details");
    const links = document.getElementsByClassName("slider-visual__link");
    const images = document.getElementsByClassName("slider-visual__image");
    
    if (n >= slides.length){
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        links[i].classList.remove("active");
        images[i].classList.remove("active");
        dots[i].classList.remove("active")
    }
    slides[slideIndex].classList.add("active");
    links[slideIndex].classList.add("active");
    images[slideIndex].classList.add("active")
    dots[slideIndex].classList.add("active")
}

document.querySelector(".slider__prev").addEventListener("click", () => showSlide(slideIndex - 1));
document.querySelector(".slider__next").addEventListener("click", () => showSlide(slideIndex + 1));

const dots = document.querySelectorAll(".slider__dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
    
});

showSlide(slideIndex);

// Обновление текста при переключении слайдов
function changeSlide(slideIndex) {
    showSlide(slideIndex);
}

const controlLinksContainer = document.querySelector('.slider-visual__images');

function controlImg() {

}





































// const hotels = [
//     {
//         "city": 'Rostov-on-Don LCD admiral',
//         "apartment area": '81 m2',
//         "repair time": '3.5 months',
//         "repair cost": 'Upon request',
//         "img": '/images/image-1.png'
//     },
//     {
//         "city": 'Sochi Thieves',
//         "apartment area": '105 m2',
//         "repair time": '4 months',
//         "repair cost": 'Upon request',
//         "img": '/images/image-2.png'
//     },
//     {
//         "city": 'Rostov-on-Don Patriotic',
//         "apartment area": '93 m2',
//         "repair time": '3 months',
//         "repair cost": 'Upon request',
//         "img": '/images/image-3.png'
//     },
// ]